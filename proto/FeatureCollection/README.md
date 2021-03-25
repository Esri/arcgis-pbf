# FeatureCollection Protocol Buffer Specification

## Version 1.0

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
"SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and
"OPTIONAL" in this document are to be interpreted as described in
[[RFC2119](https://tools.ietf.org/html/rfc2119)].

## Introduction

The FeatureCollection is an encoding of feature geographic and attribute data structures using the [Protocol Binary Format (PBF)](https://developers.google.com/protocol-buffers/docs/reference/proto3-spec). Notably, the FeatureCollection is an alternative encoding of a [FeatureSet](https://developers.arcgis.com/documentation/common-data-types/featureset-object.htm), ESRI's JSON encoding of [Feature objects](https://developers.arcgis.com/documentation/common-data-types/feature-object.htm). Not only are FeatureCollections serialized differently through the use of a new binary specification, but they also have fundamental structural differences that developers will need to account for. 

## Contents
- [Getting Started](#getting-started)
- [Schema](#schema)
  - [Enums](#enums)
  - [Field](#field)
  - [Transform](#transform)
  - [Geometry](#geometry)
  - [Value](#value)   
  - [Feature](#feature)
- [Querying](#querying)

## Getting Started

To get started, we recommend checking out the official [ProtocolBuffers Documentation](https://developers.google.com/protocol-buffers/). From there, take a look at one of the [guides](https://developers.google.com/protocol-buffers/docs/tutorials) based on your targetted programming language. If you plan on using ProtocolBuffers for the web, we recommend a couple of options for generating a parser - you can use either the official [`protoc`](https://developers.google.com/protocol-buffers/docs/reference/javascript-generated) compiler, or [`protobuf.js`](https://www.npmjs.com/package/protobufjs). 

Depending on performance requirements, you may also opt to manually parse the payloads yourself. One of the advantages of protocol buffers is that you can have full control over how you want to deserialize, which in many instances can lead to sigificantly improved performance. 

## Schema

### Enums:

All enum types are now encoded as `ProtocolBuffer` `enums` rather than strings. For instance:
```proto
enum GeometryType {
  esriGeometryTypePoint = 0;
  esriGeometryTypeMultipoint = 1;
  esriGeoemtryTypePolyline = 2;
  esriGeometryTypePolygon = 3;
}
 ``` 
See the PBF file for the [full list](https://devtopia.esri.com/matt9222/arcgis-pbf/blob/master/proto/FeatureCollection/FeatureCollection.proto#L20-L78) of supported `Enums`. 
 
### Notable Messages:
#### Field
Each field in the returned response correlates to an attribute present on a feature. Field messages are returned in the same order as the attribute messages for a feature, and are needed to decode the name and type information associated with an attribute value. 
```proto
message Field {       
  string name = 1; 
  FieldType fieldType = 2;
  string alias = 3; 
  SQLType sqlType = 4;
  string domain = 5; 
  string defaultValue = 6;
}
```

#### Transform 
One major difference from making JSON requests is that every FeatureCollection will now return a `Transform`. The FeatureCollection PBF specification only supports integer coorindates. To get a geometry's vertices with respect to world coordinates, it is neccessary to multiply by the FeatureCollection's `Transform`.
```proto
message Transform {
  QuantizeOriginPostion quantizeOriginPostion= 1;
  Scale scale = 2;
  Translate translate = 3;
}
```  

#### Geometry 
The geometry message is a new encoding and structure from traditional [`esriJSON`](https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm) geometries. Unlike with esriJSON, which consisted of a series of nested rings under diffently named properties, the new PBF-encoded format instead uses a unified flattened array of delta-encoded coodinates and vertex lengths.

Each length of the lengths array includes the number of *vertices* for a single ring. The actual number of coordinates for each ring will therefore be the lenght of the ring multiplied by the stride of the coodinates. When only x and y are present, the stride is 2, with the stride increased by one for z or m values. 
```proto
message Geometry {
  GeometryType geometryType = 1;
  repeated uint32 lengths = 2 [packed = true]; // coordinate lengths
  repeated sint32 coords = 3 [packed = true]; // delta-encoded integers
}    
``` 
*Example: Interpreting a point*

A following PBF messages encodeds a point, with an x value of 256, and a y value of 256. Each coordinate is *relative* to the transform returned in the payload. Multiply by the transform to get the point's world position. 
```ts
geometry: {
  geometryType: 0 (esriGeometryTypePoint)
  coords: [256, 256]
  // lengths for points may be omited
}
```

*Example: Interpreting a polygon*

Polygons are encoded similarly. The coords array linearly encodes the vertices of each ring of the polygon, and the lengths array can be used to determine the start and end of each ring. Again, each coordinate is *relative* to the transform returned in the payload. Multiply by the transform to get the world position for each vertex:
```ts
geometry: {
  geometryType: 3 (esriGeometryTypePolygon)
  coords: [256, 256, 2, 0, 0, 2, -2, 0, 0, -2, 56, 56, 2, 0, 0, 2, -2, 0, 0, -2]
  lengths: [5, 5]
}
```

If we wanted to convert this polygon back to esriJSON format, we might get something that looks like this: 
```ts
Polygon {
  rings: [ 
    [ [256, 256], [258, 256], [258, 258], [256, 258], [256, 256] ], 
    [ [56, 56], [58, 56], [58, 58], [56, 58], [56, 56] ] 
}
```

#### Value 
The `Value` message type is how feature attributes are now encoded. A feature message will includes a repeated number of values, returned in the same order of the fields listed in the `FeatureCollection`. Decode messages by mapping them to the field information at the same index as the returned `Value`.

```proto
message Value {
  oneof value_type {
  // Exactly one of these values must be present in a valid message
    string string_value = 1;
    float  float_value = 2;
    double double_value = 3;
    sint32 sint_value = 4;
    uint32 uint_value = 5;
    int64  int64_value = 6;
    uint64 uint64_value = 7;
    sint64 sint64_value = 8;
    bool bool_value = 9;   
  }
}
```

#### Feature
The `Feature` message brings `Values` and `Geometry` together. It provides a different encoding to the same [Feature Object](https://developers.arcgis.com/documentation/common-data-types/feature-object.htm) type already returned via the f=JSON format. 
```proto
message Feature {
  repeated Value attributes = 1;
  oneof compressed_geometry {
    Geometry geometry = 2;
  }
  Geometry centroid = 4;
}
```

## Querying
For querying, refer to the [REST API documentation](https://developers.arcgis.com/rest/services-reference/query-feature-service-layer-.htm). The main difference here will be that your requests will include `f=pbf`, and the response that you get back will be binary, rather than text. Additionally, it is important to note that geometry coordinates *will always be returned as integers and delta-encoded*. This difference is important as it means that the returned PBF payload will always include a transformation by which geometries should be multiplied by in order to get back world coordinates. 

Below are a few different examples that correspond to different types of PBF queries - FeatureResult queries, ObjectId queries, and FeatureCount queries. 

### Example 1: Feature Query Results

```
{
  version: 1
  featureResult: {
    objectIdFieldName: "ObjectId"
    globalIdFieldName: "globalId"
    geometryType: "esriGeometryTypePolyline"
    fields: field1
    fields: field2
    fields: field3
    features {
      attributes: "Egypt"
      attributes: 1.23
      attributes: "T1"
      geometry: [3 2]
      geometry: [2 2 0 8 8 0 1 1 2 4]
    }
    features {
      attributes: "USA"
      attributes: 2.23
      attributes: "T2"
      geometry: [3 2]
      geometry: [1 1 1 9 7 2 1 1 1 2]
    }
    features {
      attributes: "France"
      attributes: 3.23
      attributes: "T2"
      geometry: [3 2]
      geometry: [3 3 2 4 5 3 3 3 4 5]
    }
  }
}
```

We can interpret these features as follows: 

### Feature 1:
```ts
feature {
  attributes: {
    field1: "Egypt",
    field2: 1.23,
    field3: "T1",
  },
  geometry: {
    paths: [
      [ [2,2], [2,10], [10,10] ],
      [ [1,1], [3,5] ] 
    ]
  }
}
```
### Feature 2:
```ts
feature {
  attributes: {
    field1: "USA",
    field2: 2.23,
    field3: "T2",
  },
  geometry: {
    paths: [
      [ [1,1], [2,10], [9,9] ],
      [ [1,1], [2,3] ] 
    ]
  }
}
```
### Feature 3:
```ts
feature {
  attributes: {
    field1: "France",
    field2: 3.23,
    field3: "T2",
  },
  geometry: {
    paths: [
      [ [3,3], [5,7], [10,10] ],
      [ [3,3], [7,8] ] 
    ]
  }
}
```

### Example 2: ObjectIds Query 
```
{
  version: 1
  idsResult: {
    objectIdFieldName: "ObjectId"
    globalIdFieldName: "globalId"
    objectIds: 1
    objectIds: 3
    objectIds: 8
  }
}
```

### Example 3: Feature Count Query
```
{ 
  version: 1
    countResult: {
    count: 14
  }
}
```

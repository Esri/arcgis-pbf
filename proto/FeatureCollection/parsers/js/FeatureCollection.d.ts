import * as $protobuf from "protobufjs";
/** Namespace esriPBuffer. */
export namespace esriPBuffer {

    /** Properties of a FeatureCollectionPBuffer. */
    interface IFeatureCollectionPBuffer {

        /** FeatureCollectionPBuffer version */
        version?: (string|null);

        /** FeatureCollectionPBuffer queryResult */
        queryResult?: (esriPBuffer.FeatureCollectionPBuffer.QueryResult|null);
    }

    /** Represents a FeatureCollectionPBuffer. */
    class FeatureCollectionPBuffer implements IFeatureCollectionPBuffer {

        /**
         * Constructs a new FeatureCollectionPBuffer.
         * @param [properties] Properties to set
         */
        constructor(properties?: esriPBuffer.IFeatureCollectionPBuffer);

        /** FeatureCollectionPBuffer version. */
        public version: string;

        /** FeatureCollectionPBuffer queryResult. */
        public queryResult?: (esriPBuffer.FeatureCollectionPBuffer.QueryResult|null);

        /**
         * Decodes a FeatureCollectionPBuffer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureCollectionPBuffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer;

        /**
         * Verifies a FeatureCollectionPBuffer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace FeatureCollectionPBuffer {

        /** GeometryType enum. */
        enum GeometryType {
            esriGeometryTypePoint = 0,
            esriGeometryTypeMultipoint = 1,
            esriGeometryTypePolyline = 2,
            esriGeometryTypePolygon = 3,
            esriGeometryTypeMultipatch = 4
        }

        /** FieldType enum. */
        enum FieldType {
            esriFieldTypeSmallInteger = 0,
            esriFieldTypeInteger = 1,
            esriFieldTypeSingle = 2,
            esriFieldTypeDouble = 3,
            esriFieldTypeString = 4,
            esriFieldTypeDate = 5,
            esriFieldTypeOID = 6,
            esriFieldTypeGeometry = 7,
            esriFieldTypeBlob = 8,
            esriFieldTypeRaster = 9,
            esriFieldTypeGUID = 10,
            esriFieldTypeGlobalID = 11,
            esriFieldTypeXML = 12
        }

        /** SQLType enum. */
        enum SQLType {
            sqlTypeBigInt = 0,
            sqlTypeBinary = 1,
            sqlTypeBit = 2,
            sqlTypeChar = 3,
            sqlTypeDate = 4,
            sqlTypeDecimal = 5,
            sqlTypeDouble = 6,
            sqlTypeFloat = 7,
            sqlTypeGeometry = 8,
            sqlTypeGUID = 9,
            sqlTypeInteger = 10,
            sqlTypeLongNVarchar = 11,
            sqlTypeLongVarbinary = 12,
            sqlTypeLongVarchar = 13,
            sqlTypeNChar = 14,
            sqlTypeNVarchar = 15,
            sqlTypeOther = 16,
            sqlTypeReal = 17,
            sqlTypeSmallInt = 18,
            sqlTypeSqlXml = 19,
            sqlTypeTime = 20,
            sqlTypeTimestamp = 21,
            sqlTypeTimestamp2 = 22,
            sqlTypeTinyInt = 23,
            sqlTypeVarbinary = 24,
            sqlTypeVarchar = 25
        }

        /** QuantizeOriginPostion enum. */
        enum QuantizeOriginPostion {
            upperLeft = 0,
            lowerLeft = 1
        }

        /** Properties of a SpatialReference. */
        interface ISpatialReference {

            /** SpatialReference wkid */
            wkid?: (number|null);

            /** SpatialReference lastestWkid */
            lastestWkid?: (number|null);

            /** SpatialReference vcsWkid */
            vcsWkid?: (number|null);

            /** SpatialReference latestVcsWkid */
            latestVcsWkid?: (number|null);

            /** SpatialReference wkt */
            wkt?: (string|null);
        }

        /** Represents a SpatialReference. */
        class SpatialReference implements ISpatialReference {

            /**
             * Constructs a new SpatialReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.ISpatialReference);

            /** SpatialReference wkid. */
            public wkid: number;

            /** SpatialReference lastestWkid. */
            public lastestWkid: number;

            /** SpatialReference vcsWkid. */
            public vcsWkid: number;

            /** SpatialReference latestVcsWkid. */
            public latestVcsWkid: number;

            /** SpatialReference wkt. */
            public wkt: string;

            /**
             * Decodes a SpatialReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpatialReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.SpatialReference;

            /**
             * Verifies a SpatialReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Field. */
        interface IField {

            /** Field name */
            name?: (string|null);

            /** Field fieldType */
            fieldType?: (esriPBuffer.FeatureCollectionPBuffer.FieldType|null);

            /** Field alias */
            alias?: (string|null);

            /** Field sqlType */
            sqlType?: (esriPBuffer.FeatureCollectionPBuffer.SQLType|null);

            /** Field domain */
            domain?: (string|null);

            /** Field defaultValue */
            defaultValue?: (string|null);
        }

        /** Represents a Field. */
        class Field implements IField {

            /**
             * Constructs a new Field.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IField);

            /** Field name. */
            public name: string;

            /** Field fieldType. */
            public fieldType: esriPBuffer.FeatureCollectionPBuffer.FieldType;

            /** Field alias. */
            public alias: string;

            /** Field sqlType. */
            public sqlType: esriPBuffer.FeatureCollectionPBuffer.SQLType;

            /** Field domain. */
            public domain: string;

            /** Field defaultValue. */
            public defaultValue: string;

            /**
             * Decodes a Field message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Field
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.Field;

            /**
             * Verifies a Field message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value floatValue */
            floatValue?: (number|null);

            /** Value doubleValue */
            doubleValue?: (number|null);

            /** Value sintValue */
            sintValue?: (number|null);

            /** Value uintValue */
            uintValue?: (number|null);

            /** Value int64Value */
            int64Value?: (number|Long|null);

            /** Value uint64Value */
            uint64Value?: (number|Long|null);

            /** Value sint64Value */
            sint64Value?: (number|Long|null);

            /** Value boolValue */
            boolValue?: (boolean|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IValue);

            /** Value stringValue. */
            public stringValue: string;

            /** Value floatValue. */
            public floatValue: number;

            /** Value doubleValue. */
            public doubleValue: number;

            /** Value sintValue. */
            public sintValue: number;

            /** Value uintValue. */
            public uintValue: number;

            /** Value int64Value. */
            public int64Value: (number|Long);

            /** Value uint64Value. */
            public uint64Value: (number|Long);

            /** Value sint64Value. */
            public sint64Value: (number|Long);

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value valueType. */
            public valueType?: ("stringValue"|"floatValue"|"doubleValue"|"sintValue"|"uintValue"|"int64Value"|"uint64Value"|"sint64Value"|"boolValue");

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Geometry. */
        interface IGeometry {

            /** Geometry geometryType */
            geometryType?: (esriPBuffer.FeatureCollectionPBuffer.GeometryType|null);

            /** Geometry lengths */
            lengths?: (number[]|null);

            /** Geometry coords */
            coords?: (number[]|null);
        }

        /** Represents a Geometry. */
        class Geometry implements IGeometry {

            /**
             * Constructs a new Geometry.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IGeometry);

            /** Geometry geometryType. */
            public geometryType: esriPBuffer.FeatureCollectionPBuffer.GeometryType;

            /** Geometry lengths. */
            public lengths: number[];

            /** Geometry coords. */
            public coords: number[];

            /**
             * Decodes a Geometry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Geometry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.Geometry;

            /**
             * Verifies a Geometry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an esriShapeBuffer. */
        interface IesriShapeBuffer {

            /** esriShapeBuffer bytes */
            bytes?: (Uint8Array|null);
        }

        /** Represents an esriShapeBuffer. */
        class esriShapeBuffer implements IesriShapeBuffer {

            /**
             * Constructs a new esriShapeBuffer.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IesriShapeBuffer);

            /** esriShapeBuffer bytes. */
            public bytes: Uint8Array;

            /**
             * Decodes an esriShapeBuffer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns esriShapeBuffer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer;

            /**
             * Verifies an esriShapeBuffer message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Feature. */
        interface IFeature {

            /** Feature attributes */
            attributes?: (esriPBuffer.FeatureCollectionPBuffer.Value[]|null);

            /** Feature geometry */
            geometry?: (esriPBuffer.FeatureCollectionPBuffer.Geometry|null);

            /** Feature shapeBuffer */
            shapeBuffer?: (esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer|null);

            /** Feature centroid */
            centroid?: (esriPBuffer.FeatureCollectionPBuffer.Geometry|null);
        }

        /** Represents a Feature. */
        class Feature implements IFeature {

            /**
             * Constructs a new Feature.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IFeature);

            /** Feature attributes. */
            public attributes: esriPBuffer.FeatureCollectionPBuffer.Value[];

            /** Feature geometry. */
            public geometry?: (esriPBuffer.FeatureCollectionPBuffer.Geometry|null);

            /** Feature shapeBuffer. */
            public shapeBuffer?: (esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer|null);

            /** Feature centroid. */
            public centroid?: (esriPBuffer.FeatureCollectionPBuffer.Geometry|null);

            /** Feature compressedGeometry. */
            public compressedGeometry?: ("geometry"|"shapeBuffer");

            /**
             * Decodes a Feature message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Feature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.Feature;

            /**
             * Verifies a Feature message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FeatureCollection. */
        interface IFeatureCollection {

            /** FeatureCollection featureAttributeCount */
            featureAttributeCount?: (number|null);

            /** FeatureCollection attributes */
            attributes?: (esriPBuffer.FeatureCollectionPBuffer.Value[]|null);

            /** FeatureCollection coords */
            coords?: (number[]|null);
        }

        /** Represents a FeatureCollection. */
        class FeatureCollection implements IFeatureCollection {

            /**
             * Constructs a new FeatureCollection.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IFeatureCollection);

            /** FeatureCollection featureAttributeCount. */
            public featureAttributeCount: number;

            /** FeatureCollection attributes. */
            public attributes: esriPBuffer.FeatureCollectionPBuffer.Value[];

            /** FeatureCollection coords. */
            public coords: number[];

            /**
             * Decodes a FeatureCollection message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureCollection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.FeatureCollection;

            /**
             * Verifies a FeatureCollection message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an UniqueIdField. */
        interface IUniqueIdField {

            /** UniqueIdField name */
            name?: (string|null);

            /** UniqueIdField isSystemMaintained */
            isSystemMaintained?: (boolean|null);
        }

        /** Represents an UniqueIdField. */
        class UniqueIdField implements IUniqueIdField {

            /**
             * Constructs a new UniqueIdField.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IUniqueIdField);

            /** UniqueIdField name. */
            public name: string;

            /** UniqueIdField isSystemMaintained. */
            public isSystemMaintained: boolean;

            /**
             * Decodes an UniqueIdField message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UniqueIdField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.UniqueIdField;

            /**
             * Verifies an UniqueIdField message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a GeometryProperties. */
        interface IGeometryProperties {

            /** GeometryProperties shapeAreaFieldName */
            shapeAreaFieldName?: (string|null);

            /** GeometryProperties shapeLengthFieldName */
            shapeLengthFieldName?: (string|null);

            /** GeometryProperties units */
            units?: (string|null);
        }

        /** Represents a GeometryProperties. */
        class GeometryProperties implements IGeometryProperties {

            /**
             * Constructs a new GeometryProperties.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IGeometryProperties);

            /** GeometryProperties shapeAreaFieldName. */
            public shapeAreaFieldName: string;

            /** GeometryProperties shapeLengthFieldName. */
            public shapeLengthFieldName: string;

            /** GeometryProperties units. */
            public units: string;

            /**
             * Decodes a GeometryProperties message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeometryProperties
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.GeometryProperties;

            /**
             * Verifies a GeometryProperties message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ServerGens. */
        interface IServerGens {

            /** ServerGens minServerGen */
            minServerGen?: (number|Long|null);

            /** ServerGens serverGen */
            serverGen?: (number|Long|null);
        }

        /** Represents a ServerGens. */
        class ServerGens implements IServerGens {

            /**
             * Constructs a new ServerGens.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IServerGens);

            /** ServerGens minServerGen. */
            public minServerGen: (number|Long);

            /** ServerGens serverGen. */
            public serverGen: (number|Long);

            /**
             * Decodes a ServerGens message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServerGens
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.ServerGens;

            /**
             * Verifies a ServerGens message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Scale. */
        interface IScale {

            /** Scale xScale */
            xScale?: (number|null);

            /** Scale yScale */
            yScale?: (number|null);

            /** Scale mScale */
            mScale?: (number|null);

            /** Scale zScale */
            zScale?: (number|null);
        }

        /** Represents a Scale. */
        class Scale implements IScale {

            /**
             * Constructs a new Scale.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IScale);

            /** Scale xScale. */
            public xScale: number;

            /** Scale yScale. */
            public yScale: number;

            /** Scale mScale. */
            public mScale: number;

            /** Scale zScale. */
            public zScale: number;

            /**
             * Decodes a Scale message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Scale
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.Scale;

            /**
             * Verifies a Scale message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Translate. */
        interface ITranslate {

            /** Translate xTranslate */
            xTranslate?: (number|null);

            /** Translate yTranslate */
            yTranslate?: (number|null);

            /** Translate mTranslate */
            mTranslate?: (number|null);

            /** Translate zTranslate */
            zTranslate?: (number|null);
        }

        /** Represents a Translate. */
        class Translate implements ITranslate {

            /**
             * Constructs a new Translate.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.ITranslate);

            /** Translate xTranslate. */
            public xTranslate: number;

            /** Translate yTranslate. */
            public yTranslate: number;

            /** Translate mTranslate. */
            public mTranslate: number;

            /** Translate zTranslate. */
            public zTranslate: number;

            /**
             * Decodes a Translate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Translate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.Translate;

            /**
             * Verifies a Translate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Transform. */
        interface ITransform {

            /** Transform quantizeOriginPostion */
            quantizeOriginPostion?: (esriPBuffer.FeatureCollectionPBuffer.QuantizeOriginPostion|null);

            /** Transform scale */
            scale?: (esriPBuffer.FeatureCollectionPBuffer.Scale|null);

            /** Transform translate */
            translate?: (esriPBuffer.FeatureCollectionPBuffer.Translate|null);
        }

        /** Represents a Transform. */
        class Transform implements ITransform {

            /**
             * Constructs a new Transform.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.ITransform);

            /** Transform quantizeOriginPostion. */
            public quantizeOriginPostion: esriPBuffer.FeatureCollectionPBuffer.QuantizeOriginPostion;

            /** Transform scale. */
            public scale?: (esriPBuffer.FeatureCollectionPBuffer.Scale|null);

            /** Transform translate. */
            public translate?: (esriPBuffer.FeatureCollectionPBuffer.Translate|null);

            /**
             * Decodes a Transform message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Transform
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.Transform;

            /**
             * Verifies a Transform message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FeatureResult. */
        interface IFeatureResult {

            /** FeatureResult objectIdFieldName */
            objectIdFieldName?: (string|null);

            /** FeatureResult uniqueIdField */
            uniqueIdField?: (esriPBuffer.FeatureCollectionPBuffer.UniqueIdField|null);

            /** FeatureResult globalIdFieldName */
            globalIdFieldName?: (string|null);

            /** FeatureResult geohashFieldName */
            geohashFieldName?: (string|null);

            /** FeatureResult geometryProperties */
            geometryProperties?: (esriPBuffer.FeatureCollectionPBuffer.GeometryProperties|null);

            /** FeatureResult serverGens */
            serverGens?: (esriPBuffer.FeatureCollectionPBuffer.ServerGens|null);

            /** FeatureResult geometryType */
            geometryType?: (esriPBuffer.FeatureCollectionPBuffer.GeometryType|null);

            /** FeatureResult spatialReference */
            spatialReference?: (esriPBuffer.FeatureCollectionPBuffer.SpatialReference|null);

            /** FeatureResult exceededTransferLimit */
            exceededTransferLimit?: (boolean|null);

            /** FeatureResult hasZ */
            hasZ?: (boolean|null);

            /** FeatureResult hasM */
            hasM?: (boolean|null);

            /** FeatureResult transform */
            transform?: (esriPBuffer.FeatureCollectionPBuffer.Transform|null);

            /** FeatureResult fields */
            fields?: (esriPBuffer.FeatureCollectionPBuffer.Field[]|null);

            /** FeatureResult values */
            values?: (esriPBuffer.FeatureCollectionPBuffer.Value[]|null);

            /** FeatureResult features */
            features?: (esriPBuffer.FeatureCollectionPBuffer.Feature[]|null);

            /** FeatureResult featureCollection */
            featureCollection?: (esriPBuffer.FeatureCollectionPBuffer.FeatureCollection|null);
        }

        /** Represents a FeatureResult. */
        class FeatureResult implements IFeatureResult {

            /**
             * Constructs a new FeatureResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IFeatureResult);

            /** FeatureResult objectIdFieldName. */
            public objectIdFieldName: string;

            /** FeatureResult uniqueIdField. */
            public uniqueIdField?: (esriPBuffer.FeatureCollectionPBuffer.UniqueIdField|null);

            /** FeatureResult globalIdFieldName. */
            public globalIdFieldName: string;

            /** FeatureResult geohashFieldName. */
            public geohashFieldName: string;

            /** FeatureResult geometryProperties. */
            public geometryProperties?: (esriPBuffer.FeatureCollectionPBuffer.GeometryProperties|null);

            /** FeatureResult serverGens. */
            public serverGens?: (esriPBuffer.FeatureCollectionPBuffer.ServerGens|null);

            /** FeatureResult geometryType. */
            public geometryType: esriPBuffer.FeatureCollectionPBuffer.GeometryType;

            /** FeatureResult spatialReference. */
            public spatialReference?: (esriPBuffer.FeatureCollectionPBuffer.SpatialReference|null);

            /** FeatureResult exceededTransferLimit. */
            public exceededTransferLimit: boolean;

            /** FeatureResult hasZ. */
            public hasZ: boolean;

            /** FeatureResult hasM. */
            public hasM: boolean;

            /** FeatureResult transform. */
            public transform?: (esriPBuffer.FeatureCollectionPBuffer.Transform|null);

            /** FeatureResult fields. */
            public fields: esriPBuffer.FeatureCollectionPBuffer.Field[];

            /** FeatureResult values. */
            public values: esriPBuffer.FeatureCollectionPBuffer.Value[];

            /** FeatureResult features. */
            public features: esriPBuffer.FeatureCollectionPBuffer.Feature[];

            /** FeatureResult featureCollection. */
            public featureCollection?: (esriPBuffer.FeatureCollectionPBuffer.FeatureCollection|null);

            /**
             * Decodes a FeatureResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.FeatureResult;

            /**
             * Verifies a FeatureResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a CountResult. */
        interface ICountResult {

            /** CountResult count */
            count?: (number|Long|null);
        }

        /** Represents a CountResult. */
        class CountResult implements ICountResult {

            /**
             * Constructs a new CountResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.ICountResult);

            /** CountResult count. */
            public count: (number|Long);

            /**
             * Decodes a CountResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CountResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.CountResult;

            /**
             * Verifies a CountResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ObjectIdsResult. */
        interface IObjectIdsResult {

            /** ObjectIdsResult objectIdFieldName */
            objectIdFieldName?: (string|null);

            /** ObjectIdsResult serverGens */
            serverGens?: (esriPBuffer.FeatureCollectionPBuffer.ServerGens|null);

            /** ObjectIdsResult objectIds */
            objectIds?: ((number|Long)[]|null);
        }

        /** Represents an ObjectIdsResult. */
        class ObjectIdsResult implements IObjectIdsResult {

            /**
             * Constructs a new ObjectIdsResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IObjectIdsResult);

            /** ObjectIdsResult objectIdFieldName. */
            public objectIdFieldName: string;

            /** ObjectIdsResult serverGens. */
            public serverGens?: (esriPBuffer.FeatureCollectionPBuffer.ServerGens|null);

            /** ObjectIdsResult objectIds. */
            public objectIds: (number|Long)[];

            /**
             * Decodes an ObjectIdsResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ObjectIdsResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult;

            /**
             * Verifies an ObjectIdsResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a QueryResult. */
        interface IQueryResult {

            /** QueryResult featureResult */
            featureResult?: (esriPBuffer.FeatureCollectionPBuffer.FeatureResult|null);

            /** QueryResult countResult */
            countResult?: (esriPBuffer.FeatureCollectionPBuffer.CountResult|null);

            /** QueryResult idsResult */
            idsResult?: (esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult|null);
        }

        /** Represents a QueryResult. */
        class QueryResult implements IQueryResult {

            /**
             * Constructs a new QueryResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: esriPBuffer.FeatureCollectionPBuffer.IQueryResult);

            /** QueryResult featureResult. */
            public featureResult?: (esriPBuffer.FeatureCollectionPBuffer.FeatureResult|null);

            /** QueryResult countResult. */
            public countResult?: (esriPBuffer.FeatureCollectionPBuffer.CountResult|null);

            /** QueryResult idsResult. */
            public idsResult?: (esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult|null);

            /** QueryResult Results. */
            public Results?: ("featureResult"|"countResult"|"idsResult");

            /**
             * Decodes a QueryResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): esriPBuffer.FeatureCollectionPBuffer.QueryResult;

            /**
             * Verifies a QueryResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }
}

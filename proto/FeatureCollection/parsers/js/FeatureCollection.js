/* Copyright 2021 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const esriPBuffer = $root.esriPBuffer = (() => {

    /**
     * Namespace esriPBuffer.
     * @exports esriPBuffer
     * @namespace
     */
    const esriPBuffer = {};

    esriPBuffer.FeatureCollectionPBuffer = (function() {

        /**
         * Properties of a FeatureCollectionPBuffer.
         * @memberof esriPBuffer
         * @interface IFeatureCollectionPBuffer
         * @property {string|null} [version] FeatureCollectionPBuffer version
         * @property {esriPBuffer.FeatureCollectionPBuffer.QueryResult|null} [queryResult] FeatureCollectionPBuffer queryResult
         */

        /**
         * Constructs a new FeatureCollectionPBuffer.
         * @memberof esriPBuffer
         * @classdesc Represents a FeatureCollectionPBuffer.
         * @implements IFeatureCollectionPBuffer
         * @constructor
         * @param {esriPBuffer.IFeatureCollectionPBuffer=} [properties] Properties to set
         */
        function FeatureCollectionPBuffer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatureCollectionPBuffer version.
         * @member {string} version
         * @memberof esriPBuffer.FeatureCollectionPBuffer
         * @instance
         */
        FeatureCollectionPBuffer.prototype.version = "";

        /**
         * FeatureCollectionPBuffer queryResult.
         * @member {esriPBuffer.FeatureCollectionPBuffer.QueryResult|null|undefined} queryResult
         * @memberof esriPBuffer.FeatureCollectionPBuffer
         * @instance
         */
        FeatureCollectionPBuffer.prototype.queryResult = null;

        /**
         * Decodes a FeatureCollectionPBuffer message from the specified reader or buffer.
         * @function decode
         * @memberof esriPBuffer.FeatureCollectionPBuffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {esriPBuffer.FeatureCollectionPBuffer} FeatureCollectionPBuffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureCollectionPBuffer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.queryResult = $root.esriPBuffer.FeatureCollectionPBuffer.QueryResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Verifies a FeatureCollectionPBuffer message.
         * @function verify
         * @memberof esriPBuffer.FeatureCollectionPBuffer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeatureCollectionPBuffer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.queryResult != null && message.hasOwnProperty("queryResult")) {
                let error = $root.esriPBuffer.FeatureCollectionPBuffer.QueryResult.verify(message.queryResult);
                if (error)
                    return "queryResult." + error;
            }
            return null;
        };

        /**
         * GeometryType enum.
         * @name esriPBuffer.FeatureCollectionPBuffer.GeometryType
         * @enum {number}
         * @property {number} esriGeometryTypePoint=0 esriGeometryTypePoint value
         * @property {number} esriGeometryTypeMultipoint=1 esriGeometryTypeMultipoint value
         * @property {number} esriGeometryTypePolyline=2 esriGeometryTypePolyline value
         * @property {number} esriGeometryTypePolygon=3 esriGeometryTypePolygon value
         * @property {number} esriGeometryTypeMultipatch=4 esriGeometryTypeMultipatch value
         * @property {number} esriGeometryTypeNone=127 esriGeometryTypeNone value
         */
        FeatureCollectionPBuffer.GeometryType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "esriGeometryTypePoint"] = 0;
            values[valuesById[1] = "esriGeometryTypeMultipoint"] = 1;
            values[valuesById[2] = "esriGeometryTypePolyline"] = 2;
            values[valuesById[3] = "esriGeometryTypePolygon"] = 3;
            values[valuesById[4] = "esriGeometryTypeMultipatch"] = 4;
            values[valuesById[127] = "esriGeometryTypeNone"] = 127;
            return values;
        })();

        /**
         * FieldType enum.
         * @name esriPBuffer.FeatureCollectionPBuffer.FieldType
         * @enum {number}
         * @property {number} esriFieldTypeSmallInteger=0 esriFieldTypeSmallInteger value
         * @property {number} esriFieldTypeInteger=1 esriFieldTypeInteger value
         * @property {number} esriFieldTypeSingle=2 esriFieldTypeSingle value
         * @property {number} esriFieldTypeDouble=3 esriFieldTypeDouble value
         * @property {number} esriFieldTypeString=4 esriFieldTypeString value
         * @property {number} esriFieldTypeDate=5 esriFieldTypeDate value
         * @property {number} esriFieldTypeOID=6 esriFieldTypeOID value
         * @property {number} esriFieldTypeGeometry=7 esriFieldTypeGeometry value
         * @property {number} esriFieldTypeBlob=8 esriFieldTypeBlob value
         * @property {number} esriFieldTypeRaster=9 esriFieldTypeRaster value
         * @property {number} esriFieldTypeGUID=10 esriFieldTypeGUID value
         * @property {number} esriFieldTypeGlobalID=11 esriFieldTypeGlobalID value
         * @property {number} esriFieldTypeXML=12 esriFieldTypeXML value
         */
        FeatureCollectionPBuffer.FieldType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "esriFieldTypeSmallInteger"] = 0;
            values[valuesById[1] = "esriFieldTypeInteger"] = 1;
            values[valuesById[2] = "esriFieldTypeSingle"] = 2;
            values[valuesById[3] = "esriFieldTypeDouble"] = 3;
            values[valuesById[4] = "esriFieldTypeString"] = 4;
            values[valuesById[5] = "esriFieldTypeDate"] = 5;
            values[valuesById[6] = "esriFieldTypeOID"] = 6;
            values[valuesById[7] = "esriFieldTypeGeometry"] = 7;
            values[valuesById[8] = "esriFieldTypeBlob"] = 8;
            values[valuesById[9] = "esriFieldTypeRaster"] = 9;
            values[valuesById[10] = "esriFieldTypeGUID"] = 10;
            values[valuesById[11] = "esriFieldTypeGlobalID"] = 11;
            values[valuesById[12] = "esriFieldTypeXML"] = 12;
            return values;
        })();

        /**
         * SQLType enum.
         * @name esriPBuffer.FeatureCollectionPBuffer.SQLType
         * @enum {number}
         * @property {number} sqlTypeBigInt=0 sqlTypeBigInt value
         * @property {number} sqlTypeBinary=1 sqlTypeBinary value
         * @property {number} sqlTypeBit=2 sqlTypeBit value
         * @property {number} sqlTypeChar=3 sqlTypeChar value
         * @property {number} sqlTypeDate=4 sqlTypeDate value
         * @property {number} sqlTypeDecimal=5 sqlTypeDecimal value
         * @property {number} sqlTypeDouble=6 sqlTypeDouble value
         * @property {number} sqlTypeFloat=7 sqlTypeFloat value
         * @property {number} sqlTypeGeometry=8 sqlTypeGeometry value
         * @property {number} sqlTypeGUID=9 sqlTypeGUID value
         * @property {number} sqlTypeInteger=10 sqlTypeInteger value
         * @property {number} sqlTypeLongNVarchar=11 sqlTypeLongNVarchar value
         * @property {number} sqlTypeLongVarbinary=12 sqlTypeLongVarbinary value
         * @property {number} sqlTypeLongVarchar=13 sqlTypeLongVarchar value
         * @property {number} sqlTypeNChar=14 sqlTypeNChar value
         * @property {number} sqlTypeNVarchar=15 sqlTypeNVarchar value
         * @property {number} sqlTypeOther=16 sqlTypeOther value
         * @property {number} sqlTypeReal=17 sqlTypeReal value
         * @property {number} sqlTypeSmallInt=18 sqlTypeSmallInt value
         * @property {number} sqlTypeSqlXml=19 sqlTypeSqlXml value
         * @property {number} sqlTypeTime=20 sqlTypeTime value
         * @property {number} sqlTypeTimestamp=21 sqlTypeTimestamp value
         * @property {number} sqlTypeTimestamp2=22 sqlTypeTimestamp2 value
         * @property {number} sqlTypeTinyInt=23 sqlTypeTinyInt value
         * @property {number} sqlTypeVarbinary=24 sqlTypeVarbinary value
         * @property {number} sqlTypeVarchar=25 sqlTypeVarchar value
         */
        FeatureCollectionPBuffer.SQLType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "sqlTypeBigInt"] = 0;
            values[valuesById[1] = "sqlTypeBinary"] = 1;
            values[valuesById[2] = "sqlTypeBit"] = 2;
            values[valuesById[3] = "sqlTypeChar"] = 3;
            values[valuesById[4] = "sqlTypeDate"] = 4;
            values[valuesById[5] = "sqlTypeDecimal"] = 5;
            values[valuesById[6] = "sqlTypeDouble"] = 6;
            values[valuesById[7] = "sqlTypeFloat"] = 7;
            values[valuesById[8] = "sqlTypeGeometry"] = 8;
            values[valuesById[9] = "sqlTypeGUID"] = 9;
            values[valuesById[10] = "sqlTypeInteger"] = 10;
            values[valuesById[11] = "sqlTypeLongNVarchar"] = 11;
            values[valuesById[12] = "sqlTypeLongVarbinary"] = 12;
            values[valuesById[13] = "sqlTypeLongVarchar"] = 13;
            values[valuesById[14] = "sqlTypeNChar"] = 14;
            values[valuesById[15] = "sqlTypeNVarchar"] = 15;
            values[valuesById[16] = "sqlTypeOther"] = 16;
            values[valuesById[17] = "sqlTypeReal"] = 17;
            values[valuesById[18] = "sqlTypeSmallInt"] = 18;
            values[valuesById[19] = "sqlTypeSqlXml"] = 19;
            values[valuesById[20] = "sqlTypeTime"] = 20;
            values[valuesById[21] = "sqlTypeTimestamp"] = 21;
            values[valuesById[22] = "sqlTypeTimestamp2"] = 22;
            values[valuesById[23] = "sqlTypeTinyInt"] = 23;
            values[valuesById[24] = "sqlTypeVarbinary"] = 24;
            values[valuesById[25] = "sqlTypeVarchar"] = 25;
            return values;
        })();

        /**
         * QuantizeOriginPostion enum.
         * @name esriPBuffer.FeatureCollectionPBuffer.QuantizeOriginPostion
         * @enum {number}
         * @property {number} upperLeft=0 upperLeft value
         * @property {number} lowerLeft=1 lowerLeft value
         */
        FeatureCollectionPBuffer.QuantizeOriginPostion = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "upperLeft"] = 0;
            values[valuesById[1] = "lowerLeft"] = 1;
            return values;
        })();

        FeatureCollectionPBuffer.SpatialReference = (function() {

            /**
             * Properties of a SpatialReference.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface ISpatialReference
             * @property {number|null} [wkid] SpatialReference wkid
             * @property {number|null} [lastestWkid] SpatialReference lastestWkid
             * @property {number|null} [vcsWkid] SpatialReference vcsWkid
             * @property {number|null} [latestVcsWkid] SpatialReference latestVcsWkid
             * @property {string|null} [wkt] SpatialReference wkt
             */

            /**
             * Constructs a new SpatialReference.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a SpatialReference.
             * @implements ISpatialReference
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.ISpatialReference=} [properties] Properties to set
             */
            function SpatialReference(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SpatialReference wkid.
             * @member {number} wkid
             * @memberof esriPBuffer.FeatureCollectionPBuffer.SpatialReference
             * @instance
             */
            SpatialReference.prototype.wkid = 0;

            /**
             * SpatialReference lastestWkid.
             * @member {number} lastestWkid
             * @memberof esriPBuffer.FeatureCollectionPBuffer.SpatialReference
             * @instance
             */
            SpatialReference.prototype.lastestWkid = 0;

            /**
             * SpatialReference vcsWkid.
             * @member {number} vcsWkid
             * @memberof esriPBuffer.FeatureCollectionPBuffer.SpatialReference
             * @instance
             */
            SpatialReference.prototype.vcsWkid = 0;

            /**
             * SpatialReference latestVcsWkid.
             * @member {number} latestVcsWkid
             * @memberof esriPBuffer.FeatureCollectionPBuffer.SpatialReference
             * @instance
             */
            SpatialReference.prototype.latestVcsWkid = 0;

            /**
             * SpatialReference wkt.
             * @member {string} wkt
             * @memberof esriPBuffer.FeatureCollectionPBuffer.SpatialReference
             * @instance
             */
            SpatialReference.prototype.wkt = "";

            /**
             * Decodes a SpatialReference message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.SpatialReference
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.SpatialReference} SpatialReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SpatialReference.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.SpatialReference();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.wkid = reader.uint32();
                        break;
                    case 2:
                        message.lastestWkid = reader.uint32();
                        break;
                    case 3:
                        message.vcsWkid = reader.uint32();
                        break;
                    case 4:
                        message.latestVcsWkid = reader.uint32();
                        break;
                    case 5:
                        message.wkt = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a SpatialReference message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.SpatialReference
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SpatialReference.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.wkid != null && message.hasOwnProperty("wkid"))
                    if (!$util.isInteger(message.wkid))
                        return "wkid: integer expected";
                if (message.lastestWkid != null && message.hasOwnProperty("lastestWkid"))
                    if (!$util.isInteger(message.lastestWkid))
                        return "lastestWkid: integer expected";
                if (message.vcsWkid != null && message.hasOwnProperty("vcsWkid"))
                    if (!$util.isInteger(message.vcsWkid))
                        return "vcsWkid: integer expected";
                if (message.latestVcsWkid != null && message.hasOwnProperty("latestVcsWkid"))
                    if (!$util.isInteger(message.latestVcsWkid))
                        return "latestVcsWkid: integer expected";
                if (message.wkt != null && message.hasOwnProperty("wkt"))
                    if (!$util.isString(message.wkt))
                        return "wkt: string expected";
                return null;
            };

            return SpatialReference;
        })();

        FeatureCollectionPBuffer.Field = (function() {

            /**
             * Properties of a Field.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IField
             * @property {string|null} [name] Field name
             * @property {esriPBuffer.FeatureCollectionPBuffer.FieldType|null} [fieldType] Field fieldType
             * @property {string|null} [alias] Field alias
             * @property {esriPBuffer.FeatureCollectionPBuffer.SQLType|null} [sqlType] Field sqlType
             * @property {string|null} [domain] Field domain
             * @property {string|null} [defaultValue] Field defaultValue
             */

            /**
             * Constructs a new Field.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a Field.
             * @implements IField
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IField=} [properties] Properties to set
             */
            function Field(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Field name.
             * @member {string} name
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Field
             * @instance
             */
            Field.prototype.name = "";

            /**
             * Field fieldType.
             * @member {esriPBuffer.FeatureCollectionPBuffer.FieldType} fieldType
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Field
             * @instance
             */
            Field.prototype.fieldType = 0;

            /**
             * Field alias.
             * @member {string} alias
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Field
             * @instance
             */
            Field.prototype.alias = "";

            /**
             * Field sqlType.
             * @member {esriPBuffer.FeatureCollectionPBuffer.SQLType} sqlType
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Field
             * @instance
             */
            Field.prototype.sqlType = 0;

            /**
             * Field domain.
             * @member {string} domain
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Field
             * @instance
             */
            Field.prototype.domain = "";

            /**
             * Field defaultValue.
             * @member {string} defaultValue
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Field
             * @instance
             */
            Field.prototype.defaultValue = "";

            /**
             * Decodes a Field message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Field
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.Field} Field
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Field.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.Field();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.fieldType = reader.int32();
                        break;
                    case 3:
                        message.alias = reader.string();
                        break;
                    case 4:
                        message.sqlType = reader.int32();
                        break;
                    case 5:
                        message.domain = reader.string();
                        break;
                    case 6:
                        message.defaultValue = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Field message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Field
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Field.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.fieldType != null && message.hasOwnProperty("fieldType"))
                    switch (message.fieldType) {
                    default:
                        return "fieldType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        break;
                    }
                if (message.alias != null && message.hasOwnProperty("alias"))
                    if (!$util.isString(message.alias))
                        return "alias: string expected";
                if (message.sqlType != null && message.hasOwnProperty("sqlType"))
                    switch (message.sqlType) {
                    default:
                        return "sqlType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                    case 25:
                        break;
                    }
                if (message.domain != null && message.hasOwnProperty("domain"))
                    if (!$util.isString(message.domain))
                        return "domain: string expected";
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    if (!$util.isString(message.defaultValue))
                        return "defaultValue: string expected";
                return null;
            };

            return Field;
        })();

        FeatureCollectionPBuffer.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IValue
             * @property {string|null} [stringValue] Value stringValue
             * @property {number|null} [floatValue] Value floatValue
             * @property {number|null} [doubleValue] Value doubleValue
             * @property {number|null} [sintValue] Value sintValue
             * @property {number|null} [uintValue] Value uintValue
             * @property {number|Long|null} [int64Value] Value int64Value
             * @property {number|Long|null} [uint64Value] Value uint64Value
             * @property {number|Long|null} [sint64Value] Value sint64Value
             * @property {boolean|null} [boolValue] Value boolValue
             */

            /**
             * Constructs a new Value.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a Value.
             * @implements IValue
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value stringValue.
             * @member {string|null|undefined} stringValue
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @instance
             */
            Value.prototype.stringValue = null;

            /**
             * Value floatValue.
             * @member {number|null|undefined} floatValue
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @instance
             */
            Value.prototype.floatValue = null;

            /**
             * Value doubleValue.
             * @member {number|null|undefined} doubleValue
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @instance
             */
            Value.prototype.doubleValue = null;

            /**
             * Value sintValue.
             * @member {number|null|undefined} sintValue
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @instance
             */
            Value.prototype.sintValue = null;

            /**
             * Value uintValue.
             * @member {number|null|undefined} uintValue
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @instance
             */
            Value.prototype.uintValue = null;

            /**
             * Value int64Value.
             * @member {number|Long|null|undefined} int64Value
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @instance
             */
            Value.prototype.int64Value = null;

            /**
             * Value uint64Value.
             * @member {number|Long|null|undefined} uint64Value
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @instance
             */
            Value.prototype.uint64Value = null;

            /**
             * Value sint64Value.
             * @member {number|Long|null|undefined} sint64Value
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @instance
             */
            Value.prototype.sint64Value = null;

            /**
             * Value boolValue.
             * @member {boolean|null|undefined} boolValue
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @instance
             */
            Value.prototype.boolValue = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Value valueType.
             * @member {"stringValue"|"floatValue"|"doubleValue"|"sintValue"|"uintValue"|"int64Value"|"uint64Value"|"sint64Value"|"boolValue"|undefined} valueType
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @instance
             */
            Object.defineProperty(Value.prototype, "valueType", {
                get: $util.oneOfGetter($oneOfFields = ["stringValue", "floatValue", "doubleValue", "sintValue", "uintValue", "int64Value", "uint64Value", "sint64Value", "boolValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.stringValue = reader.string();
                        break;
                    case 2:
                        message.floatValue = reader.float();
                        break;
                    case 3:
                        message.doubleValue = reader.double();
                        break;
                    case 4:
                        message.sintValue = reader.sint32();
                        break;
                    case 5:
                        message.uintValue = reader.uint32();
                        break;
                    case 6:
                        message.int64Value = reader.int64();
                        break;
                    case 7:
                        message.uint64Value = reader.uint64();
                        break;
                    case 8:
                        message.sint64Value = reader.sint64();
                        break;
                    case 9:
                        message.boolValue = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    properties.valueType = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.floatValue != null && message.hasOwnProperty("floatValue")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    if (typeof message.floatValue !== "number")
                        return "floatValue: number expected";
                }
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                }
                if (message.sintValue != null && message.hasOwnProperty("sintValue")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    if (!$util.isInteger(message.sintValue))
                        return "sintValue: integer expected";
                }
                if (message.uintValue != null && message.hasOwnProperty("uintValue")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    if (!$util.isInteger(message.uintValue))
                        return "uintValue: integer expected";
                }
                if (message.int64Value != null && message.hasOwnProperty("int64Value")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    if (!$util.isInteger(message.int64Value) && !(message.int64Value && $util.isInteger(message.int64Value.low) && $util.isInteger(message.int64Value.high)))
                        return "int64Value: integer|Long expected";
                }
                if (message.uint64Value != null && message.hasOwnProperty("uint64Value")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    if (!$util.isInteger(message.uint64Value) && !(message.uint64Value && $util.isInteger(message.uint64Value.low) && $util.isInteger(message.uint64Value.high)))
                        return "uint64Value: integer|Long expected";
                }
                if (message.sint64Value != null && message.hasOwnProperty("sint64Value")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    if (!$util.isInteger(message.sint64Value) && !(message.sint64Value && $util.isInteger(message.sint64Value.low) && $util.isInteger(message.sint64Value.high)))
                        return "sint64Value: integer|Long expected";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                }
                return null;
            };

            return Value;
        })();

        FeatureCollectionPBuffer.Geometry = (function() {

            /**
             * Properties of a Geometry.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IGeometry
             * @property {Array.<number>|null} [lengths] Geometry lengths
             * @property {Array.<number|Long>|null} [coords] Geometry coords
             */

            /**
             * Constructs a new Geometry.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a Geometry.
             * @implements IGeometry
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IGeometry=} [properties] Properties to set
             */
            function Geometry(properties) {
                this.lengths = [];
                this.coords = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Geometry lengths.
             * @member {Array.<number>} lengths
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Geometry
             * @instance
             */
            Geometry.prototype.lengths = $util.emptyArray;

            /**
             * Geometry coords.
             * @member {Array.<number|Long>} coords
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Geometry
             * @instance
             */
            Geometry.prototype.coords = $util.emptyArray;

            /**
             * Decodes a Geometry message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Geometry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.Geometry} Geometry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Geometry.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.Geometry();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.lengths && message.lengths.length))
                            message.lengths = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.lengths.push(reader.uint32());
                        } else
                            message.lengths.push(reader.uint32());
                        break;
                    case 3:
                        if (!(message.coords && message.coords.length))
                            message.coords = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.coords.push(reader.sint64());
                        } else
                            message.coords.push(reader.sint64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Geometry message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Geometry
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Geometry.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.lengths != null && message.hasOwnProperty("lengths")) {
                    if (!Array.isArray(message.lengths))
                        return "lengths: array expected";
                    for (let i = 0; i < message.lengths.length; ++i)
                        if (!$util.isInteger(message.lengths[i]))
                            return "lengths: integer[] expected";
                }
                if (message.coords != null && message.hasOwnProperty("coords")) {
                    if (!Array.isArray(message.coords))
                        return "coords: array expected";
                    for (let i = 0; i < message.coords.length; ++i)
                        if (!$util.isInteger(message.coords[i]) && !(message.coords[i] && $util.isInteger(message.coords[i].low) && $util.isInteger(message.coords[i].high)))
                            return "coords: integer|Long[] expected";
                }
                return null;
            };

            return Geometry;
        })();

        FeatureCollectionPBuffer.esriShapeBuffer = (function() {

            /**
             * Properties of an esriShapeBuffer.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IesriShapeBuffer
             * @property {Uint8Array|null} [bytes] esriShapeBuffer bytes
             */

            /**
             * Constructs a new esriShapeBuffer.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents an esriShapeBuffer.
             * @implements IesriShapeBuffer
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IesriShapeBuffer=} [properties] Properties to set
             */
            function esriShapeBuffer(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * esriShapeBuffer bytes.
             * @member {Uint8Array} bytes
             * @memberof esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer
             * @instance
             */
            esriShapeBuffer.prototype.bytes = $util.newBuffer([]);

            /**
             * Decodes an esriShapeBuffer message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer} esriShapeBuffer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            esriShapeBuffer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bytes = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an esriShapeBuffer message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            esriShapeBuffer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bytes != null && message.hasOwnProperty("bytes"))
                    if (!(message.bytes && typeof message.bytes.length === "number" || $util.isString(message.bytes)))
                        return "bytes: buffer expected";
                return null;
            };

            return esriShapeBuffer;
        })();

        FeatureCollectionPBuffer.Feature = (function() {

            /**
             * Properties of a Feature.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IFeature
             * @property {Array.<esriPBuffer.FeatureCollectionPBuffer.Value>|null} [attributes] Feature attributes
             * @property {esriPBuffer.FeatureCollectionPBuffer.Geometry|null} [geometry] Feature geometry
             * @property {esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer|null} [shapeBuffer] Feature shapeBuffer
             * @property {esriPBuffer.FeatureCollectionPBuffer.Geometry|null} [centroid] Feature centroid
             */

            /**
             * Constructs a new Feature.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a Feature.
             * @implements IFeature
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IFeature=} [properties] Properties to set
             */
            function Feature(properties) {
                this.attributes = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Feature attributes.
             * @member {Array.<esriPBuffer.FeatureCollectionPBuffer.Value>} attributes
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Feature
             * @instance
             */
            Feature.prototype.attributes = $util.emptyArray;

            /**
             * Feature geometry.
             * @member {esriPBuffer.FeatureCollectionPBuffer.Geometry|null|undefined} geometry
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Feature
             * @instance
             */
            Feature.prototype.geometry = null;

            /**
             * Feature shapeBuffer.
             * @member {esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer|null|undefined} shapeBuffer
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Feature
             * @instance
             */
            Feature.prototype.shapeBuffer = null;

            /**
             * Feature centroid.
             * @member {esriPBuffer.FeatureCollectionPBuffer.Geometry|null|undefined} centroid
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Feature
             * @instance
             */
            Feature.prototype.centroid = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Feature compressedGeometry.
             * @member {"geometry"|"shapeBuffer"|undefined} compressedGeometry
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Feature
             * @instance
             */
            Object.defineProperty(Feature.prototype, "compressedGeometry", {
                get: $util.oneOfGetter($oneOfFields = ["geometry", "shapeBuffer"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Decodes a Feature message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Feature
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.Feature} Feature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Feature.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.Feature();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.attributes && message.attributes.length))
                            message.attributes = [];
                        message.attributes.push($root.esriPBuffer.FeatureCollectionPBuffer.Value.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.geometry = $root.esriPBuffer.FeatureCollectionPBuffer.Geometry.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.shapeBuffer = $root.esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.centroid = $root.esriPBuffer.FeatureCollectionPBuffer.Geometry.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Feature message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Feature
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Feature.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                    if (!Array.isArray(message.attributes))
                        return "attributes: array expected";
                    for (let i = 0; i < message.attributes.length; ++i) {
                        let error = $root.esriPBuffer.FeatureCollectionPBuffer.Value.verify(message.attributes[i]);
                        if (error)
                            return "attributes." + error;
                    }
                }
                if (message.geometry != null && message.hasOwnProperty("geometry")) {
                    properties.compressedGeometry = 1;
                    {
                        let error = $root.esriPBuffer.FeatureCollectionPBuffer.Geometry.verify(message.geometry);
                        if (error)
                            return "geometry." + error;
                    }
                }
                if (message.shapeBuffer != null && message.hasOwnProperty("shapeBuffer")) {
                    if (properties.compressedGeometry === 1)
                        return "compressedGeometry: multiple values";
                    properties.compressedGeometry = 1;
                    {
                        let error = $root.esriPBuffer.FeatureCollectionPBuffer.esriShapeBuffer.verify(message.shapeBuffer);
                        if (error)
                            return "shapeBuffer." + error;
                    }
                }
                if (message.centroid != null && message.hasOwnProperty("centroid")) {
                    let error = $root.esriPBuffer.FeatureCollectionPBuffer.Geometry.verify(message.centroid);
                    if (error)
                        return "centroid." + error;
                }
                return null;
            };

            return Feature;
        })();

        FeatureCollectionPBuffer.UniqueIdField = (function() {

            /**
             * Properties of an UniqueIdField.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IUniqueIdField
             * @property {string|null} [name] UniqueIdField name
             * @property {boolean|null} [isSystemMaintained] UniqueIdField isSystemMaintained
             */

            /**
             * Constructs a new UniqueIdField.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents an UniqueIdField.
             * @implements IUniqueIdField
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IUniqueIdField=} [properties] Properties to set
             */
            function UniqueIdField(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UniqueIdField name.
             * @member {string} name
             * @memberof esriPBuffer.FeatureCollectionPBuffer.UniqueIdField
             * @instance
             */
            UniqueIdField.prototype.name = "";

            /**
             * UniqueIdField isSystemMaintained.
             * @member {boolean} isSystemMaintained
             * @memberof esriPBuffer.FeatureCollectionPBuffer.UniqueIdField
             * @instance
             */
            UniqueIdField.prototype.isSystemMaintained = false;

            /**
             * Decodes an UniqueIdField message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.UniqueIdField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.UniqueIdField} UniqueIdField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UniqueIdField.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.UniqueIdField();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.isSystemMaintained = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an UniqueIdField message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.UniqueIdField
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UniqueIdField.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.isSystemMaintained != null && message.hasOwnProperty("isSystemMaintained"))
                    if (typeof message.isSystemMaintained !== "boolean")
                        return "isSystemMaintained: boolean expected";
                return null;
            };

            return UniqueIdField;
        })();

        FeatureCollectionPBuffer.GeometryProperties = (function() {

            /**
             * Properties of a GeometryProperties.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IGeometryProperties
             * @property {string|null} [shapeAreaFieldName] GeometryProperties shapeAreaFieldName
             * @property {string|null} [shapeLengthFieldName] GeometryProperties shapeLengthFieldName
             * @property {string|null} [units] GeometryProperties units
             */

            /**
             * Constructs a new GeometryProperties.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a GeometryProperties.
             * @implements IGeometryProperties
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IGeometryProperties=} [properties] Properties to set
             */
            function GeometryProperties(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeometryProperties shapeAreaFieldName.
             * @member {string} shapeAreaFieldName
             * @memberof esriPBuffer.FeatureCollectionPBuffer.GeometryProperties
             * @instance
             */
            GeometryProperties.prototype.shapeAreaFieldName = "";

            /**
             * GeometryProperties shapeLengthFieldName.
             * @member {string} shapeLengthFieldName
             * @memberof esriPBuffer.FeatureCollectionPBuffer.GeometryProperties
             * @instance
             */
            GeometryProperties.prototype.shapeLengthFieldName = "";

            /**
             * GeometryProperties units.
             * @member {string} units
             * @memberof esriPBuffer.FeatureCollectionPBuffer.GeometryProperties
             * @instance
             */
            GeometryProperties.prototype.units = "";

            /**
             * Decodes a GeometryProperties message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.GeometryProperties
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.GeometryProperties} GeometryProperties
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeometryProperties.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.GeometryProperties();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.shapeAreaFieldName = reader.string();
                        break;
                    case 2:
                        message.shapeLengthFieldName = reader.string();
                        break;
                    case 3:
                        message.units = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a GeometryProperties message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.GeometryProperties
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeometryProperties.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.shapeAreaFieldName != null && message.hasOwnProperty("shapeAreaFieldName"))
                    if (!$util.isString(message.shapeAreaFieldName))
                        return "shapeAreaFieldName: string expected";
                if (message.shapeLengthFieldName != null && message.hasOwnProperty("shapeLengthFieldName"))
                    if (!$util.isString(message.shapeLengthFieldName))
                        return "shapeLengthFieldName: string expected";
                if (message.units != null && message.hasOwnProperty("units"))
                    if (!$util.isString(message.units))
                        return "units: string expected";
                return null;
            };

            return GeometryProperties;
        })();

        FeatureCollectionPBuffer.ServerGens = (function() {

            /**
             * Properties of a ServerGens.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IServerGens
             * @property {number|Long|null} [minServerGen] ServerGens minServerGen
             * @property {number|Long|null} [serverGen] ServerGens serverGen
             */

            /**
             * Constructs a new ServerGens.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a ServerGens.
             * @implements IServerGens
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IServerGens=} [properties] Properties to set
             */
            function ServerGens(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServerGens minServerGen.
             * @member {number|Long} minServerGen
             * @memberof esriPBuffer.FeatureCollectionPBuffer.ServerGens
             * @instance
             */
            ServerGens.prototype.minServerGen = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * ServerGens serverGen.
             * @member {number|Long} serverGen
             * @memberof esriPBuffer.FeatureCollectionPBuffer.ServerGens
             * @instance
             */
            ServerGens.prototype.serverGen = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Decodes a ServerGens message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.ServerGens
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.ServerGens} ServerGens
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServerGens.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.ServerGens();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.minServerGen = reader.uint64();
                        break;
                    case 2:
                        message.serverGen = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a ServerGens message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.ServerGens
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServerGens.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.minServerGen != null && message.hasOwnProperty("minServerGen"))
                    if (!$util.isInteger(message.minServerGen) && !(message.minServerGen && $util.isInteger(message.minServerGen.low) && $util.isInteger(message.minServerGen.high)))
                        return "minServerGen: integer|Long expected";
                if (message.serverGen != null && message.hasOwnProperty("serverGen"))
                    if (!$util.isInteger(message.serverGen) && !(message.serverGen && $util.isInteger(message.serverGen.low) && $util.isInteger(message.serverGen.high)))
                        return "serverGen: integer|Long expected";
                return null;
            };

            return ServerGens;
        })();

        FeatureCollectionPBuffer.Scale = (function() {

            /**
             * Properties of a Scale.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IScale
             * @property {number|null} [xScale] Scale xScale
             * @property {number|null} [yScale] Scale yScale
             * @property {number|null} [mScale] Scale mScale
             * @property {number|null} [zScale] Scale zScale
             */

            /**
             * Constructs a new Scale.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a Scale.
             * @implements IScale
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IScale=} [properties] Properties to set
             */
            function Scale(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Scale xScale.
             * @member {number} xScale
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Scale
             * @instance
             */
            Scale.prototype.xScale = 0;

            /**
             * Scale yScale.
             * @member {number} yScale
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Scale
             * @instance
             */
            Scale.prototype.yScale = 0;

            /**
             * Scale mScale.
             * @member {number} mScale
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Scale
             * @instance
             */
            Scale.prototype.mScale = 0;

            /**
             * Scale zScale.
             * @member {number} zScale
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Scale
             * @instance
             */
            Scale.prototype.zScale = 0;

            /**
             * Decodes a Scale message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Scale
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.Scale} Scale
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Scale.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.Scale();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.xScale = reader.double();
                        break;
                    case 2:
                        message.yScale = reader.double();
                        break;
                    case 3:
                        message.mScale = reader.double();
                        break;
                    case 4:
                        message.zScale = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Scale message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Scale
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Scale.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.xScale != null && message.hasOwnProperty("xScale"))
                    if (typeof message.xScale !== "number")
                        return "xScale: number expected";
                if (message.yScale != null && message.hasOwnProperty("yScale"))
                    if (typeof message.yScale !== "number")
                        return "yScale: number expected";
                if (message.mScale != null && message.hasOwnProperty("mScale"))
                    if (typeof message.mScale !== "number")
                        return "mScale: number expected";
                if (message.zScale != null && message.hasOwnProperty("zScale"))
                    if (typeof message.zScale !== "number")
                        return "zScale: number expected";
                return null;
            };

            return Scale;
        })();

        FeatureCollectionPBuffer.Translate = (function() {

            /**
             * Properties of a Translate.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface ITranslate
             * @property {number|null} [xTranslate] Translate xTranslate
             * @property {number|null} [yTranslate] Translate yTranslate
             * @property {number|null} [mTranslate] Translate mTranslate
             * @property {number|null} [zTranslate] Translate zTranslate
             */

            /**
             * Constructs a new Translate.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a Translate.
             * @implements ITranslate
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.ITranslate=} [properties] Properties to set
             */
            function Translate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Translate xTranslate.
             * @member {number} xTranslate
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Translate
             * @instance
             */
            Translate.prototype.xTranslate = 0;

            /**
             * Translate yTranslate.
             * @member {number} yTranslate
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Translate
             * @instance
             */
            Translate.prototype.yTranslate = 0;

            /**
             * Translate mTranslate.
             * @member {number} mTranslate
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Translate
             * @instance
             */
            Translate.prototype.mTranslate = 0;

            /**
             * Translate zTranslate.
             * @member {number} zTranslate
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Translate
             * @instance
             */
            Translate.prototype.zTranslate = 0;

            /**
             * Decodes a Translate message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Translate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.Translate} Translate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Translate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.Translate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.xTranslate = reader.double();
                        break;
                    case 2:
                        message.yTranslate = reader.double();
                        break;
                    case 3:
                        message.mTranslate = reader.double();
                        break;
                    case 4:
                        message.zTranslate = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Translate message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Translate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Translate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.xTranslate != null && message.hasOwnProperty("xTranslate"))
                    if (typeof message.xTranslate !== "number")
                        return "xTranslate: number expected";
                if (message.yTranslate != null && message.hasOwnProperty("yTranslate"))
                    if (typeof message.yTranslate !== "number")
                        return "yTranslate: number expected";
                if (message.mTranslate != null && message.hasOwnProperty("mTranslate"))
                    if (typeof message.mTranslate !== "number")
                        return "mTranslate: number expected";
                if (message.zTranslate != null && message.hasOwnProperty("zTranslate"))
                    if (typeof message.zTranslate !== "number")
                        return "zTranslate: number expected";
                return null;
            };

            return Translate;
        })();

        FeatureCollectionPBuffer.Transform = (function() {

            /**
             * Properties of a Transform.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface ITransform
             * @property {esriPBuffer.FeatureCollectionPBuffer.QuantizeOriginPostion|null} [quantizeOriginPostion] Transform quantizeOriginPostion
             * @property {esriPBuffer.FeatureCollectionPBuffer.Scale|null} [scale] Transform scale
             * @property {esriPBuffer.FeatureCollectionPBuffer.Translate|null} [translate] Transform translate
             */

            /**
             * Constructs a new Transform.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a Transform.
             * @implements ITransform
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.ITransform=} [properties] Properties to set
             */
            function Transform(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Transform quantizeOriginPostion.
             * @member {esriPBuffer.FeatureCollectionPBuffer.QuantizeOriginPostion} quantizeOriginPostion
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Transform
             * @instance
             */
            Transform.prototype.quantizeOriginPostion = 0;

            /**
             * Transform scale.
             * @member {esriPBuffer.FeatureCollectionPBuffer.Scale|null|undefined} scale
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Transform
             * @instance
             */
            Transform.prototype.scale = null;

            /**
             * Transform translate.
             * @member {esriPBuffer.FeatureCollectionPBuffer.Translate|null|undefined} translate
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Transform
             * @instance
             */
            Transform.prototype.translate = null;

            /**
             * Decodes a Transform message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Transform
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.Transform} Transform
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Transform.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.Transform();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.quantizeOriginPostion = reader.int32();
                        break;
                    case 2:
                        message.scale = $root.esriPBuffer.FeatureCollectionPBuffer.Scale.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.translate = $root.esriPBuffer.FeatureCollectionPBuffer.Translate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a Transform message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.Transform
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Transform.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.quantizeOriginPostion != null && message.hasOwnProperty("quantizeOriginPostion"))
                    switch (message.quantizeOriginPostion) {
                    default:
                        return "quantizeOriginPostion: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.scale != null && message.hasOwnProperty("scale")) {
                    let error = $root.esriPBuffer.FeatureCollectionPBuffer.Scale.verify(message.scale);
                    if (error)
                        return "scale." + error;
                }
                if (message.translate != null && message.hasOwnProperty("translate")) {
                    let error = $root.esriPBuffer.FeatureCollectionPBuffer.Translate.verify(message.translate);
                    if (error)
                        return "translate." + error;
                }
                return null;
            };

            return Transform;
        })();

        FeatureCollectionPBuffer.FeatureResult = (function() {

            /**
             * Properties of a FeatureResult.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IFeatureResult
             * @property {string|null} [objectIdFieldName] FeatureResult objectIdFieldName
             * @property {esriPBuffer.FeatureCollectionPBuffer.UniqueIdField|null} [uniqueIdField] FeatureResult uniqueIdField
             * @property {string|null} [globalIdFieldName] FeatureResult globalIdFieldName
             * @property {string|null} [geohashFieldName] FeatureResult geohashFieldName
             * @property {esriPBuffer.FeatureCollectionPBuffer.GeometryProperties|null} [geometryProperties] FeatureResult geometryProperties
             * @property {esriPBuffer.FeatureCollectionPBuffer.ServerGens|null} [serverGens] FeatureResult serverGens
             * @property {esriPBuffer.FeatureCollectionPBuffer.GeometryType|null} [geometryType] FeatureResult geometryType
             * @property {esriPBuffer.FeatureCollectionPBuffer.SpatialReference|null} [spatialReference] FeatureResult spatialReference
             * @property {boolean|null} [exceededTransferLimit] FeatureResult exceededTransferLimit
             * @property {boolean|null} [hasZ] FeatureResult hasZ
             * @property {boolean|null} [hasM] FeatureResult hasM
             * @property {esriPBuffer.FeatureCollectionPBuffer.Transform|null} [transform] FeatureResult transform
             * @property {Array.<esriPBuffer.FeatureCollectionPBuffer.Field>|null} [fields] FeatureResult fields
             * @property {Array.<esriPBuffer.FeatureCollectionPBuffer.Value>|null} [values] FeatureResult values
             * @property {Array.<esriPBuffer.FeatureCollectionPBuffer.Feature>|null} [features] FeatureResult features
             */

            /**
             * Constructs a new FeatureResult.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a FeatureResult.
             * @implements IFeatureResult
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IFeatureResult=} [properties] Properties to set
             */
            function FeatureResult(properties) {
                this.fields = [];
                this.values = [];
                this.features = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FeatureResult objectIdFieldName.
             * @member {string} objectIdFieldName
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.objectIdFieldName = "";

            /**
             * FeatureResult uniqueIdField.
             * @member {esriPBuffer.FeatureCollectionPBuffer.UniqueIdField|null|undefined} uniqueIdField
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.uniqueIdField = null;

            /**
             * FeatureResult globalIdFieldName.
             * @member {string} globalIdFieldName
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.globalIdFieldName = "";

            /**
             * FeatureResult geohashFieldName.
             * @member {string} geohashFieldName
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.geohashFieldName = "";

            /**
             * FeatureResult geometryProperties.
             * @member {esriPBuffer.FeatureCollectionPBuffer.GeometryProperties|null|undefined} geometryProperties
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.geometryProperties = null;

            /**
             * FeatureResult serverGens.
             * @member {esriPBuffer.FeatureCollectionPBuffer.ServerGens|null|undefined} serverGens
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.serverGens = null;

            /**
             * FeatureResult geometryType.
             * @member {esriPBuffer.FeatureCollectionPBuffer.GeometryType} geometryType
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.geometryType = 0;

            /**
             * FeatureResult spatialReference.
             * @member {esriPBuffer.FeatureCollectionPBuffer.SpatialReference|null|undefined} spatialReference
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.spatialReference = null;

            /**
             * FeatureResult exceededTransferLimit.
             * @member {boolean} exceededTransferLimit
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.exceededTransferLimit = false;

            /**
             * FeatureResult hasZ.
             * @member {boolean} hasZ
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.hasZ = false;

            /**
             * FeatureResult hasM.
             * @member {boolean} hasM
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.hasM = false;

            /**
             * FeatureResult transform.
             * @member {esriPBuffer.FeatureCollectionPBuffer.Transform|null|undefined} transform
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.transform = null;

            /**
             * FeatureResult fields.
             * @member {Array.<esriPBuffer.FeatureCollectionPBuffer.Field>} fields
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.fields = $util.emptyArray;

            /**
             * FeatureResult values.
             * @member {Array.<esriPBuffer.FeatureCollectionPBuffer.Value>} values
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.values = $util.emptyArray;

            /**
             * FeatureResult features.
             * @member {Array.<esriPBuffer.FeatureCollectionPBuffer.Feature>} features
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @instance
             */
            FeatureResult.prototype.features = $util.emptyArray;

            /**
             * Decodes a FeatureResult message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.FeatureResult} FeatureResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeatureResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.FeatureResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.objectIdFieldName = reader.string();
                        break;
                    case 2:
                        message.uniqueIdField = $root.esriPBuffer.FeatureCollectionPBuffer.UniqueIdField.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.globalIdFieldName = reader.string();
                        break;
                    case 4:
                        message.geohashFieldName = reader.string();
                        break;
                    case 5:
                        message.geometryProperties = $root.esriPBuffer.FeatureCollectionPBuffer.GeometryProperties.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.serverGens = $root.esriPBuffer.FeatureCollectionPBuffer.ServerGens.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.geometryType = reader.int32();
                        break;
                    case 8:
                        message.spatialReference = $root.esriPBuffer.FeatureCollectionPBuffer.SpatialReference.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.exceededTransferLimit = reader.bool();
                        break;
                    case 10:
                        message.hasZ = reader.bool();
                        break;
                    case 11:
                        message.hasM = reader.bool();
                        break;
                    case 12:
                        message.transform = $root.esriPBuffer.FeatureCollectionPBuffer.Transform.decode(reader, reader.uint32());
                        break;
                    case 13:
                        if (!(message.fields && message.fields.length))
                            message.fields = [];
                        message.fields.push($root.esriPBuffer.FeatureCollectionPBuffer.Field.decode(reader, reader.uint32()));
                        break;
                    case 14:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.esriPBuffer.FeatureCollectionPBuffer.Value.decode(reader, reader.uint32()));
                        break;
                    case 15:
                        if (!(message.features && message.features.length))
                            message.features = [];
                        message.features.push($root.esriPBuffer.FeatureCollectionPBuffer.Feature.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a FeatureResult message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.FeatureResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FeatureResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.objectIdFieldName != null && message.hasOwnProperty("objectIdFieldName"))
                    if (!$util.isString(message.objectIdFieldName))
                        return "objectIdFieldName: string expected";
                if (message.uniqueIdField != null && message.hasOwnProperty("uniqueIdField")) {
                    let error = $root.esriPBuffer.FeatureCollectionPBuffer.UniqueIdField.verify(message.uniqueIdField);
                    if (error)
                        return "uniqueIdField." + error;
                }
                if (message.globalIdFieldName != null && message.hasOwnProperty("globalIdFieldName"))
                    if (!$util.isString(message.globalIdFieldName))
                        return "globalIdFieldName: string expected";
                if (message.geohashFieldName != null && message.hasOwnProperty("geohashFieldName"))
                    if (!$util.isString(message.geohashFieldName))
                        return "geohashFieldName: string expected";
                if (message.geometryProperties != null && message.hasOwnProperty("geometryProperties")) {
                    let error = $root.esriPBuffer.FeatureCollectionPBuffer.GeometryProperties.verify(message.geometryProperties);
                    if (error)
                        return "geometryProperties." + error;
                }
                if (message.serverGens != null && message.hasOwnProperty("serverGens")) {
                    let error = $root.esriPBuffer.FeatureCollectionPBuffer.ServerGens.verify(message.serverGens);
                    if (error)
                        return "serverGens." + error;
                }
                if (message.geometryType != null && message.hasOwnProperty("geometryType"))
                    switch (message.geometryType) {
                    default:
                        return "geometryType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 127:
                        break;
                    }
                if (message.spatialReference != null && message.hasOwnProperty("spatialReference")) {
                    let error = $root.esriPBuffer.FeatureCollectionPBuffer.SpatialReference.verify(message.spatialReference);
                    if (error)
                        return "spatialReference." + error;
                }
                if (message.exceededTransferLimit != null && message.hasOwnProperty("exceededTransferLimit"))
                    if (typeof message.exceededTransferLimit !== "boolean")
                        return "exceededTransferLimit: boolean expected";
                if (message.hasZ != null && message.hasOwnProperty("hasZ"))
                    if (typeof message.hasZ !== "boolean")
                        return "hasZ: boolean expected";
                if (message.hasM != null && message.hasOwnProperty("hasM"))
                    if (typeof message.hasM !== "boolean")
                        return "hasM: boolean expected";
                if (message.transform != null && message.hasOwnProperty("transform")) {
                    let error = $root.esriPBuffer.FeatureCollectionPBuffer.Transform.verify(message.transform);
                    if (error)
                        return "transform." + error;
                }
                if (message.fields != null && message.hasOwnProperty("fields")) {
                    if (!Array.isArray(message.fields))
                        return "fields: array expected";
                    for (let i = 0; i < message.fields.length; ++i) {
                        let error = $root.esriPBuffer.FeatureCollectionPBuffer.Field.verify(message.fields[i]);
                        if (error)
                            return "fields." + error;
                    }
                }
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (let i = 0; i < message.values.length; ++i) {
                        let error = $root.esriPBuffer.FeatureCollectionPBuffer.Value.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                if (message.features != null && message.hasOwnProperty("features")) {
                    if (!Array.isArray(message.features))
                        return "features: array expected";
                    for (let i = 0; i < message.features.length; ++i) {
                        let error = $root.esriPBuffer.FeatureCollectionPBuffer.Feature.verify(message.features[i]);
                        if (error)
                            return "features." + error;
                    }
                }
                return null;
            };

            return FeatureResult;
        })();

        FeatureCollectionPBuffer.CountResult = (function() {

            /**
             * Properties of a CountResult.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface ICountResult
             * @property {number|Long|null} [count] CountResult count
             */

            /**
             * Constructs a new CountResult.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a CountResult.
             * @implements ICountResult
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.ICountResult=} [properties] Properties to set
             */
            function CountResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CountResult count.
             * @member {number|Long} count
             * @memberof esriPBuffer.FeatureCollectionPBuffer.CountResult
             * @instance
             */
            CountResult.prototype.count = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Decodes a CountResult message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.CountResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.CountResult} CountResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CountResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.CountResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.count = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a CountResult message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.CountResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CountResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.count != null && message.hasOwnProperty("count"))
                    if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                        return "count: integer|Long expected";
                return null;
            };

            return CountResult;
        })();

        FeatureCollectionPBuffer.ObjectIdsResult = (function() {

            /**
             * Properties of an ObjectIdsResult.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IObjectIdsResult
             * @property {string|null} [objectIdFieldName] ObjectIdsResult objectIdFieldName
             * @property {esriPBuffer.FeatureCollectionPBuffer.ServerGens|null} [serverGens] ObjectIdsResult serverGens
             * @property {Array.<number|Long>|null} [objectIds] ObjectIdsResult objectIds
             */

            /**
             * Constructs a new ObjectIdsResult.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents an ObjectIdsResult.
             * @implements IObjectIdsResult
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IObjectIdsResult=} [properties] Properties to set
             */
            function ObjectIdsResult(properties) {
                this.objectIds = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ObjectIdsResult objectIdFieldName.
             * @member {string} objectIdFieldName
             * @memberof esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult
             * @instance
             */
            ObjectIdsResult.prototype.objectIdFieldName = "";

            /**
             * ObjectIdsResult serverGens.
             * @member {esriPBuffer.FeatureCollectionPBuffer.ServerGens|null|undefined} serverGens
             * @memberof esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult
             * @instance
             */
            ObjectIdsResult.prototype.serverGens = null;

            /**
             * ObjectIdsResult objectIds.
             * @member {Array.<number|Long>} objectIds
             * @memberof esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult
             * @instance
             */
            ObjectIdsResult.prototype.objectIds = $util.emptyArray;

            /**
             * Decodes an ObjectIdsResult message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult} ObjectIdsResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ObjectIdsResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.objectIdFieldName = reader.string();
                        break;
                    case 2:
                        message.serverGens = $root.esriPBuffer.FeatureCollectionPBuffer.ServerGens.decode(reader, reader.uint32());
                        break;
                    case 3:
                        if (!(message.objectIds && message.objectIds.length))
                            message.objectIds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.objectIds.push(reader.uint64());
                        } else
                            message.objectIds.push(reader.uint64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies an ObjectIdsResult message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ObjectIdsResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.objectIdFieldName != null && message.hasOwnProperty("objectIdFieldName"))
                    if (!$util.isString(message.objectIdFieldName))
                        return "objectIdFieldName: string expected";
                if (message.serverGens != null && message.hasOwnProperty("serverGens")) {
                    let error = $root.esriPBuffer.FeatureCollectionPBuffer.ServerGens.verify(message.serverGens);
                    if (error)
                        return "serverGens." + error;
                }
                if (message.objectIds != null && message.hasOwnProperty("objectIds")) {
                    if (!Array.isArray(message.objectIds))
                        return "objectIds: array expected";
                    for (let i = 0; i < message.objectIds.length; ++i)
                        if (!$util.isInteger(message.objectIds[i]) && !(message.objectIds[i] && $util.isInteger(message.objectIds[i].low) && $util.isInteger(message.objectIds[i].high)))
                            return "objectIds: integer|Long[] expected";
                }
                return null;
            };

            return ObjectIdsResult;
        })();

        FeatureCollectionPBuffer.QueryResult = (function() {

            /**
             * Properties of a QueryResult.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @interface IQueryResult
             * @property {esriPBuffer.FeatureCollectionPBuffer.FeatureResult|null} [featureResult] QueryResult featureResult
             * @property {esriPBuffer.FeatureCollectionPBuffer.CountResult|null} [countResult] QueryResult countResult
             * @property {esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult|null} [idsResult] QueryResult idsResult
             */

            /**
             * Constructs a new QueryResult.
             * @memberof esriPBuffer.FeatureCollectionPBuffer
             * @classdesc Represents a QueryResult.
             * @implements IQueryResult
             * @constructor
             * @param {esriPBuffer.FeatureCollectionPBuffer.IQueryResult=} [properties] Properties to set
             */
            function QueryResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryResult featureResult.
             * @member {esriPBuffer.FeatureCollectionPBuffer.FeatureResult|null|undefined} featureResult
             * @memberof esriPBuffer.FeatureCollectionPBuffer.QueryResult
             * @instance
             */
            QueryResult.prototype.featureResult = null;

            /**
             * QueryResult countResult.
             * @member {esriPBuffer.FeatureCollectionPBuffer.CountResult|null|undefined} countResult
             * @memberof esriPBuffer.FeatureCollectionPBuffer.QueryResult
             * @instance
             */
            QueryResult.prototype.countResult = null;

            /**
             * QueryResult idsResult.
             * @member {esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult|null|undefined} idsResult
             * @memberof esriPBuffer.FeatureCollectionPBuffer.QueryResult
             * @instance
             */
            QueryResult.prototype.idsResult = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * QueryResult Results.
             * @member {"featureResult"|"countResult"|"idsResult"|undefined} Results
             * @memberof esriPBuffer.FeatureCollectionPBuffer.QueryResult
             * @instance
             */
            Object.defineProperty(QueryResult.prototype, "Results", {
                get: $util.oneOfGetter($oneOfFields = ["featureResult", "countResult", "idsResult"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Decodes a QueryResult message from the specified reader or buffer.
             * @function decode
             * @memberof esriPBuffer.FeatureCollectionPBuffer.QueryResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {esriPBuffer.FeatureCollectionPBuffer.QueryResult} QueryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esriPBuffer.FeatureCollectionPBuffer.QueryResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.featureResult = $root.esriPBuffer.FeatureCollectionPBuffer.FeatureResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.countResult = $root.esriPBuffer.FeatureCollectionPBuffer.CountResult.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.idsResult = $root.esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Verifies a QueryResult message.
             * @function verify
             * @memberof esriPBuffer.FeatureCollectionPBuffer.QueryResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.featureResult != null && message.hasOwnProperty("featureResult")) {
                    properties.Results = 1;
                    {
                        let error = $root.esriPBuffer.FeatureCollectionPBuffer.FeatureResult.verify(message.featureResult);
                        if (error)
                            return "featureResult." + error;
                    }
                }
                if (message.countResult != null && message.hasOwnProperty("countResult")) {
                    if (properties.Results === 1)
                        return "Results: multiple values";
                    properties.Results = 1;
                    {
                        let error = $root.esriPBuffer.FeatureCollectionPBuffer.CountResult.verify(message.countResult);
                        if (error)
                            return "countResult." + error;
                    }
                }
                if (message.idsResult != null && message.hasOwnProperty("idsResult")) {
                    if (properties.Results === 1)
                        return "Results: multiple values";
                    properties.Results = 1;
                    {
                        let error = $root.esriPBuffer.FeatureCollectionPBuffer.ObjectIdsResult.verify(message.idsResult);
                        if (error)
                            return "idsResult." + error;
                    }
                }
                return null;
            };

            return QueryResult;
        })();

        return FeatureCollectionPBuffer;
    })();

    return esriPBuffer;
})();

export { $root as default };

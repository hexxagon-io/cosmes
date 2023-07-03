// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/twap/v1beta1/query.proto (package osmosis.twap.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Params } from "./genesis_pb.js";

/**
 * @generated from message osmosis.twap.v1beta1.ArithmeticTwapRequest
 */
export class ArithmeticTwapRequest extends Message<ArithmeticTwapRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string base_asset = 2;
   */
  baseAsset = "";

  /**
   * @generated from field: string quote_asset = 3;
   */
  quoteAsset = "";

  /**
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 5;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<ArithmeticTwapRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.twap.v1beta1.ArithmeticTwapRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "base_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "start_time", kind: "message", T: Timestamp },
    { no: 5, name: "end_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArithmeticTwapRequest {
    return new ArithmeticTwapRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArithmeticTwapRequest {
    return new ArithmeticTwapRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArithmeticTwapRequest {
    return new ArithmeticTwapRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ArithmeticTwapRequest | PlainMessage<ArithmeticTwapRequest> | undefined, b: ArithmeticTwapRequest | PlainMessage<ArithmeticTwapRequest> | undefined): boolean {
    return proto3.util.equals(ArithmeticTwapRequest, a, b);
  }
}

/**
 * @generated from message osmosis.twap.v1beta1.ArithmeticTwapResponse
 */
export class ArithmeticTwapResponse extends Message<ArithmeticTwapResponse> {
  /**
   * @generated from field: string arithmetic_twap = 1;
   */
  arithmeticTwap = "";

  constructor(data?: PartialMessage<ArithmeticTwapResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.twap.v1beta1.ArithmeticTwapResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "arithmetic_twap", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArithmeticTwapResponse {
    return new ArithmeticTwapResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArithmeticTwapResponse {
    return new ArithmeticTwapResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArithmeticTwapResponse {
    return new ArithmeticTwapResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ArithmeticTwapResponse | PlainMessage<ArithmeticTwapResponse> | undefined, b: ArithmeticTwapResponse | PlainMessage<ArithmeticTwapResponse> | undefined): boolean {
    return proto3.util.equals(ArithmeticTwapResponse, a, b);
  }
}

/**
 * @generated from message osmosis.twap.v1beta1.ArithmeticTwapToNowRequest
 */
export class ArithmeticTwapToNowRequest extends Message<ArithmeticTwapToNowRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string base_asset = 2;
   */
  baseAsset = "";

  /**
   * @generated from field: string quote_asset = 3;
   */
  quoteAsset = "";

  /**
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  constructor(data?: PartialMessage<ArithmeticTwapToNowRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.twap.v1beta1.ArithmeticTwapToNowRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "base_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "start_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArithmeticTwapToNowRequest {
    return new ArithmeticTwapToNowRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArithmeticTwapToNowRequest {
    return new ArithmeticTwapToNowRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArithmeticTwapToNowRequest {
    return new ArithmeticTwapToNowRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ArithmeticTwapToNowRequest | PlainMessage<ArithmeticTwapToNowRequest> | undefined, b: ArithmeticTwapToNowRequest | PlainMessage<ArithmeticTwapToNowRequest> | undefined): boolean {
    return proto3.util.equals(ArithmeticTwapToNowRequest, a, b);
  }
}

/**
 * @generated from message osmosis.twap.v1beta1.ArithmeticTwapToNowResponse
 */
export class ArithmeticTwapToNowResponse extends Message<ArithmeticTwapToNowResponse> {
  /**
   * @generated from field: string arithmetic_twap = 1;
   */
  arithmeticTwap = "";

  constructor(data?: PartialMessage<ArithmeticTwapToNowResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.twap.v1beta1.ArithmeticTwapToNowResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "arithmetic_twap", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArithmeticTwapToNowResponse {
    return new ArithmeticTwapToNowResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArithmeticTwapToNowResponse {
    return new ArithmeticTwapToNowResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArithmeticTwapToNowResponse {
    return new ArithmeticTwapToNowResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ArithmeticTwapToNowResponse | PlainMessage<ArithmeticTwapToNowResponse> | undefined, b: ArithmeticTwapToNowResponse | PlainMessage<ArithmeticTwapToNowResponse> | undefined): boolean {
    return proto3.util.equals(ArithmeticTwapToNowResponse, a, b);
  }
}

/**
 * @generated from message osmosis.twap.v1beta1.GeometricTwapRequest
 */
export class GeometricTwapRequest extends Message<GeometricTwapRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string base_asset = 2;
   */
  baseAsset = "";

  /**
   * @generated from field: string quote_asset = 3;
   */
  quoteAsset = "";

  /**
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 5;
   */
  endTime?: Timestamp;

  constructor(data?: PartialMessage<GeometricTwapRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.twap.v1beta1.GeometricTwapRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "base_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "start_time", kind: "message", T: Timestamp },
    { no: 5, name: "end_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeometricTwapRequest {
    return new GeometricTwapRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeometricTwapRequest {
    return new GeometricTwapRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeometricTwapRequest {
    return new GeometricTwapRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GeometricTwapRequest | PlainMessage<GeometricTwapRequest> | undefined, b: GeometricTwapRequest | PlainMessage<GeometricTwapRequest> | undefined): boolean {
    return proto3.util.equals(GeometricTwapRequest, a, b);
  }
}

/**
 * @generated from message osmosis.twap.v1beta1.GeometricTwapResponse
 */
export class GeometricTwapResponse extends Message<GeometricTwapResponse> {
  /**
   * @generated from field: string geometric_twap = 1;
   */
  geometricTwap = "";

  constructor(data?: PartialMessage<GeometricTwapResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.twap.v1beta1.GeometricTwapResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "geometric_twap", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeometricTwapResponse {
    return new GeometricTwapResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeometricTwapResponse {
    return new GeometricTwapResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeometricTwapResponse {
    return new GeometricTwapResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GeometricTwapResponse | PlainMessage<GeometricTwapResponse> | undefined, b: GeometricTwapResponse | PlainMessage<GeometricTwapResponse> | undefined): boolean {
    return proto3.util.equals(GeometricTwapResponse, a, b);
  }
}

/**
 * @generated from message osmosis.twap.v1beta1.GeometricTwapToNowRequest
 */
export class GeometricTwapToNowRequest extends Message<GeometricTwapToNowRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string base_asset = 2;
   */
  baseAsset = "";

  /**
   * @generated from field: string quote_asset = 3;
   */
  quoteAsset = "";

  /**
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  constructor(data?: PartialMessage<GeometricTwapToNowRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.twap.v1beta1.GeometricTwapToNowRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "base_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "start_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeometricTwapToNowRequest {
    return new GeometricTwapToNowRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeometricTwapToNowRequest {
    return new GeometricTwapToNowRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeometricTwapToNowRequest {
    return new GeometricTwapToNowRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GeometricTwapToNowRequest | PlainMessage<GeometricTwapToNowRequest> | undefined, b: GeometricTwapToNowRequest | PlainMessage<GeometricTwapToNowRequest> | undefined): boolean {
    return proto3.util.equals(GeometricTwapToNowRequest, a, b);
  }
}

/**
 * @generated from message osmosis.twap.v1beta1.GeometricTwapToNowResponse
 */
export class GeometricTwapToNowResponse extends Message<GeometricTwapToNowResponse> {
  /**
   * @generated from field: string geometric_twap = 1;
   */
  geometricTwap = "";

  constructor(data?: PartialMessage<GeometricTwapToNowResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.twap.v1beta1.GeometricTwapToNowResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "geometric_twap", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeometricTwapToNowResponse {
    return new GeometricTwapToNowResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeometricTwapToNowResponse {
    return new GeometricTwapToNowResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeometricTwapToNowResponse {
    return new GeometricTwapToNowResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GeometricTwapToNowResponse | PlainMessage<GeometricTwapToNowResponse> | undefined, b: GeometricTwapToNowResponse | PlainMessage<GeometricTwapToNowResponse> | undefined): boolean {
    return proto3.util.equals(GeometricTwapToNowResponse, a, b);
  }
}

/**
 * @generated from message osmosis.twap.v1beta1.ParamsRequest
 */
export class ParamsRequest extends Message<ParamsRequest> {
  constructor(data?: PartialMessage<ParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.twap.v1beta1.ParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsRequest {
    return new ParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsRequest {
    return new ParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsRequest {
    return new ParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ParamsRequest | PlainMessage<ParamsRequest> | undefined, b: ParamsRequest | PlainMessage<ParamsRequest> | undefined): boolean {
    return proto3.util.equals(ParamsRequest, a, b);
  }
}

/**
 * @generated from message osmosis.twap.v1beta1.ParamsResponse
 */
export class ParamsResponse extends Message<ParamsResponse> {
  /**
   * @generated from field: osmosis.twap.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<ParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.twap.v1beta1.ParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsResponse {
    return new ParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsResponse {
    return new ParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsResponse {
    return new ParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ParamsResponse | PlainMessage<ParamsResponse> | undefined, b: ParamsResponse | PlainMessage<ParamsResponse> | undefined): boolean {
    return proto3.util.equals(ParamsResponse, a, b);
  }
}


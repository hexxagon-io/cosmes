// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/concentrated-liquidity/tx.proto (package osmosis.concentratedliquidity.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin, DecCoin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * ===================== MsgCreatePosition
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCreatePosition
 */
export class MsgCreatePosition extends Message<MsgCreatePosition> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string sender = 2;
   */
  sender = "";

  /**
   * @generated from field: int64 lower_tick = 3;
   */
  lowerTick = protoInt64.zero;

  /**
   * @generated from field: int64 upper_tick = 4;
   */
  upperTick = protoInt64.zero;

  /**
   * tokens_provided is the amount of tokens provided for the position.
   * It must at a minimum be of length 1 (for a single sided position)
   * and at a maximum be of length 2 (for a position that straddles the current
   * tick).
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin tokens_provided = 5;
   */
  tokensProvided: Coin[] = [];

  /**
   * @generated from field: string token_min_amount0 = 6;
   */
  tokenMinAmount0 = "";

  /**
   * @generated from field: string token_min_amount1 = 7;
   */
  tokenMinAmount1 = "";

  constructor(data?: PartialMessage<MsgCreatePosition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCreatePosition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "lower_tick", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "upper_tick", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "tokens_provided", kind: "message", T: Coin, repeated: true },
    { no: 6, name: "token_min_amount0", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "token_min_amount1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePosition {
    return new MsgCreatePosition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePosition {
    return new MsgCreatePosition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePosition {
    return new MsgCreatePosition().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePosition | PlainMessage<MsgCreatePosition> | undefined, b: MsgCreatePosition | PlainMessage<MsgCreatePosition> | undefined): boolean {
    return proto3.util.equals(MsgCreatePosition, a, b);
  }
}

/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCreatePositionResponse
 */
export class MsgCreatePositionResponse extends Message<MsgCreatePositionResponse> {
  /**
   * @generated from field: uint64 position_id = 1;
   */
  positionId = protoInt64.zero;

  /**
   * @generated from field: string amount0 = 2;
   */
  amount0 = "";

  /**
   * @generated from field: string amount1 = 3;
   */
  amount1 = "";

  /**
   * @generated from field: string liquidity_created = 5;
   */
  liquidityCreated = "";

  /**
   * the lower and upper tick are in the response because there are
   * instances in which multiple ticks represent the same price, so
   * we may move their provided tick to the canonical tick that represents
   * the same price.
   *
   * @generated from field: int64 lower_tick = 6;
   */
  lowerTick = protoInt64.zero;

  /**
   * @generated from field: int64 upper_tick = 7;
   */
  upperTick = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreatePositionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCreatePositionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "position_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "amount0", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "liquidity_created", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "lower_tick", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "upper_tick", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePositionResponse {
    return new MsgCreatePositionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePositionResponse {
    return new MsgCreatePositionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePositionResponse {
    return new MsgCreatePositionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePositionResponse | PlainMessage<MsgCreatePositionResponse> | undefined, b: MsgCreatePositionResponse | PlainMessage<MsgCreatePositionResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreatePositionResponse, a, b);
  }
}

/**
 * ===================== MsgAddToPosition
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgAddToPosition
 */
export class MsgAddToPosition extends Message<MsgAddToPosition> {
  /**
   * @generated from field: uint64 position_id = 1;
   */
  positionId = protoInt64.zero;

  /**
   * @generated from field: string sender = 2;
   */
  sender = "";

  /**
   * amount0 represents the amount of token0 willing to put in.
   *
   * @generated from field: string amount0 = 3;
   */
  amount0 = "";

  /**
   * amount1 represents the amount of token1 willing to put in.
   *
   * @generated from field: string amount1 = 4;
   */
  amount1 = "";

  /**
   * token_min_amount0 represents the minimum amount of token0 desired from the
   * new position being created. Note that this field indicates the min amount0
   * corresponding to the liquidity that is being added, not the total
   * liquidity of the position.
   *
   * @generated from field: string token_min_amount0 = 5;
   */
  tokenMinAmount0 = "";

  /**
   * token_min_amount1 represents the minimum amount of token1 desired from the
   * new position being created. Note that this field indicates the min amount1
   * corresponding to the liquidity that is being added, not the total
   * liquidity of the position.
   *
   * @generated from field: string token_min_amount1 = 6;
   */
  tokenMinAmount1 = "";

  constructor(data?: PartialMessage<MsgAddToPosition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgAddToPosition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "position_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount0", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "amount1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "token_min_amount0", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "token_min_amount1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddToPosition {
    return new MsgAddToPosition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddToPosition {
    return new MsgAddToPosition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddToPosition {
    return new MsgAddToPosition().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddToPosition | PlainMessage<MsgAddToPosition> | undefined, b: MsgAddToPosition | PlainMessage<MsgAddToPosition> | undefined): boolean {
    return proto3.util.equals(MsgAddToPosition, a, b);
  }
}

/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgAddToPositionResponse
 */
export class MsgAddToPositionResponse extends Message<MsgAddToPositionResponse> {
  /**
   * @generated from field: uint64 position_id = 1;
   */
  positionId = protoInt64.zero;

  /**
   * @generated from field: string amount0 = 2;
   */
  amount0 = "";

  /**
   * @generated from field: string amount1 = 3;
   */
  amount1 = "";

  constructor(data?: PartialMessage<MsgAddToPositionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgAddToPositionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "position_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "amount0", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddToPositionResponse {
    return new MsgAddToPositionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddToPositionResponse {
    return new MsgAddToPositionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddToPositionResponse {
    return new MsgAddToPositionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddToPositionResponse | PlainMessage<MsgAddToPositionResponse> | undefined, b: MsgAddToPositionResponse | PlainMessage<MsgAddToPositionResponse> | undefined): boolean {
    return proto3.util.equals(MsgAddToPositionResponse, a, b);
  }
}

/**
 * ===================== MsgWithdrawPosition
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition
 */
export class MsgWithdrawPosition extends Message<MsgWithdrawPosition> {
  /**
   * @generated from field: uint64 position_id = 1;
   */
  positionId = protoInt64.zero;

  /**
   * @generated from field: string sender = 2;
   */
  sender = "";

  /**
   * @generated from field: string liquidity_amount = 3;
   */
  liquidityAmount = "";

  constructor(data?: PartialMessage<MsgWithdrawPosition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "position_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "liquidity_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawPosition {
    return new MsgWithdrawPosition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawPosition {
    return new MsgWithdrawPosition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawPosition {
    return new MsgWithdrawPosition().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawPosition | PlainMessage<MsgWithdrawPosition> | undefined, b: MsgWithdrawPosition | PlainMessage<MsgWithdrawPosition> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawPosition, a, b);
  }
}

/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgWithdrawPositionResponse
 */
export class MsgWithdrawPositionResponse extends Message<MsgWithdrawPositionResponse> {
  /**
   * @generated from field: string amount0 = 1;
   */
  amount0 = "";

  /**
   * @generated from field: string amount1 = 2;
   */
  amount1 = "";

  constructor(data?: PartialMessage<MsgWithdrawPositionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgWithdrawPositionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount0", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawPositionResponse {
    return new MsgWithdrawPositionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawPositionResponse {
    return new MsgWithdrawPositionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawPositionResponse {
    return new MsgWithdrawPositionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawPositionResponse | PlainMessage<MsgWithdrawPositionResponse> | undefined, b: MsgWithdrawPositionResponse | PlainMessage<MsgWithdrawPositionResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawPositionResponse, a, b);
  }
}

/**
 * ===================== MsgCollectSpreadRewards
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards
 */
export class MsgCollectSpreadRewards extends Message<MsgCollectSpreadRewards> {
  /**
   * @generated from field: repeated uint64 position_ids = 1;
   */
  positionIds: bigint[] = [];

  /**
   * @generated from field: string sender = 2;
   */
  sender = "";

  constructor(data?: PartialMessage<MsgCollectSpreadRewards>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "position_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCollectSpreadRewards {
    return new MsgCollectSpreadRewards().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCollectSpreadRewards {
    return new MsgCollectSpreadRewards().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCollectSpreadRewards {
    return new MsgCollectSpreadRewards().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCollectSpreadRewards | PlainMessage<MsgCollectSpreadRewards> | undefined, b: MsgCollectSpreadRewards | PlainMessage<MsgCollectSpreadRewards> | undefined): boolean {
    return proto3.util.equals(MsgCollectSpreadRewards, a, b);
  }
}

/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewardsResponse
 */
export class MsgCollectSpreadRewardsResponse extends Message<MsgCollectSpreadRewardsResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin collected_spread_rewards = 1;
   */
  collectedSpreadRewards: Coin[] = [];

  constructor(data?: PartialMessage<MsgCollectSpreadRewardsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewardsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collected_spread_rewards", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCollectSpreadRewardsResponse {
    return new MsgCollectSpreadRewardsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCollectSpreadRewardsResponse {
    return new MsgCollectSpreadRewardsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCollectSpreadRewardsResponse {
    return new MsgCollectSpreadRewardsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCollectSpreadRewardsResponse | PlainMessage<MsgCollectSpreadRewardsResponse> | undefined, b: MsgCollectSpreadRewardsResponse | PlainMessage<MsgCollectSpreadRewardsResponse> | undefined): boolean {
    return proto3.util.equals(MsgCollectSpreadRewardsResponse, a, b);
  }
}

/**
 * ===================== MsgCollectIncentives
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives
 */
export class MsgCollectIncentives extends Message<MsgCollectIncentives> {
  /**
   * @generated from field: repeated uint64 position_ids = 1;
   */
  positionIds: bigint[] = [];

  /**
   * @generated from field: string sender = 2;
   */
  sender = "";

  constructor(data?: PartialMessage<MsgCollectIncentives>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "position_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCollectIncentives {
    return new MsgCollectIncentives().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCollectIncentives {
    return new MsgCollectIncentives().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCollectIncentives {
    return new MsgCollectIncentives().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCollectIncentives | PlainMessage<MsgCollectIncentives> | undefined, b: MsgCollectIncentives | PlainMessage<MsgCollectIncentives> | undefined): boolean {
    return proto3.util.equals(MsgCollectIncentives, a, b);
  }
}

/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCollectIncentivesResponse
 */
export class MsgCollectIncentivesResponse extends Message<MsgCollectIncentivesResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin collected_incentives = 1;
   */
  collectedIncentives: Coin[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin forfeited_incentives = 2;
   */
  forfeitedIncentives: DecCoin[] = [];

  constructor(data?: PartialMessage<MsgCollectIncentivesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCollectIncentivesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collected_incentives", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "forfeited_incentives", kind: "message", T: DecCoin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCollectIncentivesResponse {
    return new MsgCollectIncentivesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCollectIncentivesResponse {
    return new MsgCollectIncentivesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCollectIncentivesResponse {
    return new MsgCollectIncentivesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCollectIncentivesResponse | PlainMessage<MsgCollectIncentivesResponse> | undefined, b: MsgCollectIncentivesResponse | PlainMessage<MsgCollectIncentivesResponse> | undefined): boolean {
    return proto3.util.equals(MsgCollectIncentivesResponse, a, b);
  }
}

/**
 * ===================== MsgFungifyChargedPositions
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions
 */
export class MsgFungifyChargedPositions extends Message<MsgFungifyChargedPositions> {
  /**
   * @generated from field: repeated uint64 position_ids = 1;
   */
  positionIds: bigint[] = [];

  /**
   * @generated from field: string sender = 2;
   */
  sender = "";

  constructor(data?: PartialMessage<MsgFungifyChargedPositions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "position_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFungifyChargedPositions {
    return new MsgFungifyChargedPositions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFungifyChargedPositions {
    return new MsgFungifyChargedPositions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFungifyChargedPositions {
    return new MsgFungifyChargedPositions().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFungifyChargedPositions | PlainMessage<MsgFungifyChargedPositions> | undefined, b: MsgFungifyChargedPositions | PlainMessage<MsgFungifyChargedPositions> | undefined): boolean {
    return proto3.util.equals(MsgFungifyChargedPositions, a, b);
  }
}

/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositionsResponse
 */
export class MsgFungifyChargedPositionsResponse extends Message<MsgFungifyChargedPositionsResponse> {
  /**
   * @generated from field: uint64 new_position_id = 1;
   */
  newPositionId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgFungifyChargedPositionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "new_position_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFungifyChargedPositionsResponse {
    return new MsgFungifyChargedPositionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFungifyChargedPositionsResponse {
    return new MsgFungifyChargedPositionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFungifyChargedPositionsResponse {
    return new MsgFungifyChargedPositionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFungifyChargedPositionsResponse | PlainMessage<MsgFungifyChargedPositionsResponse> | undefined, b: MsgFungifyChargedPositionsResponse | PlainMessage<MsgFungifyChargedPositionsResponse> | undefined): boolean {
    return proto3.util.equals(MsgFungifyChargedPositionsResponse, a, b);
  }
}


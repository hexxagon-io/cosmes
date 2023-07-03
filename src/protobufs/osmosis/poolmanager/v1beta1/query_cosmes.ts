// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file osmosis/poolmanager/v1beta1/query.proto (package osmosis.poolmanager.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AllPoolsRequest, AllPoolsResponse, EstimateSinglePoolSwapExactAmountInRequest, EstimateSinglePoolSwapExactAmountOutRequest, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, NumPoolsRequest, NumPoolsResponse, ParamsRequest, ParamsResponse, PoolRequest, PoolResponse, SpotPriceRequest, SpotPriceResponse, TotalPoolLiquidityRequest, TotalPoolLiquidityResponse } from "./query_pb.js";

const TYPE_NAME = "osmosis.poolmanager.v1beta1.Query";

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: ParamsRequest,
  Response: ParamsResponse,
} as const;

/**
 * Estimates swap amount out given in.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSwapExactAmountIn
 */
export const QueryEstimateSwapExactAmountInService = {
  typeName: TYPE_NAME,
  method: "EstimateSwapExactAmountIn",
  Request: EstimateSwapExactAmountInRequest,
  Response: EstimateSwapExactAmountInResponse,
} as const;

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSinglePoolSwapExactAmountIn
 */
export const QueryEstimateSinglePoolSwapExactAmountInService = {
  typeName: TYPE_NAME,
  method: "EstimateSinglePoolSwapExactAmountIn",
  Request: EstimateSinglePoolSwapExactAmountInRequest,
  Response: EstimateSwapExactAmountInResponse,
} as const;

/**
 * Estimates swap amount in given out.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSwapExactAmountOut
 */
export const QueryEstimateSwapExactAmountOutService = {
  typeName: TYPE_NAME,
  method: "EstimateSwapExactAmountOut",
  Request: EstimateSwapExactAmountOutRequest,
  Response: EstimateSwapExactAmountOutResponse,
} as const;

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSinglePoolSwapExactAmountOut
 */
export const QueryEstimateSinglePoolSwapExactAmountOutService = {
  typeName: TYPE_NAME,
  method: "EstimateSinglePoolSwapExactAmountOut",
  Request: EstimateSinglePoolSwapExactAmountOutRequest,
  Response: EstimateSwapExactAmountOutResponse,
} as const;

/**
 * Returns the total number of pools existing in Osmosis.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.NumPools
 */
export const QueryNumPoolsService = {
  typeName: TYPE_NAME,
  method: "NumPools",
  Request: NumPoolsRequest,
  Response: NumPoolsResponse,
} as const;

/**
 * Pool returns the Pool specified by the pool id
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.Pool
 */
export const QueryPoolService = {
  typeName: TYPE_NAME,
  method: "Pool",
  Request: PoolRequest,
  Response: PoolResponse,
} as const;

/**
 * AllPools returns all pools on the Osmosis chain sorted by IDs.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.AllPools
 */
export const QueryAllPoolsService = {
  typeName: TYPE_NAME,
  method: "AllPools",
  Request: AllPoolsRequest,
  Response: AllPoolsResponse,
} as const;

/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.SpotPrice
 */
export const QuerySpotPriceService = {
  typeName: TYPE_NAME,
  method: "SpotPrice",
  Request: SpotPriceRequest,
  Response: SpotPriceResponse,
} as const;

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.TotalPoolLiquidity
 */
export const QueryTotalPoolLiquidityService = {
  typeName: TYPE_NAME,
  method: "TotalPoolLiquidity",
  Request: TotalPoolLiquidityRequest,
  Response: TotalPoolLiquidityResponse,
} as const;


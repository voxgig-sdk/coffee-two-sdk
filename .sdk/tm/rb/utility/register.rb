# CoffeeTwo SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CoffeeTwoUtility.registrar = ->(u) {
  u.clean = CoffeeTwoUtilities::Clean
  u.done = CoffeeTwoUtilities::Done
  u.make_error = CoffeeTwoUtilities::MakeError
  u.feature_add = CoffeeTwoUtilities::FeatureAdd
  u.feature_hook = CoffeeTwoUtilities::FeatureHook
  u.feature_init = CoffeeTwoUtilities::FeatureInit
  u.fetcher = CoffeeTwoUtilities::Fetcher
  u.make_fetch_def = CoffeeTwoUtilities::MakeFetchDef
  u.make_context = CoffeeTwoUtilities::MakeContext
  u.make_options = CoffeeTwoUtilities::MakeOptions
  u.make_request = CoffeeTwoUtilities::MakeRequest
  u.make_response = CoffeeTwoUtilities::MakeResponse
  u.make_result = CoffeeTwoUtilities::MakeResult
  u.make_point = CoffeeTwoUtilities::MakePoint
  u.make_spec = CoffeeTwoUtilities::MakeSpec
  u.make_url = CoffeeTwoUtilities::MakeUrl
  u.param = CoffeeTwoUtilities::Param
  u.prepare_auth = CoffeeTwoUtilities::PrepareAuth
  u.prepare_body = CoffeeTwoUtilities::PrepareBody
  u.prepare_headers = CoffeeTwoUtilities::PrepareHeaders
  u.prepare_method = CoffeeTwoUtilities::PrepareMethod
  u.prepare_params = CoffeeTwoUtilities::PrepareParams
  u.prepare_path = CoffeeTwoUtilities::PreparePath
  u.prepare_query = CoffeeTwoUtilities::PrepareQuery
  u.result_basic = CoffeeTwoUtilities::ResultBasic
  u.result_body = CoffeeTwoUtilities::ResultBody
  u.result_headers = CoffeeTwoUtilities::ResultHeaders
  u.transform_request = CoffeeTwoUtilities::TransformRequest
  u.transform_response = CoffeeTwoUtilities::TransformResponse
}

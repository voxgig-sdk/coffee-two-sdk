# CoffeeTwo SDK utility: prepare_body
require_relative 'media'
module CoffeeTwoUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return CoffeeTwoUtilities.raw_body(ctx.reqdata) if CoffeeTwoUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end

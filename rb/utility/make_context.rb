# CoffeeTwo SDK utility: make_context
require_relative '../core/context'
module CoffeeTwoUtilities
  MakeContext = ->(ctxmap, basectx) {
    CoffeeTwoContext.new(ctxmap, basectx)
  }
end

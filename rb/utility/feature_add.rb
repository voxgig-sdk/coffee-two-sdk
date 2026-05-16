# CoffeeTwo SDK utility: feature_add
module CoffeeTwoUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end

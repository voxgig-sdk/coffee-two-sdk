# CoffeeTwo SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CoffeeTwoFeatures
  def self.make_feature(name)
    case name
    when "base"
      CoffeeTwoBaseFeature.new
    when "ratelimit"
      CoffeeTwoRatelimitFeature.new
    when "retry"
      CoffeeTwoRetryFeature.new
    when "test"
      CoffeeTwoTestFeature.new
    when "timeout"
      CoffeeTwoTimeoutFeature.new
    else
      CoffeeTwoBaseFeature.new
    end
  end
end

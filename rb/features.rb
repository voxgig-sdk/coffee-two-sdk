# CoffeeTwo SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CoffeeTwoFeatures
  def self.make_feature(name)
    case name
    when "base"
      CoffeeTwoBaseFeature.new
    when "test"
      CoffeeTwoTestFeature.new
    else
      CoffeeTwoBaseFeature.new
    end
  end
end

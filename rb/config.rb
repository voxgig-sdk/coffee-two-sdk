# CoffeeTwo SDK configuration

module CoffeeTwoConfig
  def self.make_config
    {
      "main" => {
        "name" => "CoffeeTwo",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://coffee.alexflipnote.dev",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "coffee" => {},
        },
      },
      "entity" => {
        "coffee" => {
          "fields" => [
            {
              "active" => true,
              "name" => "file",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
          ],
          "name" => "coffee",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/random.json",
                  "parts" => [
                    "random.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CoffeeTwoFeatures.make_feature(name)
  end
end

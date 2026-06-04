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
              "name" => "file",
              "req" => true,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
          ],
          "name" => "coffee",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "method" => "GET",
                  "orig" => "/random.json",
                  "parts" => [
                    "random.json",
                  ],
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "select" => {},
                  "index$" => 0,
                },
              ],
              "input" => "data",
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

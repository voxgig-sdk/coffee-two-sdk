-- CoffeeTwo SDK configuration

local function make_config()
  return {
    main = {
      name = "CoffeeTwo",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://coffee.alexflipnote.dev",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["coffee"] = {},
      },
    },
    entity = {
      ["coffee"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "file",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
        },
        ["name"] = "coffee",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/random.json",
                ["parts"] = {
                  "random.json",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

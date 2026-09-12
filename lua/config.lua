-- CoffeeTwo SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "CoffeeTwo",
      slug = "coffee-two",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
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
            ["format"] = "uri",
            ["name"] = "file",
            ["req"] = true,
            ["short"] = "URL of the random coffee image",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "coffee",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/random.json",
                ["segments"] = {
                  {
                    ["lit"] = "random.json",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "random.json",
                },
              },
            },
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

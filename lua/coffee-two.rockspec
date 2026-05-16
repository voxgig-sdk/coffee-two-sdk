package = "voxgig-sdk-coffee-two"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/coffee-two-sdk.git"
}
description = {
  summary = "CoffeeTwo SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["coffee-two_sdk"] = "coffee-two_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}

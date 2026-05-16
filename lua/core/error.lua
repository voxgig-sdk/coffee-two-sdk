-- CoffeeTwo SDK error

local CoffeeTwoError = {}
CoffeeTwoError.__index = CoffeeTwoError


function CoffeeTwoError.new(code, msg, ctx)
  local self = setmetatable({}, CoffeeTwoError)
  self.is_sdk_error = true
  self.sdk = "CoffeeTwo"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CoffeeTwoError:error()
  return self.msg
end


function CoffeeTwoError:__tostring()
  return self.msg
end


return CoffeeTwoError

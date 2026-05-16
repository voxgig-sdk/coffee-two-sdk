
import { Context } from './Context'


class CoffeeTwoError extends Error {

  isCoffeeTwoError = true

  sdk = 'CoffeeTwo'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CoffeeTwoError
}


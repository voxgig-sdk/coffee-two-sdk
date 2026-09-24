
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CoffeeTwoSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CoffeeTwoSDK.test()
    equal(testsdk instanceof CoffeeTwoSDK, true,
      'CoffeeTwoSDK.test() must return a client synchronously')
  })

})

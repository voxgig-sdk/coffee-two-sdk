
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CoffeeTwoSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CoffeeTwoSDK.test()
    equal(null !== testsdk, true)
  })

})

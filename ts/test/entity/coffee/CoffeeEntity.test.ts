

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CoffeeTwoSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CoffeeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when COFFEE_TWO_TEST_LIVE=TRUE.
  afterEach(liveDelay('COFFEE_TWO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CoffeeTwoSDK.test()
    const ent = testsdk.Coffee()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.COFFEE_TWO_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'coffee.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"file":{"a":true,"fo":"uri","h":"File","n":"file","r":true,"sh":"URL of the random coffee image","t":"`$STRING`","key$":"file","index$":0}},"name":"coffee","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /random.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/random.json","q":{},"r":{},"s":[{"lit":"random.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"coffee","name__orig":"coffee","Name":"Coffee","name_":"coffee","name-":"coffee","NAME":"COFFEE","index$":0}, {"active":true,"entity":"coffee","key$":"BasicCoffeeFlow","kind":"basic","name":"BasicCoffeeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"coffee_ref01","srcdatavar":"coffee_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-coffee_ref01"}}],"index$":0}]}, 'Coffee', {"GET /random.json":{"protocol":"http","operationId":"getRandomCoffeeJson","responses":{"200":{"description":"Successful response with random coffee image","content":{"application/json":{"schema":{"type":"object","properties":{"file":{"description":"URL of the random coffee image","example":"https://coffee.alexflipnote.dev/coffee_image.jpg","format":"uri","key$":"file","type":"string"}},"required":["file"],"index$":0},"example":{"file":"https://coffee.alexflipnote.dev/coffee_image.jpg"}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let coffee_ref01_data = Object.values(setup.data.existing.coffee)[0] as any

    // LOAD
    const coffee_ref01_ent = client.Coffee()
    const coffee_ref01_match_dt0: any = {}
    const coffee_ref01_data_dt0 = (await coffee_ref01_ent.load(coffee_ref01_match_dt0)).data()
    assert(null != coffee_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/coffee/CoffeeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CoffeeTwoSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['coffee01','coffee02','coffee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'COFFEE_TWO_TEST_COFFEE_ENTID': idmap,
    'COFFEE_TWO_TEST_LIVE': 'FALSE',
    'COFFEE_TWO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['COFFEE_TWO_TEST_COFFEE_ENTID']

  const live = 'TRUE' === env.COFFEE_TWO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['COFFEE_TWO_TEST_COFFEE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CoffeeTwoSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.COFFEE_TWO_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

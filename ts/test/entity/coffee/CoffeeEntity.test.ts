

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"uri","name":"file","req":true,"short":"URL of the random coffee image","type":"`$STRING`","index$":0}],"name":"coffee","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /random.json","json":"{\"operationId\":\"getRandomCoffeeJson\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"file\":\"https://coffee.alexflipnote.dev/coffee_image.jpg\"},\"schema\":{\"properties\":{\"file\":{\"description\":\"URL of the random coffee image\",\"example\":\"https://coffee.alexflipnote.dev/coffee_image.jpg\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"file\"],\"type\":\"object\"}}},\"description\":\"Successful response with random coffee image\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/random.json","segments":[{"lit":"random.json"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"coffee","name__orig":"coffee","Name":"Coffee","name_":"coffee","name-":"coffee","NAME":"COFFEE","index$":0}, {"active":true,"entity":"coffee","key$":"BasicCoffeeFlow","kind":"basic","name":"BasicCoffeeFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"coffee_ref01","srcdatavar":"coffee_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-coffee_ref01"}}],"index$":0}]}, 'Coffee')
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
  

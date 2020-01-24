/*
  Unit tests
*/

"use strict"

const assert = require("chai").assert
const sinon = require("sinon")

const axios = require('axios')

const uut = require('../lib/lib')

describe("#axios", () => {
  let sandbox
  beforeEach(() => (sandbox = sinon.createSandbox()))
  afterEach(() => sandbox.restore())

  describe("#tests", () => {
    it(`should throw proper error with timeout`, async () => {
      // Mock the timeout error.
      sandbox.stub(axios, 'get').throws({code: 'ECONNABORTED'})

      try {
        await uut.getData()
      } catch(err) {
        // console.log(`err: `, err)
        assert.include(err.message, 'Downstream service took too long to respond')
      }
    })

    it(`should throw proper error if service is down`, async () => {
      // Mock the connection-refused error.
      sandbox.stub(axios, 'get').throws({code: 'ECONNREFUSED'})

      try {
        await uut.getData()
      } catch(err) {
        // console.log(`err: `, err)
        assert.include(err.message, 'Could not connect to downstream service')
      }
    })
  })
})

/*
  Unit tests
*/

"use strict"

const assert = require("chai").assert
const sinon = require("sinon")

const uut = require('../lib/lib')

describe("#axios", () => {
  let sandbox
  beforeEach(() => (sandbox = sinon.createSandbox()))
  afterEach(() => sandbox.restore())

  describe("#tests", () => {
    it(`should throw an error with timeout`, async () => {
      try {
        await uut.getData()
      } catch(err) {
        console.log(`err: `, err)
      }
    })
  })
})

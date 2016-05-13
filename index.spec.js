const fs = require('fs')
const assert = require('chai').assert

describe('podj', () => {
  it('should load all files in the directory', done => {
    const example = require('./example')
    setTimeout(() => {
      assert.equals(example.test() == 'foo')
      done()
    },5000)
  })
})

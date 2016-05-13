const debug = require('debug')('podj')
const fs = require('fs')
const path = require('path')
// good for watching files
const chokidar = require('chokidar')
// good for busting node cache
const reload = require('require-reload')(require)

const peas = {}

module.exports = podj

function podj(options) {
  // load all files
  const files = fs.readdirSync(options)

  this.get = get
  this.watch = watch
}

function get(pea) {
  return peas[pea]
}

function watch() {
  const watch = chokidar.watch()
  watch.on('add', add)
  watch.on('change', () => {

  })
  watch.on('unline', () => {

  })
  watch.on('error', error => {
    console.error(error)
  })

  watch.add(`${__dirname}/*.js`)
}

function add(filePath) {
  const file = reload(filePath)
}

const debug = require('debug')('podj')
// good for watching files
const chokidar = require('chokidar')
// good for busting node cache
const reload = require('require-reload')(require)

module.exports = podj

function podj(options) {
  const watch = chokidar.watch()
  watch.on('add', add)
  watch.on('change', change)
  watch.on('unline', remove)
  watch.on('error', error => {
    console.error(error)
  })

  watch.add(`${__dirname}/*.*`)
}

function add() {

}

function change() {

}

function remove() {

}

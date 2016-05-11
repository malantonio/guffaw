var fs = require('fs')
var path = require('path')
var elementsPath = path.resolve(__dirname, '..', 'elements')
var test = require('tape')
var exclude = ['entry.js', 'factory.js', 'helpers.js', 'xml-header.js']
var els = fs.readdirSync(elementsPath)

test('elements passed an empty value return empty string', function (t) {
  t.plan(els.length - exclude.length)

  els.forEach(testElementFile)

  function testElementFile (name) {
    if (exclude.indexOf(name) > -1) return
    var el = require('../elements/' + name)
    t.equal(el(emptyVal()), '', '['+name+']')
  }
})

function emptyVal () {
  var empty = [
    '', null, undefined, false, [], {}
  ]

  return empty[Math.floor(Math.random() * empty.length)]
}

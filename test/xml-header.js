var test = require('tape')
var xml = require('../elements/xml-header')

test('defaults are passed', function (t) {
  var expect = '<?xml version="1.0" encoding="UTF-8"?>'
  t.plan(1)
  t.equal(xml(), expect)
})

test('version is passed', function (t) {
  var val = '22'
  var expect = '<?xml version="'+val+'" encoding="UTF-8"?>'
  t.plan(1)
  t.equal(xml(val), expect)
})

test('both values are passed', function (t) {
  var v = '22'
  var e = 'ASCII'
  var expect = '<?xml version="'+v+'" encoding="'+e+'"?>'
  t.plan(1)
  t.equal(xml(v, e), expect)
})

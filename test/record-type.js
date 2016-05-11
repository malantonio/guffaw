var test = require('tape')
var rt = require('../elements/record-type')

test('works with an acceptable type', function (t) {
  var type = randomType()
  var expect = '<recordType>'+type+'</recordType>'

  t.plan(1)
  t.equal(rt(type), expect)
})

test('can handle lower-case type', function (t) {
  var type = randomType()
  var loc = type.toLowerCase()
  var expect = '<recordType>'+type+'</recordType>'

  t.plan(1)
  t.equal(rt(loc), expect)
})

test('returns empty string for non-valid types', function (t) {
  var type = 'WRONG_TYPE'
  t.plan(1)
  t.equal(rt(type), '')
})

function randomType () {
  var len = rt.types.length
  return rt.types[Math.floor(Math.random() * len)]
}

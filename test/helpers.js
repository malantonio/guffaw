var test = require('tape')
var h = require('../elements/helpers')
var isEmpty = h.isEmpty
var emptyObject = h.emptyObject
var isNonNegative = h.isNonNegative

test('isEmpty helper', function (t) {
  t.ok(isEmpty({}), '{} is empty')
  t.ok(isEmpty([]), '[] is empty')
  t.ok(isEmpty(''), "'' is empty")
  t.ok(isEmpty(null), 'null is empty')
  t.ok(isEmpty(false), 'false is empty')
  t.ok(isEmpty(), 'undefined is empty')

  t.notOk(isEmpty(0), '0 is a value and not empty')
  t.end()
})

test('emptyObject helper', function (t) {
  t.plan(2)
  t.ok(emptyObject({}), '{} is empty')
  t.notOk(emptyObject({aye: 'bee'}), 'object with value isn\'t empty')
})

test('isNonNegative helper', function (t) {
  t.ok(isNonNegative(2), 'non-negative number')
  t.ok(isNonNegative('44.00', 'non-negative string number'))
  t.notOk(isNonNegative(-2), 'negative number is not')
  t.notOk(isNonNegative('-333', 'negative string number'))
  t.ok(isNonNegative(0), '0 isn\'t considered negative')
  t.end()
})

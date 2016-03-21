var test = require('tape')
var f = require('../elements/factory')

test('empty element is empty', function (t) {
  var expect = '<hi />'

  t.plan(2)
  t.equal(f('hi', {}, []), expect, 'verbose calling')
  t.equal(f('hi'), expect, 'abbreviated calling')
})

test('attributes are passed', function (t) {
  var expect = '<hi how="are" you="?" />'
  var attrs = {how: 'are', you: '?'}

  t.plan(1)
  t.equal(f('hi', attrs), expect)
})

test('children are passed', function (t) {
  var expect1 = '<hi greeting="hello">how\'s it going?</hi>'
  var expect2 = '<hi><greeting>hello!</greeting></hi>'

  t.plan(2)
  t.equal(f('hi', {greeting: 'hello'}, "how's it going?"), expect1, 'string child')
  t.equal(f('hi', {}, [f('greeting', {}, ['hello!'])]), expect2, 'element child')
})

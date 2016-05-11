var test = require('tape')
var n = require('../elements/note')
var expect = '<note type="STAFF">Hallo!</note>'

test('accepts lower-case key', function (t) {
  t.plan(1)
  t.equal(n({type: 'staff', value: 'Hallo!'}), expect)
})

test('defaults to STAFF note', function (t) {
  t.plan(1)
  t.equal(n({type: 'NOPE', value: 'Hallo!'}), expect)
})

test('allows PUBLIC notes', function (t) {
  var e = '<note type="PUBLIC">good book!</note>'

  t.plan(1)
  t.equal(n({type: 'public', value: 'good book!'}), e)
})

test('accepts string; displays STAFF note', function (t) {
  t.plan(1)
  t.equal(n('Hallo!'), expect)
})

test('accepts numbers as well', function (t) {
  t.plan(1)
  t.equal(n(123456), '<note type="STAFF">123456</note>')
})

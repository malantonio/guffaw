var test = require('tape')
var caption = require('../elements/caption')

var data = {
  enumeration: 1,
  chronology: 3,
  description: 'Description text',
  id: 123,
  sequence: '2',
  ignore: 'me!'
}

var expect = '<caption enumeration="1" chronology="3">'
           +   '<description>Description text</description>'
           +   '<id>123</id>'
           +   '<sequence>2</sequence>'
           + '</caption>'

test('parses as expected', function (t) {
  var parsed = caption(data)
  t.plan(2)

  t.equal(parsed, expect)
  t.ok(parsed.indexOf('ignore') === -1, 'keys not expected aren\'t included')
})

test('passing only enum and/or chronology results in void tag', function (t) {
  var d = {
    enumeration: '1',
    chronology: 3
  }

  var e1 = '<caption enumeration="1" chronology="3" />'
  var e2 = '<caption enumeration="1" />'
  var e3 = ''

  t.plan(2)

  t.equal(caption(d), e1, 'both attributes are passed')

  delete d['chronology']

  t.equal(caption(d), e2, 'only enum is passed')
})

test('id must be non-negative', function (t) {
  var d = {
    id: -123,
    description: data.description
  }

  var e = '<caption>'
        +   '<description>' + data.description + '</description>'
        + '</caption>'

  t.plan(1)
  t.equal(caption(d), e, 'negative ID is not passed')
})

function copy (o) {
  var out = {}
  for (var k in o) if (o.hasOwnProperty(o)) out[k] = o[k]

  return out
}

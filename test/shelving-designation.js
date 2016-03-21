var test = require('tape')
var sd = require('../elements/shelving-designation')
var data = {
  'prefix': [
    'DVD'
  ],
  'information': '791.4375',
  'itemPart': [
    'T219s'
  ],
  'suffix': [],
  'scheme': 'DEWEY_DECIMAL'
}

test('builds element ok', function (t) {
  var expect = [
    '<shelvingDesignation scheme="DEWEY_DECIMAL">',
      '<prefix>DVD</prefix>',
      '<information>791.4375</information>',
      '<itemPart>T219s</itemPart>',
    '</shelvingDesignation>',
  ].join('')

  t.plan(1)
  t.equal(sd(data), expect)
})

test('capitalizes scheme name', function (t) {
  var d = {
    scheme: 'library_of_congress',
    information: 'PN1995.9 .H6 C73 2000'
  }
  var expect = [
    '<shelvingDesignation scheme="LIBRARY_OF_CONGRESS">',
      '<information>PN1995.9 .H6 C73 2000</information>',
    '</shelvingDesignation>',
  ].join('')

  t.plan(1)
  t.equal(sd(d), expect)
})

test('works without values as arrays', function (t) {
  var data = {
    scheme: 'DEWEY_DECIMAL',
    prefix: 'DVD',
    information: '791.4372',
    itemPart: 'F5855a',
    suffix: 'WHAT A FEELING'
  }

  var expect = [
    '<shelvingDesignation scheme="DEWEY_DECIMAL">',
      '<prefix>DVD</prefix>',
      '<information>791.4372</information>',
      '<itemPart>F5855a</itemPart>',
      '<suffix>WHAT A FEELING</suffix>',
    '</shelvingDesignation>',
  ].join('')

  t.plan(1)
  t.equal(sd(data), expect)
})

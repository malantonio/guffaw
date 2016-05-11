var test = require('tape')
var crypto = require('crypto')

var names = [
  'bib',
  'copy-number',
  'institution',
  'previous-shelving-location',
  'shelving-location',
  'temporary-location',
]

var namesLength = names.length

var els = {}

for (var i = 0; i < names.length; i++) {
  els[names[i]] = require('../elements/' + names[i])
}

test('elements build ok', function (t) {
  t.plan(namesLength)
  names.forEach(function (name) {
    var el = els[name]
    var n = camelize(name)
    var value = crypto.randomBytes(16).toString('hex')

    var expectEl = '<'+n+'>'+value+'</'+n+'>'

    t.equal(el(value), expectEl, '['+name+']')
  })
})

function camelize (n) {
  return n.split('-').map(function (el, idx) {
    if (idx === 0) return el
    return el.substring(0,1).toUpperCase() + el.substring(1)
  }).join('')
}

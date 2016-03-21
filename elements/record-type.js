var f = require('./factory')
var types = [
  'SINGLE_PART',
  'MULTI_PART',
  'SERIAL',
  'UNKNOWN',
]

module.exports = function recordType (t) {
  if (!t) return ''

  t = t.toUpperCase()
  if (types.indexOf(t) === -1) return ''

  return f('recordType', {}, t)
}

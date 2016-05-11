var f = require('./factory')
var isEmpty = require('./helpers').isEmpty

var types = [
  'SINGLE_PART',
  'MULTI_PART',
  'SERIAL',
  'UNKNOWN',
]

module.exports = function recordType (t) {
  if (isEmpty(t)) return ''

  t = t.toUpperCase()
  if (types.indexOf(t) === -1) return ''

  return f('recordType', {}, t)
}

module.exports.types = types

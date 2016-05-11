var f = require('./factory')
var isEmpty = require('./helpers').isEmpty
var validNotes = ['PUBLIC', 'STAFF']

module.exports = function note (n) {
  if (isEmpty(n)) return ''

  if (typeof n === 'string' || typeof n === 'number')
    n = { type: 'STAFF', value: n }

  var type = n.type.toUpperCase()
  if (validNotes.indexOf(type) === -1) type = 'STAFF'
  return f('note', {type: type}, n.value)
}

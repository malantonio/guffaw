var f = require('./factory')
var validNotes = ['PUBLIC', 'STAFF']

module.exports = function note (n) {
  if (!n) return ''
  if (typeof n === 'string') n = {type: 'STAFF', value: n}

  var type = n.type.toUpperCase()
  if (validNotes.indexOf(type) === -1) type = 'STAFF'
  return f('note', {type: type}, n.value)
}

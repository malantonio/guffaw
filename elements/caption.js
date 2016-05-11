var f = require('./factory')
var h = require('./helpers')
var isNonNegative = h.isNonNegative
var notEmpty = h.filterNotEmpty
var isEmpty = h.isEmpty

module.exports = function caption (c) {
  if (isEmpty(c)) return ''

  var attrs = {}
  if (c.enumeration) attrs['enumeration'] = c.enumeration
  if (c.chronology) attrs['chronology'] = c.chronology

  return f('caption', attrs, [
    (c.description ? f('description', {}, c.description) : ''),
    (c.id && isNonNegative(c.id) ? f('id', {}, c.id) : ''),
    (c.sequence && isNonNegative(c.sequence) ? f('sequence', {}, c.sequence) : ''),
  ].filter(notEmpty))
}

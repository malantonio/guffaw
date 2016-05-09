var f = require('./factory')
var nonNegativeInteger = /^[0-9]+$/

module.exports = function caption (c) {
  if (!c) return ''

  var attrs = {}
  if (c.enumeration) attrs['enumeration'] = c.enumeration
  if (c.chronology) attrs['chronology'] = c.chronology

  return f('caption', attrs, [
    (c.description ? f('description', {}, c.description) : ''),
    (c.id && nonNegativeInteger.test(c.id) ? f('id', {}, c.id) : ''),
    (c.sequence && nonNegativeInteger.test(c.sequence) ? f('sequence', {}, c.sequence) : ''),
  ])
}

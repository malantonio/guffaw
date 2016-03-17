var f = require('./factory')

module.exports = function shelvingDesignation (sd) {
  if (!sd) return ''

  var prefix = (sd.prefix || []).map(p => f('prefix', {}, p)).join('')
  var itemPart = (sd.itemPart || []).map(i => f('itemPart', {}, i)).join('')
  var suffix = (sd.suffix || []).map(s => f('suffix', {}, s)).join('')

  return f('shelvingDesignation', {scheme: sd.scheme}, [
    prefix,
    (sd.information ? f('information', {}, sd.information) : ''),
    itemPart,
    suffix
  ])
}

var f = require('./factory')
module.exports = function shelvingDesignation (sd) {
  if (!sd) return ''

  var prefix = (sd.prefix || []).map(function (p) {
    return f('prefix', {}, p)
  }).join('')

  var itemPart = (sd.itemPart || []).map(function(i) {
    return f('itemPart', {}, i)
  }).join('')

  var suffix = (sd.suffix || []).map(function (s) {
    return f('suffix', {}, s)
  }).join('')

  return f('shelvingDesignation', {scheme: sd.scheme}, [
    prefix,
    (sd.information ? f('information', {}, sd.information) : ''),
    itemPart,
    suffix
  ])
}

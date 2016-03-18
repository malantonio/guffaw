var f = require('./factory')
var pieceDesignation = require('./piece-designation')
var note = require('./note')
var cost = require('./cost')
var temporaryLocation = require('./temporary-location')
var caption = require('./caption')

module.exports = function holding (h) {
  if (!h) return ''

  var category = (h.category || 'BASIC').toUpperCase()

  return f('holding', {category: category}, [
    (h.pieceDesignation || []).map(pieceDesignation).join(''),
    (h.note || []).map(note).join(''),
    (h.useRestriction || []).map(function (u) { return f('useRestriction', {}, u)}),
    cost(h.cost),
    temporaryLocation(h.temporaryLocation),
    caption(h.caption),
  ])
}

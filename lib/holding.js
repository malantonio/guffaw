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
    (h.useRestriction ? f('useRestriction', {}, h.useRestriction) : ''),
    cost(h.cost),
    temporaryLocation(h.temporaryLocation),
    caption(h.caption),
  ])
}

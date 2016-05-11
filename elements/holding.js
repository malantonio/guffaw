var f = require('./factory')
var pieceDesignation = require('./piece-designation')
var note = require('./note')
var cost = require('./cost')
var tempLocation = require('./temporary-location')
var caption = require('./caption')

var h = require('./helpers')
var emptyObject = h.emptyObject
var notEmpty = h.notEmpty

module.exports = function holding (h) {
  if (!h) return ''
  if (typeof h !== 'object' || emptyObject(h)) return ''

  var category = (h.category || 'BASIC').toUpperCase()

  return f('holding', {category: category}, [
    (h.pieceDesignation || []).map(pieceDesignation).join(''),
    (h.note || []).map(note).join(''),
    (h.useRestriction || []).map(function (u) { return f('useRestriction', {}, u)}).join(''),
    (h.cost || []).map(cost).join(''),
    (h.temporaryLocation || []).map(tempLocation).join(''),
    caption(h.caption),
  ].filter(notEmpty))
}

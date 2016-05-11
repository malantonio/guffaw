var empty = require('./helpers').emptyObject

module.exports = function elementFactory (tag, attr, children) {
  var openTag = tag
  if (!empty(attr)) {
    for (var a in attr) {
      openTag += ' '+a+'="'+attr[a]+'"'
    }
  }

  if (children === null || children === undefined || children.length === 0)
    return '<'+openTag+' />'

  return '<'+openTag+'>'+(Array.isArray(children) ? children.join('') : children)+'</'+tag+'>'
}

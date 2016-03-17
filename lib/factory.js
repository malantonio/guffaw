module.exports = function elementFactory (tag, attr, children) {
  var openTag = tag
  if (!empty(attr)) {
    for (var a in attr) {
      openTag += ` ${a}="${attr[a]}"`
    }
  }

  if (children === null || children === undefined || children.length === 0)
    return `<${openTag}/>`

  return `<${openTag}>${Array.isArray(children) ? children.join('') : children}</${tag}>`
}

function empty (o) {
  for (var k in o) {
    if (o.hasOwnProperty(k)) {
      return false
    }
  }

  return true
}

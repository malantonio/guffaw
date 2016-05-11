module.exports = {
  emptyObject: emptyObject,
  filterNotEmpty: filterNotEmpty,
  isEmpty: isEmpty,
  isNonNegative: isNonNegative,
}

function emptyObject (o) {
  for (var k in o)
    if (o.hasOwnProperty(k))
      return false

  return true
}

function filterNotEmpty (i) {
  return !isEmpty(i)
}

function isNonNegative (n) {
  if (typeof n === 'number') return n > -1
  return /^[0-9]+/.test(n)
}

function isEmpty (t) {
  if (t === undefined) return true
  if (t === '' || t === null || t === false) return true
  if (Array.isArray(t) && t.length === 0) return true
  if (typeof t === 'object' && emptyObject(t)) return true
  if (typeof t === 'number' && t === 0) return false
  return false
}

var factory = require('./factory')

module.exports = function lastUpdateDate (d) {
  if (!d) return ''

  if (typeof d === 'number') {
    var date = new Date(d)
  }

  if (isNaN(date)) return ''

  return factory('lastUpdateDate', {}, date.toISOString())
}

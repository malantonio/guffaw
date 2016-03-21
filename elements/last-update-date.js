var factory = require('./factory')
var testreg = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}-\d{2}:\d{2}$/

module.exports = function lastUpdateDate (d) {
  var date
  if (!d) return ''

  if (testreg.test(d)) {
    date = d
  } else {
    var d8 = new Date((typeof d === 'number' ? d : Date.parse(d)))
    if (isNaN(d8)) return ''
    date = getDate(d8) + 'T' + getTime(d8)
         + '.' + d8.getMilliseconds()
         + '-' + zeroPad(d8.getTimezoneOffset() / 60) + ':00'
  }

  return factory('lastUpdateDate', {}, date)
}

function zeroPad (n) {
  return n < 10 ? '0' + n : n
}

function getDate (_d) {
  return _d.getFullYear()
         + '-'
         + zeroPad(_d.getMonth() + 1)
         + '-' + zeroPad(_d.getDate())
}

function getTime (_d) {
  return zeroPad(_d.getHours())
         + ':'
         + zeroPad(_d.getMinutes())
         + ':'
         + zeroPad(_d.getSeconds())
}

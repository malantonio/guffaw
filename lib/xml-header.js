module.exports = function xmlHeader (version, encoding) {
  if (!version) version = '1.0'
  if (!encoding) encoding = 'UTF-8'

  return `<?xml version="${version}" encoding="${encoding}"?>`
}

module.exports = async function (request) {
  const authInfo = (request.headers.authorization || '').split(' ')[1]
  const decoded = Buffer.from(authInfo, 'base64').toString()
  const [username, password] = decoded.split(':')
  const siteId = request.site ? request.site.id : null
  return await this.ndutGrafana.helper.getUserByUsernamePassword(username, password, siteId)
}

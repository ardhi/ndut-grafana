module.exports = async function (username, password, siteId) {
  const { _, getNdutConfig } = this.ndut.helper
  const config = getNdutConfig('ndutGrafana')
  const opts = {
    method: 'GET',
    auth: {
      username,
      password
    }
  }
  try {
    const user = await this.ndutExtra.helper.fetchUrl(`${config.url}/api/user`, opts)
    user.username = username
    user.password = password
    return user
  } catch (err) {
    const { status, data } = err.response
    throw new this.Boom.Boom(data.message, { statusCode: status })
  }
}

const path = require('path')

module.exports = {
  paths: (paths) => {
    // eslint-disable-next-line no-param-reassign
    paths.appIndexJs = path.resolve(__dirname, 'src/frontend/index.tsx')
    // eslint-disable-next-line no-param-reassign
    paths.appSrc = path.resolve(__dirname, 'src/frontend')
    return paths
  }
}

const { resolve } = require('path')

module.exports = (dirname) => (path) => {
  resolve(dirname, path)
}

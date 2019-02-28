const path = require('path')

const PATH_CMD = path.resolve(__dirname, '../')
const PATH_CWD = process.cwd()

function cmd (...rest) {
  rest.unshift(PATH_CMD)
  return path.resolve.apply(path, rest)
}

function cwd (...rest) {
  rest.unshift(PATH_CWD)
  return path.resolve.apply(path, rest)
}

module.exports = {
  PATH_CMD,
  PATH_CWD,
  cmd,
  cwd
}

// yarn add -D gulp-json-minify
const { src, dest, series } = require('gulp')
const env = require('./env')

function files () {
  return src('assets/files/*.*')
    .pipe(dest(`${env.outputFolder}/files`))
}

module.exports = {
  other: series(files),
}

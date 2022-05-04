
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
//   presets: ["@vue/app"],
//   plugins: [
//     [
//       "import",
//       { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
//     ]
//   ]
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}

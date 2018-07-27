// Promise API
const Shell = require("child_process");

// Callback API
exports.createPages = (_, pluginOptions, cb) => {
  // do Async work
  Shell.execSync("rm -rf public/static/img")
  Shell.execSync("mkdir public/static/img")
  Shell.execSync("cp -r src/assets/* public/static/img")
  cb()
}
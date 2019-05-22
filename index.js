var ejs = require("ejs");

module.exports = function(source) {
  this.cacheable && this.cacheable();
  // console.log('my-loader....');
  var opts = Object.assign(
    { strict: true, client: true, _with: false },
    this.options || {}
  );
  const code = ejs.compile(source, opts);
  const codeStr = code.toString();
  // console.log(codeStr);
  return "module.exports = " + codeStr;
};

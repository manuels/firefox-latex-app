var is_browser = (typeof(require) === "undefined");

var nodejs_runScriptFile = function(name) {
  this['Module'] = Module;
  var fs = require('fs');

  var filename = process['env'][name];
  var script = fs.readFileSync(filename);
  return eval(script);
};

if(!is_browser)
  nodejs_runScriptFile('pdftex_post');


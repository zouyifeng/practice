const Complier = require("./lib/Compiler");
const options = require("./webpack.conf");
new Complier(options).run();
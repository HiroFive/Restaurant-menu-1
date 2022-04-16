"use strict";
exports.__esModule = true;
exports.server = void 0;
var server_1 = require("./server");
var enums_1 = require("./common/enums");
var server = server_1.app.listen(enums_1.ENV.APP.SERVER_PORT, function () {
    console.log("Listening to connections on port \u2014 ".concat(enums_1.ENV.APP.SERVER_PORT));
});
exports.server = server;

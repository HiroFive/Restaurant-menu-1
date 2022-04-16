"use strict";
exports.__esModule = true;
exports.ENV = void 0;
var _a = process.env, NODE_ENV = _a.NODE_ENV, APP_SERVER_PORT = _a.APP_SERVER_PORT;
var ENV = {
    APP: {
        NODE_ENV: NODE_ENV,
        SERVER_PORT: APP_SERVER_PORT !== null && APP_SERVER_PORT !== void 0 ? APP_SERVER_PORT : 3001
    }
};
exports.ENV = ENV;

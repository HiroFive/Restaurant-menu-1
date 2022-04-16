"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.app = void 0;
var express_1 = __importStar(require("express"));
var enums_1 = require("./common/enums");
var api_1 = require("./api/api");
var connection_1 = require("./data/db/connection");
var middleware_1 = require("./middleware");
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var docs_1 = __importDefault(require("../docs"));
var cors_1 = __importDefault(require("cors"));
// import 
var app = (0, express_1["default"])();
exports.app = app;
connection_1.sequelize
    .authenticate()
    .then(function () {
    return console.log('Database connection was successful');
})["catch"](function (_a) {
    var message = _a.message, stack = _a.stack;
    return console.error(message, stack);
});
app.use((0, cors_1["default"])());
app.use(middleware_1.logRequest);
// app.use(validationMiddleware);
app.use((0, express_1.json)({ limit: '670kb' }));
app.use((0, express_1.urlencoded)({ extended: true }));
(0, api_1.initApi)(app);
var docs = (0, swagger_jsdoc_1["default"])(docs_1["default"]);
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'DELETE, PATCH, GET, POST');
    next();
});
(0, api_1.initApi)(app);
app.use(enums_1.AppConfig.DOCS, swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(docs));

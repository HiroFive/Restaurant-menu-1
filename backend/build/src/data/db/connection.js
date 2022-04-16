"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
var db_config_1 = __importDefault(require("../../../config/db.config"));
var db = process.env.NODE_ENV === 'test' ? db_config_1["default"].test : db_config_1["default"].development;
var sequelize = new sequelize_1.Sequelize(__assign(__assign({}, db), { port: Number(db.port), dialect: db.dialect, logging: false }));
exports.sequelize = sequelize;

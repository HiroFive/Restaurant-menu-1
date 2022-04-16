"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var _a = process.env, DB_NAME = _a.DB_NAME, DB_USERNAME = _a.DB_USERNAME, DB_PASSWORD = _a.DB_PASSWORD, DB_HOST = _a.DB_HOST, DB_PORT = _a.DB_PORT, DB_DIALECT = _a.DB_DIALECT, DB_TEST_NAME = _a.DB_TEST_NAME, DB_TEST_USERNAME = _a.DB_TEST_USERNAME, DB_TEST_PASSWORD = _a.DB_TEST_PASSWORD, DB_TEST_HOST = _a.DB_TEST_HOST, DB_TEST_PORT = _a.DB_TEST_PORT;
exports["default"] = {
    development: {
        database: DB_NAME,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT,
        dialect: DB_DIALECT,
        logging: false
    },
    test: {
        database: DB_TEST_NAME,
        username: DB_TEST_USERNAME,
        password: DB_TEST_PASSWORD,
        host: DB_TEST_HOST,
        port: DB_TEST_PORT,
        dialect: DB_DIALECT,
        logging: false
    },
    production: {
        database: DB_NAME,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT,
        dialect: DB_DIALECT,
        logging: false
    }
};

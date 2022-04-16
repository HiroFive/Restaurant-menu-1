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
exports.__esModule = true;
exports.generateFilterByQueryParams = exports.checkIsFound = void 0;
var enums_1 = require("../../common/enums");
var sequelize_1 = require("sequelize");
var checkIsFound = function (res) {
    return res === null || res.length === 0 ? enums_1.HttpCode.NOT_FOUND : enums_1.HttpCode.OK;
};
exports.checkIsFound = checkIsFound;
var generateFilterByQueryParams = function (params) {
    var _a, _b, _c, _d;
    var filter = {};
    for (var param in params) {
        if (param.includes('name') ||
            param.includes('title') ||
            param.includes('description')) {
            filter = __assign(__assign({}, filter), (_a = {}, _a[param] = (_b = {}, _b[sequelize_1.Op.iLike] = "%".concat(params[param], "%"), _b), _a));
        }
        else if (params[param] === 'null') {
            filter = __assign(__assign({}, filter), (_c = {}, _c[param] = null, _c));
        }
        else {
            filter = __assign(__assign({}, filter), (_d = {}, _d[param] = params[param], _d));
        }
    }
    return filter;
};
exports.generateFilterByQueryParams = generateFilterByQueryParams;

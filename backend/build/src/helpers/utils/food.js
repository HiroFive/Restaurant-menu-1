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
exports.getFoodParams = exports.foodAttribute = void 0;
var connection_1 = require("../../data/db/connection");
exports.foodAttribute = [
    'id',
    'name',
    'description',
    'hidden',
    'categoryId',
    'image',
    'portions',
];
var getFoodParams = function (type, additionalParams) {
    if (type === void 0) { type = ''; }
    if (additionalParams === void 0) { additionalParams = {}; }
    var defaultParams = {
        attributes: exports.foodAttribute,
        include: [
            {
                model: connection_1.sequelize.models.category,
                as: 'category',
                attributes: ['id', 'title']
            },
        ]
    };
    delete additionalParams['role'];
    switch (type) {
        case 'filter':
            return __assign(__assign({}, defaultParams), { where: __assign({}, additionalParams) });
        default:
            return defaultParams;
    }
};
exports.getFoodParams = getFoodParams;

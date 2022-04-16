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
exports.getCategoryParams = void 0;
var connection_1 = require("../../data/db/connection");
var _1 = require("./");
var sequelize_1 = require("sequelize");
var defaultParamsAttributes = {
    attributes: ['id', 'title', 'hidden', 'parentId']
};
var categoryWithFood = __assign(__assign({}, defaultParamsAttributes), { order: [
        [connection_1.sequelize.models.category, 'created_at', 'ASC'],
        [
            { model: connection_1.sequelize.models.category, as: 'childrenCategory' },
            { model: connection_1.sequelize.models.food, as: 'food' },
            'created_at',
            'ASC',
        ],
    ], include: [
        {
            model: connection_1.sequelize.models.food,
            attributes: _1.foodAttribute,
            as: 'food'
        },
        __assign(__assign({ model: connection_1.sequelize.models.category, as: 'childrenCategory' }, defaultParamsAttributes), { include: [
                {
                    model: connection_1.sequelize.models.food,
                    attributes: _1.foodAttribute,
                    as: 'food'
                },
            ] }),
    ] });
var getParamsByRole = function (role, additionalParams) {
    var _a;
    var paramsByRole = {
        menuCategory: __assign(__assign({}, defaultParamsAttributes), { order: [['created_at', 'ASC']], where: { parentId: null } }),
        getByWithFood: __assign(__assign({}, categoryWithFood), { where: __assign(__assign({}, additionalParams), { parentId: null }) })
    };
    if (role === 'user') {
        paramsByRole.menuCategory.where.hidden = false;
        paramsByRole.getByWithFood.where.hidden = false;
        paramsByRole.getByWithFood.where['$childrenCategory.food.hidden$'] = (_a = {},
            _a[sequelize_1.Op.not] = true,
            _a);
    }
    return paramsByRole;
};
var getCategoryParams = function (type, additionalParams, role) {
    var _a;
    if (type === void 0) { type = ''; }
    if (additionalParams === void 0) { additionalParams = {}; }
    if (role === void 0) { role = 'user'; }
    delete additionalParams['role'];
    var paramsByRole = getParamsByRole(role, additionalParams);
    switch (type) {
        case 'menu category':
            return paramsByRole.menuCategory;
        case 'getByWithFood':
            return paramsByRole.getByWithFood;
        case 'children':
            return __assign(__assign({}, defaultParamsAttributes), { where: { parentId: (_a = {}, _a[sequelize_1.Op.not] = null, _a) } });
        case 'getBy':
            return __assign(__assign({}, defaultParamsAttributes), { where: additionalParams });
        default:
            return defaultParamsAttributes;
    }
};
exports.getCategoryParams = getCategoryParams;

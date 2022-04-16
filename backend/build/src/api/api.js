"use strict";
exports.__esModule = true;
exports.initApi = void 0;
var express_1 = require("express");
var enums_1 = require("../common/enums");
var category_api_1 = require("./category/category.api");
var food_api_1 = require("./food/food.api");
var info_api_1 = require("./info/info.api");
var apis = [category_api_1.initCategoryApi, food_api_1.initFoodApi, info_api_1.initInfoApi];
var initApi = function (app) {
    var apiRouter = (0, express_1.Router)();
    app.use(enums_1.AppConfig.API_PREFIX, apiRouter);
    apis.forEach(function (api) { return api(apiRouter); });
    return apiRouter;
};
exports.initApi = initApi;

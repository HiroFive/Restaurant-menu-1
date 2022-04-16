"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.InfoModel = exports.FoodModel = exports.CategoryModel = void 0;
var connection_1 = require("../db/connection");
var category_model_1 = __importDefault(require("./category.model"));
var food_model_1 = __importDefault(require("./food.model"));
var info_model_1 = __importDefault(require("./info.model"));
var CategoryModel = (0, category_model_1["default"])(connection_1.sequelize);
exports.CategoryModel = CategoryModel;
var FoodModel = (0, food_model_1["default"])(connection_1.sequelize);
exports.FoodModel = FoodModel;
var InfoModel = (0, info_model_1["default"])(connection_1.sequelize);
exports.InfoModel = InfoModel;
CategoryModel.hasMany(FoodModel, {
    as: 'food'
});
CategoryModel.hasMany(CategoryModel, {
    as: 'childrenCategory',
    foreignKey: 'parent_id'
});
CategoryModel.belongsTo(connection_1.sequelize.models.category, {
    foreignKey: 'parent_id'
});
FoodModel.belongsTo(connection_1.sequelize.models.category);

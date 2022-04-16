"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var enums_1 = require("../../common/enums");
var createCategoryModel = function (orm) {
    return orm.define(enums_1.ModelName.CATEGORY, {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        title: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING,
            unique: true
        },
        hidden: {
            allowNull: false,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        parentId: {
            allowNull: true,
            type: sequelize_1.DataTypes.STRING,
            defaultValue: null
        },
        createdAt: sequelize_1.DataTypes.DATE,
        updatedAt: sequelize_1.DataTypes.DATE
    }, {
        tableName: 'category',
        underscored: true
    });
};
exports["default"] = createCategoryModel;

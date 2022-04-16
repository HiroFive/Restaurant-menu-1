"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var enums_1 = require("../../common/enums");
var createFoodModel = function (orm) {
    return orm.define(enums_1.ModelName.FOOD, {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING,
            unique: true
        },
        description: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING
        },
        hidden: {
            allowNull: false,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        categoryId: {
            allowNull: true,
            type: sequelize_1.DataTypes.STRING
        },
        image: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING
        },
        portions: {
            allowNull: false,
            type: sequelize_1.DataTypes.JSONB
        },
        createdAt: sequelize_1.DataTypes.DATE,
        updatedAt: sequelize_1.DataTypes.DATE
    }, {
        tableName: 'food',
        underscored: true
    });
};
exports["default"] = createFoodModel;

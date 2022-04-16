"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var enums_1 = require("../../common/enums");
var createInfoModel = function (orm) {
    return orm.define(enums_1.ModelName.INFO, {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        address: {
            allowNull: true,
            type: sequelize_1.DataTypes.STRING
        },
        contacts: {
            allowNull: true,
            type: sequelize_1.DataTypes.STRING
        },
        wifiPassword: {
            allowNull: true,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        createdAt: sequelize_1.DataTypes.DATE,
        updatedAt: sequelize_1.DataTypes.DATE
    }, {
        tableName: 'info',
        underscored: true
    });
};
exports["default"] = createInfoModel;

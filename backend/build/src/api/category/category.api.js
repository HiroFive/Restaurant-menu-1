"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.initCategoryApi = void 0;
var express_1 = require("express");
var enums_1 = require("../../common/enums");
var services_1 = require("../../services");
var helpers_1 = require("../../helpers");
var middleware_1 = require("../../middleware");
var initCategoryApi = function (apiRouter) {
    var categoryRouter = (0, express_1.Router)();
    apiRouter.use(enums_1.ApiPath.CATEGORY, categoryRouter);
    categoryRouter.get(enums_1.CategoryApiPath.ROOT, function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var category, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, services_1.categoryService.getAllCategoryByFilter(_req.query)];
                case 1:
                    category = _a.sent();
                    res.status((0, helpers_1.checkIsFound)(category)).json(category);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    res
                        .status(enums_1.HttpCode.INTERNAL_SERVER_ERROR)
                        .json({ message: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    categoryRouter.get(enums_1.CategoryApiPath.FORMENU, function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var category, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, services_1.categoryService.getCategoryForMenu(_req.query)];
                case 1:
                    category = _a.sent();
                    res.status((0, helpers_1.checkIsFound)(category)).json(category);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res
                        .status(enums_1.HttpCode.INTERNAL_SERVER_ERROR)
                        .json({ message: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    categoryRouter.get(enums_1.CategoryApiPath.CHILDREN, function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var category, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, services_1.categoryService.getCategoryChildren()];
                case 1:
                    category = _a.sent();
                    res.status((0, helpers_1.checkIsFound)(category)).json(category);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res
                        .status(enums_1.HttpCode.INTERNAL_SERVER_ERROR)
                        .json({ message: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    categoryRouter.get(enums_1.CategoryApiPath.$ID, function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var category, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, services_1.categoryService.getCategoryById(_req.params.id)];
                case 1:
                    category = _a.sent();
                    res.status((0, helpers_1.checkIsFound)(category)).json(category);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    res
                        .status(enums_1.HttpCode.INTERNAL_SERVER_ERROR)
                        .json({ message: error_4.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    categoryRouter.post(enums_1.CategoryApiPath.ROOT, middleware_1.validationMiddleware, function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var category, err_1, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, services_1.categoryService.createNewCategory(_req.body)];
                case 1:
                    category = _a.sent();
                    res.status(enums_1.HttpCode.OK).json(category);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    error = err_1.errors[0];
                    console.log(error);
                    res.status(enums_1.HttpCode.BAD_REQUEST).json({ message: error.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    categoryRouter.patch(enums_1.CategoryApiPath.$ID, middleware_1.validationMiddleware, function (_req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var category, err_2, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, services_1.categoryService.updateCategory(_req.params.id, _req.body)];
                case 1:
                    category = _a.sent();
                    res.status(enums_1.HttpCode.OK).json(category);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    error = err_2.errors[0];
                    res.status(enums_1.HttpCode.BAD_REQUEST).json({ message: error.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    categoryRouter["delete"](enums_1.CategoryApiPath.$ID, function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var err_3, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, services_1.categoryService.deleteCategory(_req.params.id)];
                case 1:
                    _a.sent();
                    res.status(enums_1.HttpCode.NO_CONTENT).json('Success');
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    error = err_3.errors[0];
                    res.status(enums_1.HttpCode.BAD_REQUEST).json({ message: error.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    return categoryRouter;
};
exports.initCategoryApi = initCategoryApi;

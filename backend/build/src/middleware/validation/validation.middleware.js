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
exports.validationMiddleware = void 0;
var schemas_1 = require("../../common/schemas");
var enums_1 = require("../../common/enums");
var validationErrorStatus = function (error) {
    switch (error.type) {
        case 'noUnknown':
            return enums_1.HttpCode.UNPROCESSABLE_ENTITY;
        default:
            return enums_1.HttpCode.BAD_REQUEST;
    }
};
var validationMiddleware = function (_req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var pathAndMethod, validParams, _a, _b, error_1, _c, error_2, _d, error_3, _e, error_4, _f, error_5;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                pathAndMethod = "path=".concat(_req.originalUrl, "/").concat(_req.id === undefined ? '' : _req.id, " method=").concat(_req.method);
                validParams = {
                    strict: true,
                    abortEarly: true
                };
                _a = pathAndMethod;
                switch (_a) {
                    case 'path=/api/info/ method=PATCH': return [3 /*break*/, 1];
                    case "path=/api/category/".concat(_req.params.id, "/ method=PATCH"): return [3 /*break*/, 5];
                    case 'path=/api/category/ method=POST': return [3 /*break*/, 9];
                    case "path=/api/food/".concat(_req.params.id, "/ method=PATCH"): return [3 /*break*/, 13];
                    case 'path=/api/food/ method=POST': return [3 /*break*/, 17];
                }
                return [3 /*break*/, 21];
            case 1:
                _g.trys.push([1, 3, , 4]);
                _b = _req;
                return [4 /*yield*/, schemas_1.infoSchema.validate(_req.body, validParams)];
            case 2:
                _b.body = _g.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _g.sent();
                return [2 /*return*/, res
                        .status(validationErrorStatus(error_1))
                        .json({ message: error_1.errors })];
            case 4: return [3 /*break*/, 22];
            case 5:
                _g.trys.push([5, 7, , 8]);
                _c = _req;
                return [4 /*yield*/, schemas_1.categoryPUTSchema.validate(_req.body, validParams)];
            case 6:
                _c.body = _g.sent();
                return [3 /*break*/, 8];
            case 7:
                error_2 = _g.sent();
                return [2 /*return*/, res
                        .status(validationErrorStatus(error_2))
                        .json({ message: error_2.errors })];
            case 8: return [3 /*break*/, 22];
            case 9:
                _g.trys.push([9, 11, , 12]);
                _d = _req;
                return [4 /*yield*/, schemas_1.categorySchema.validate(_req.body, validParams)];
            case 10:
                _d.body = _g.sent();
                return [3 /*break*/, 12];
            case 11:
                error_3 = _g.sent();
                return [2 /*return*/, res
                        .status(validationErrorStatus(error_3))
                        .json({ message: error_3.errors })];
            case 12: return [3 /*break*/, 22];
            case 13:
                _g.trys.push([13, 15, , 16]);
                _e = _req;
                return [4 /*yield*/, schemas_1.foodPUTSchema.validate(JSON.parse(_req.body.data), validParams)];
            case 14:
                _e.body = _g.sent();
                return [3 /*break*/, 16];
            case 15:
                error_4 = _g.sent();
                return [2 /*return*/, res
                        .status(validationErrorStatus(error_4))
                        .json({ message: error_4.errors })];
            case 16: return [3 /*break*/, 22];
            case 17:
                _g.trys.push([17, 19, , 20]);
                _f = _req;
                return [4 /*yield*/, schemas_1.foodSchema.validate(JSON.parse(_req.body.data), validParams)];
            case 18:
                _f.body = _g.sent();
                return [3 /*break*/, 20];
            case 19:
                error_5 = _g.sent();
                return [2 /*return*/, res
                        .status(validationErrorStatus(error_5))
                        .json({ message: error_5.errors })];
            case 20: return [3 /*break*/, 22];
            case 21: return [3 /*break*/, 22];
            case 22:
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.validationMiddleware = validationMiddleware;

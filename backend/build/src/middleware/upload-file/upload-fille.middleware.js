"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.multerUploadFile = void 0;
var multer_1 = __importDefault(require("multer"));
var multerUploadFile = function () {
    var diskStorage = multer_1["default"].diskStorage({
        filename: function (req, file, cb) {
            var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            var fileFormat = file.originalname.split('.');
            cb(null, "".concat(file.fieldname, "-").concat(uniqueSuffix, ".").concat(fileFormat[fileFormat.length - 1]));
        }
    });
    return (0, multer_1["default"])({ storage: diskStorage });
};
exports.multerUploadFile = multerUploadFile;

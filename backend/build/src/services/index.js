"use strict";
exports.__esModule = true;
exports.infoService = exports.uploadImageService = exports.foodService = exports.categoryService = void 0;
var category_service_1 = require("./category-service/category.service");
var food_service_1 = require("./food-service/food.service");
var upload_image_service_1 = require("./upload-image-service/upload-image.service");
var info_service_1 = require("./info-service/info.service");
var categoryService = new category_service_1.CategoryService();
exports.categoryService = categoryService;
var foodService = new food_service_1.FoodService();
exports.foodService = foodService;
var uploadImageService = new upload_image_service_1.UploadImageService();
exports.uploadImageService = uploadImageService;
var infoService = new info_service_1.InfoService();
exports.infoService = infoService;

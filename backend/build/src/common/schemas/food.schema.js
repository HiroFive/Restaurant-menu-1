"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.foodPUTSchema = exports.foodSchema = void 0;
var yup = __importStar(require("yup"));
exports.foodSchema = yup
    .object()
    .shape({
    name: yup.string().required(),
    description: yup.string().required(),
    hidden: yup.boolean().required(),
    categoryId: yup.string().required(),
    portions: yup
        .array()
        .of(yup
        .object()
        .shape({
        price: yup.number().required(),
        weight: yup.number().required()
    })
        .noUnknown())
        .required()
})
    .noUnknown();
exports.foodPUTSchema = yup
    .object()
    .shape({
    name: yup.string().when(['description', 'hidden', 'categoryId', 'portions'], {
        is: undefined,
        then: yup.string().required('Body must have one value')
    }),
    description: yup.string(),
    hidden: yup.boolean(),
    categoryId: yup.string(),
    image: yup.string(),
    portions: yup.array().of(yup
        .object()
        .shape({
        price: yup.number(),
        weight: yup.number()
    })
        .noUnknown())
})
    .noUnknown();

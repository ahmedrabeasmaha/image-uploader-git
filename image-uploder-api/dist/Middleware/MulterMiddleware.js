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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const randombytes_1 = __importDefault(require("randombytes"));
class MulterMiddleware {
    constructor() {
    }
    multerMiddleware() {
        return multer_1.default.diskStorage({
            destination: `public/images`,
            filename: function (req, file, cb) {
                return __awaiter(this, void 0, void 0, function* () {
                    const extension = file.originalname.split('.');
                    const name = (0, randombytes_1.default)(64).readBigUint64BE() + "." + extension[extension.length - 1];
                    req.filename = name;
                    cb(null, name);
                });
            }
        });
    }
    inject() {
        return (0, multer_1.default)({ storage: this.multerMiddleware() }).any();
    }
}
exports.MulterMiddleware = MulterMiddleware;

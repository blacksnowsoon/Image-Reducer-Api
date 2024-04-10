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
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const reduce = express_1.default.Router();
reduce.post('/reduce', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // get the width and height from the query
        const { width, height } = {
            width: req.query.width,
            height: req.query.height,
        };
        const uploadedImage = (_a = req.body) === null || _a === void 0 ? void 0 : _a.image;
        if (!uploadedImage || !width || !height) {
            return res.status(400).send('no image was uploaded or width or height was not provided');
        }
        const strippedImage = uploadedImage.replace(/^data:image\/\w+;base64,/, '');
        const buffred = Buffer.from(strippedImage, 'base64');
        const file = (0, sharp_1.default)(buffred, {
            failOnError: false,
        }).resize(Number.parseInt(width), Number.parseInt(height), {
            fit: 'fill',
        });
        const newBuffer = yield file.toBuffer();
        const base64String = btoa(String.fromCharCode(...new Uint8Array(newBuffer)));
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(`data:image/png;base64,${base64String}`);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
reduce.get('/reduce', (req, res) => {
    return res.send('you can not use get on this route :(');
});
exports.default = reduce;
//# sourceMappingURL=reduce.js.map
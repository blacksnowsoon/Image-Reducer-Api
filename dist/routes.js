"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reduce_1 = __importDefault(require("./routers/reduce"));
const test_1 = __importDefault(require("./routers/test"));
const routes = express_1.default.Router();
routes.use('/', reduce_1.default);
routes.use('/', test_1.default);
exports.default = routes;
//# sourceMappingURL=routes.js.map
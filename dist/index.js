"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type'],
    methods: 'POST',
}));
app.use(body_parser_1.default.json({ limit: '3mb' }));
app.use(body_parser_1.default.urlencoded({ extended: true, limit: '3mb' }));
app.get('/', (_req, res) => {
    return res.send('reducer api root route go to Documention: https://github.com/blacksnowsoon/Image-Reducer-Api');
});
app.use('/', routes_1.default);
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map
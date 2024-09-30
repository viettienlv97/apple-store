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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const chalk_1 = __importDefault(require("chalk"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use((0, express_1.urlencoded)({ extended: true }));
app.use((0, cors_1.default)());
app.use(express_1.default.static('./public'));
app.use((error, _, res, next) => {
    console.error('Server error', error);
    res.status(500).send('Server error!');
});
app.use('/api/auth', user_route_1.default);
app.use((_, res) => {
    res.status(404).send('Page not found');
});
mongoose_1.default
    .connect(process.env.MONGODB_URI ?? '', { dbName: 'assignment-03' })
    .then((result) => {
    app.listen(process.env.PORT, () => {
        console.log(`
${chalk_1.default.bold.blue('Server is running')}
http://localhost:${chalk_1.default.bold.blueBright(process.env.PORT)}/      
`);
    });
})
    .catch((err) => console.error(err));

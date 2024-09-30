"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
const response_1 = require("../utils/response");
const saltRounds = 10;
const login = (req, res) => {
    const { user, password } = req.body;
    !user || !password
        ? (0, response_1.responseFail)(res, response_1.HTTP_STATUS_CODE.BAD_REQUEST, 'Missing params')
        : user_model_1.default.findOne({
            $or: [{ email: user }, { phoneNumber: user }]
        }).then((user) => {
            if (!user)
                return (0, response_1.responseFail)(res, response_1.HTTP_STATUS_CODE.NOT_FOUND, 'User not found');
            if (!bcrypt_1.default.compareSync(password, user.password ?? ''))
                return (0, response_1.responseFail)(res, response_1.HTTP_STATUS_CODE.BAD_REQUEST, 'Password not correct');
            return (0, response_1.responseSuccess)(res, user);
        });
};
const register = async (req, res) => {
    const { email, phoneNumber, fullName, password } = req.body;
    if (!email || !phoneNumber || !fullName || password) {
        (0, response_1.responseFail)(res, response_1.HTTP_STATUS_CODE.BAD_REQUEST, 'Missing param');
        return;
    }
    try {
        const user = await user_model_1.default.findOne({
            $or: [{ email }, { phoneNumber }]
        });
        if (user) {
            (0, response_1.responseFail)(res, response_1.HTTP_STATUS_CODE.BAD_REQUEST, 'User already existed');
            return;
        }
        const bPassword = bcrypt_1.default.hashSync(password, bcrypt_1.default.genSaltSync(saltRounds));
        console.log({ bPassword });
        const newUser = new user_model_1.default({
            email,
            fullName,
            bPassword,
            phoneNumber,
            isAdmin: false
        });
        await newUser.save();
        (0, response_1.responseSuccess)(res, { fullName, phoneNumber, email });
    }
    catch (error) {
        (0, response_1.responseFail)(res, response_1.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, 'Server error');
    }
};
exports.default = {
    login,
    register
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    password: String,
    fullName: String,
    phoneNumber: String,
    email: String,
    isAdmin: Boolean,
});
const User = (0, mongoose_1.model)('user', userSchema);
exports.default = User;

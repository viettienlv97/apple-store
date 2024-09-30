"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_STATUS_CODE = exports.responseFail = exports.responseSuccess = void 0;
const responseSuccess = (res, data) => res.status(exports.HTTP_STATUS_CODE.OK).send({
    success: true,
    data
});
exports.responseSuccess = responseSuccess;
const responseFail = (res, status, message) => res.status(status).send({
    success: false,
    message
});
exports.responseFail = responseFail;
exports.HTTP_STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

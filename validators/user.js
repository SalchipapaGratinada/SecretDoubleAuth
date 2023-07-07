const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorGenerateOtp = [
    check("idUser").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    },
];

const validatorValidCode = [
    check("idUser").exists().notEmpty(),
    check("code").exists().notEmpty(),
    check("secret").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    },
];

module.exports = {
    validatorGenerateOtp,
    validatorValidCode,
};
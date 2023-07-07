const express = require("express");
const router = express.Router();
const { validatorGenerateOtp, validatorValidCode } = require("../validators/user");
const { generateOtp, validCode} = require("../controllers/user");



router.post("/generateOtp", validatorGenerateOtp, generateOtp);

router.post("/validCode", validatorValidCode, validCode);

module.exports = router;
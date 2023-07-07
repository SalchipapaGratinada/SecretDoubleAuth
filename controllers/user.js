const { bd } = require("../config/bd");
const { handleHttpError } = require("../utils/handleError");
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');

const generateOtp = async (req, res) => {
    try {
        const { idUser } = req.body;
        const secret = speakeasy.generateSecret();
        secret.otpauth_url = secret.otpauth_url.replace("SecretKey", 'PLIGA APP');
        // Obtener el URI del secret (para generarlo con el móvil)
        /* const uri = speakeasy.otpauthURL({
            secret: secret.base32,
            label: 'PLIGA',
            issuer: 'PLIGA APP'
        }); */
        //Esto genera la URL del QR del secret
        qrcode.toDataURL(secret.otpauth_url, (err, url) => {
            if (err) {
                console.error('Error al generar el código QR:', err);
                return res.sendStatus(500);
            }
            res.status(200).json({
                data: {
                    secret: secret,
                    img:url
                }
            });
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            code: 400,
            data: [],
            message: "Error generando secret"
        });
    }
};

const validCode = async (req, res) => {
    try {
        const { idUser, code, secret } = req.body;
        const verified = speakeasy.totp.verify({
            secret: secret.base32,
            encoding: 'base32',
            token: code, // Código OTP ingresado por el usuario
            //window: 6, // Ventana de tiempo permitida (opcional) En caso de quieras que el codigo dure mas a pesar que se cambia
        });
        res.status(200).json([{
            message: "info",
            body: {
                statusVerification: verified,
            }
        }]);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            code: 400,
            data: [],
            message: "Error validando code"
        });
    }
};


module.exports = {
    generateOtp,
    validCode,
}
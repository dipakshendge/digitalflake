const express= require ("express");
const router = express.Router();
const authController = require('../controller/authController')
const {signupSchema, loginSchema} = require("../validator/authValidator")
const validate = require("../middlewares/validateMiddleware")

router.route('/register').post(validate(signupSchema),authController.register);
router.route('/login').post(validate(loginSchema),authController.login);

 
module.exports = router; 
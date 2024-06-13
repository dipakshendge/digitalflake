let User = require("../models/userModel");
let bcrypt = require('bcryptjs');

const register = async (req, res) => {
    try {
        let { username, email, phone, password } = req.body;
        let userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email Already Exist" });
        };

        let saltRound = 10;
        let hash_password = await bcrypt.hash(password, saltRound)

        let userCreated = await User.create({
            username,
            email,
            phone,
            password: hash_password
        });

        res.status(201).json({ message: userCreated, token: await userCreated.generateToken() });
    } catch (error) {
        console.log(`Error while registration ${error}`);
        
    }
};

const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let userExist = await User.findOne({ email });
        if (!userExist) {
            res.status(400).json({ message: "Invalide Credentials" });
        }

        const passwordValid = await bcrypt.compare(password, userExist.password);
        if (passwordValid) {
            res.status(200).json({
                mgs: "Login Successful",
                token:await userExist.generateToken(),
                userId: userExist._id.toString()
            })
        } else {
            res.status(400).json({ message: "invalid Email Or Password" })
        }

    } catch (error) {
        console.log(`Error while Login ${error}`);
        
    }
}

module.exports = { register, login };
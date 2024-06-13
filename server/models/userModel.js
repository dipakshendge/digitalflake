let mongoose = require ("mongoose");
let jwt = require("jsonwebtoken")


let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

userSchema.methods.generateToken=async function() {
    try {
        return await jwt.sign({
            userId: this._id.toString(),
            email: this.email,
        },
        process.env.TOKEN_SECRET_KEY,
        {
            expiresIn: "30d"
        });
    } catch (error) {
        console.error(error);
    }
}

const User = new mongoose.model("User",userSchema);

module.exports = User;
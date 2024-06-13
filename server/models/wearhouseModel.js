let mongoose = require("mongoose");

const whouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    } 

});

const Wearhouse = new mongoose.model("Wearhouse",whouseSchema);

module.exports = Wearhouse;
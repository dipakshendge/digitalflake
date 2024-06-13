let mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true
    },
    cityCode: {
        type: String,
        required: true,
    },
    state: {
        type: String, 
        required: true
    }
});

const City = new mongoose.model("City",citySchema);

module.exports = City;
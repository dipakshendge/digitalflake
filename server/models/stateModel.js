let mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    stateName: {
        type: String,
        required: true
    },
    stateCode: {
        type: String,
        required: true,
    }
});

const State = new mongoose.model("State",stateSchema);

module.exports = State;
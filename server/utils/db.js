let mongoose= require("mongoose");
let URI = process.env.MONGO_URL
let connectDb = (async() => {
    try {
        await mongoose.connect(URI);
         console.log("Database Connected");
    } catch (error) {
        console.log("Error While connecting To Connect Database", error);
    }

})

module.exports = connectDb;  
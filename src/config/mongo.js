const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const DB_URI = process.env.DB_URI;
        const connect = await mongoose.connect(DB_URI)
        console.log("Connection successfully!!!")
        return connect;
    } catch (error) {
        console.log(`Error ${error.message}`)
    }
}

module.exports = dbConnect
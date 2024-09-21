const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectionurl = process.env.CONNECTIONURL


const connectMongodb = async () => {
    try{
        await mongoose.connect(connectionurl)
         console.log("Database connected successfully")
    } catch(error) {
        console.log(error); process.exit(1);
}
}

module.exports = connectMongodb;
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userTextSchema = new Schema({
    date:{type: Date, default:Date.now},
    text:{type:String, default:"No text added yet"},
    AImodifiedText:{type:String, default:"Text not modified yet"}
})

module.exports = userTextSchema
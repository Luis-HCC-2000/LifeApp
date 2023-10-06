const mongoose= require('mongoose')
const Schema = mongoose.Schema


const trapSchema= new Schema({
    title: String,
    intensity: Number,
    Texts:[],
    Questionnarie:[],
    Learnings:[],
    Problems:[],
    Behaviors:[],
    Utilities:[],
    Origins:[],
    Solution:[],
})

module.exports= trapSchema
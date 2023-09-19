const mongoose= require('mongoose')
const Schema = mongoose.Schema

const pattern= new mongoose.Mongoose.Schema({
    title: String,
    description:String,
    isImportant:Boolean,
    rating:{type: Number, min:0, max:10}
})

const emotion= new mongoose.Schema({
    title: String,
    description:String,
    isImportant:Boolean,
    rating:{type: Number, min:0, max:10}
})

const behavior= new mongoose.Schema({
    title:String,
    description:String,
    isImportant:Boolean,
    rating:{type: Number, min:0, max:10}
})

const relationshipProblem= new mongoose.Schema({
    title:String,
    text:String,
    rating:{type:Number, min:0, max:10},
    isImportant:Boolean
})
const trapSchema= new Schema({
    // Find a way to make it match a certain user
    title: String,
    Patterns:[pattern],
    EmotionalImpact:[emotion],
    Behaviors:[behavior],
    relationshipProblems:[relationshipProblem],
    patternsText:String,
    emotionsText:String,
    BehaviorsText:String,
    affectsInLife:String,
    Severity: {Type: Number, min:0, max:10}
})

module.exports= abandonmentSchema
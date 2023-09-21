const mongoose= require('mongoose')
const Schema = mongoose.Schema

const pattern= new Schema({
    title: String,
    description:String,
    isImportant:Boolean,
    rating:{type: Number, min:0, max:10}
})

const emotion= new Schema({
    title: String,
    description:String,
    isImportant:Boolean,
    rating:{type: Number, min:0, max:10}
})

const behavior= new Schema({
    title:String,
    description:String,
    isImportant:Boolean,
    rating:{type: Number, min:0, max:10}
})

const relationshipProblem= new Schema({
    title:String,
    text:String,
    rating:{type:Number, min:0, max:10},
    isImportant:Boolean
})
const trapSchema= new Schema({
    title: String,
    Patterns:[pattern],
    EmotionalImpact:[emotion],
    Behaviors:[behavior],
    relationshipProblems:[relationshipProblem],
    patternsText:String,
    emotionsText:String,
    BehaviorsText:String,
    affectsInLife:String,
    Severity: {type: Number, min:0, max:10}
})

module.exports= trapSchema
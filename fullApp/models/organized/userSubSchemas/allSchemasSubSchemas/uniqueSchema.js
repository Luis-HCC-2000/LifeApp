const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaSchema = new Schema({
  'Intensity':[],
  'FeelingsRecords':[],
  'Behaviors':[],
  'Learnings':[],
  'Utilities':[],
  'Origins':[],
  'Problems':[],
  'Texts':[],
  },);

  
  module.exports = schemaSchema;

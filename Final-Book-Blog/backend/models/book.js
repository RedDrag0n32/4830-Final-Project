const mongoose = require('mongoose')

librarySchema = mongoose.Schema({
  title: {type:String, required: true},
  author:{type:String, require: true},
  genre: {type:Array, require: true},
  series: {type:Boolean, require: true},
  seriesTitle: {type:String, require: false},
  status:{type:String, require: true},
  notes: {type: String, require: false},
  tag: {type: String, require: true}
})

module.exports = mongoose.model('Book', librarySchema)

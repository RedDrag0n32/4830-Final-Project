const mongoose = require('mongoose')

librarySchema = mongoose.Schema({
  title: {type:String, required: true},
  author:{type:String, require: true}
})

module.exports = mongoose.model('Book', librarySchema)

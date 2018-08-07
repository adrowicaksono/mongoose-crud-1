const mongoose = require('mongoose')

var Schema = mongoose.Schema

var bookSchema = new Schema({
    isbn : String,
    title :String,
    author :String,
    category: String,
    stock: Number
})

//creating model
var bookSchema = mongoose.model('Book', bookSchema)

module.exports = bookSchema
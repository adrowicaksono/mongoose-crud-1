const mongoose = require('mongoose')

var Schema = mongoose.Schema

var customerSchema = new Schema({
    name : String,
    memberid:String,
    address:String,
    zipcode:String,
    phone:String
})

var customerSchema = mongoose.model('Customer', customerSchema)

module.exports = customerSchema
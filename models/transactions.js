const mongoose =require('mongoose')

var Schema = mongoose.Schema

var transactionSchema = new Schema({
    member :{type: Schema.Types.ObjectId, ref: 'Customer' },
    days : Number,
    out_date : Date,
    due_date : Date,
    in_date : Date,
    fine : Number,
    booklist : [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

var transactionSchema = mongoose.model('Transaction', transactionSchema)

module.exports = transactionSchema

// mongoose.Types.ObjectId("5b4475b868c5de1e9444c076")
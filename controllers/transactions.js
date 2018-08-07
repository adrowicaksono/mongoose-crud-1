const Transaction = require('../models/transactions')
const mongoose =require('mongoose')

const getAll = function(req,res){

 Transaction
    .find()
    .populate('member')//to property at model
    .populate('booklist')
    .exec(function (err, trans) {
        if (err) res.status(400);
        res.json(trans);
      });
        
       
}

const add = function(req, res){ 
 Transaction
    .create({
        member : mongoose.Types.ObjectId(req.body.memberid),
        days: req.body.days,
        out_date: new Date(req.body.out_date),
        due_date: new Date(req.body.due_date),
        in_date: new Date(req.body.in_date),
        fine : req.body.fine,
        booklist : req.body.booklistid
    },function(err, books){
        if(err) res.status(400).json({msg:"insert data was failed"});
        res
            .status(200)
            .json({
                msg:  "Transaction was created"
            })
    })   
}


const edit = function(req, res){
    
    const values = {
        member : req.body.memberid,
        days: req.body.days,
        out_date: req.body.out_date,
        due_date: req.body.due_date,
        in_date: req.body.in_date,
        fine : req.body.fine,
        booklist : req.body.booklistid
    }

 Transaction
    .findByIdAndUpdate(req.params.id, values, function(err, cust){
        if(err) res.status(400).json({msg:"failed to update"});

        res
            .status(200)
            .json(cust)
    })
}

const remove = function(req, res){
 Transaction
    .findByIdAndRemove(req.params.id, function(err, book){
        if(err) res.status(400).json({msg:"fail to delete"});
        res
        .status(200)
        .json("delete successfully")
    })
}


module.exports = {
    getAll,
    add,
    edit,
    remove
}

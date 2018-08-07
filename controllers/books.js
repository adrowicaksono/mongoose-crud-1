const Book = require('../models/books')

const getAll = function(req, res){
    Book
    .find({}, function(err, books){
        if(err) res.status(400).json({msg : "dailed to upload data"});
        res
            .status(200)
            .json(books)
    })
}


const add = function(req, res){ 
    Book
    .create({
        isbn : req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
    },function(err, books){
        if(err) res.status(400).json({msg:"insert data was failed"});
        res
            .status(200)
            .json({
                msg: "book was created"
            })
    })
}

const edit = function(req, res){
    
    const where = {isbn: req.params.isbn}
    const values = {
        isbn: req.body.isbn,
        title : req.body.title,
        author : req.body.author,
        category:req.body.category,
        stock:req.body.stock
    }

    Book
    .findOneAndUpdate(where, values, function(err, book){
        if(err) res.status(400).json({msg:"failed to update"});

        res
            .status(200)
            .json(book)
    })



}

const remove = function(req, res){
    Book
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
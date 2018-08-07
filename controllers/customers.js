const Customer = require('../models/customers')

const getAll = function(req,res){
    Customer
    .find({}, function(err, custs){
        if(err) res.status(400).json({msg : "dailed to upload data"});
        res
            .status(200)
            .json(custs)
    })
}

const add = function(req, res){ 
    Customer
    .create({
        name : req.body.name,
        memberid: req.body.memberid,
        address: req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone
    },function(err, books){
        if(err) res.status(400).json({msg:"insert data was failed"});
        res
            .status(200)
            .json({
                msg: "Customer was created"
            })
    })   
}


const edit = function(req, res){
    
    const values = {
        name : req.body.name,
        memberid: req.body.memberid,
        address: req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone
    }

    Customer
    .findByIdAndUpdate(req.params.id, values, function(err, cust){
        if(err) res.status(400).json({msg:"failed to update"});

        res
            .status(200)
            .json(cust)
    })
}

const remove = function(req, res){
    Customer
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

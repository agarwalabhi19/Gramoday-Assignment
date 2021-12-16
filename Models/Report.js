const mongoose = require('mongoose');

const Reportschema= mongoose.Schema({
    cmdtyName:{
        type : String
    },
    cmdtyID :{
        type : String
    },
    marketID :{
        type : String
    },
    marketName :{
        type : String
    },
    users :{
        type : [String]
    },
    timestamp :{
        type : String
    },
    priceUnit : {
        type : String,
        Default : "Kg"
    },
    minPrice : {
        type : Number,
        required : true
    },
    maxPrice : {
        type : Number,
        required : true
    },
    minprices:[Number],
    maxprices:[Number]
});


module.exports = mongoose.model("report",Reportschema);
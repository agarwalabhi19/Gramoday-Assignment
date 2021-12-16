const mongoose = require('mongoose');

const ReportDetailschema = mongoose.Schema({
    reportDetails : {
        userID : {
            type : String,
            required : true
        },
        marketID : {
            type : String,
            //required : true
        },
        marketName : {
            type : String,
            required : true
        },
        cmdtyID : {
            type : String,
            required : true
        },
        marketType : {
            type : String,
            default : "Mandi"
        },
        cmdtyName : {
            type : String,
            required : true
        },
        priceUnit : {
            type : String,
            required : true
        },
        convFctr : {
            type : Number,
            required : true
        },
        minPrice : {
            type : Number,
            required : true
        },
        maxPrice : {
            type : Number,
            required : true
        }
    }
});


module.exports= mongoose.model("reportDetails", ReportDetailschema);
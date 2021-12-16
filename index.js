const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ReportDetails = require('../Gramoday Assignment/Models/ReportDetails');
const Report = require('../Gramoday Assignment/Models/Report');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/reportDB", {useNewUrlParser: true},
    console.log("conneced to DB!")
);


app.get("/",function(req,res){
    res.send("just check");
});

app.post("/reports" , async function(req,res){
    
    Report.findOne({marketID:req.body.reportDetails.marketID,cmdtyID:req.body.reportDetails.cmdtyID}, (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            if(data==null){
                let t=req.body.reportDetails;
               let users=[],minprices=[],maxprices=[];
               users.push(t.userID);
               minprices.push(t.minPrice/t.convFctr);
               maxprices.push(t.maxPrice/t.convFctr);
                const rep=new Report({
                    cmdtyName:t.cmdtyName,
                    cmdtyID:t.cmdtyID,
                    marketID:t.marketID,
                    marketName: t.marketName,
                    users:users,
                    priceUnit:"Kg",
                    minPrice:t.minPrice/t.convFctr,
                    maxPrice:t.maxPrice/t.convFctr,
                    minprices:minprices,
                    maxprices:maxprices
                },{versionkey:false});
                rep.save();
                console.log(rep);
                res.send({
                    "status":"Success!",
                    "reportID":rep._id
                });
                
            }
            else{
                let a=[],b=[];
                a=data.minprices;
                b=data.maxprices;
                let t=req.body.reportDetails;
                a.push(t.minPrice/t.convFctr);
                b.push(t.maxPrice/t.convFctr);
                let avgmin=0,avgmax=0;
                a.forEach(element => {
                   avgmin+=element; 
                });
                avgmin=avgmin/a.length;
                b.forEach(element => {
                    avgmax+=element;
                });
                avgmax=avgmax/b.length;
                
                
                data.users.push(t.userID);
                let users=[];
                users=data.users
                data.overwrite({
                    cmdtyName:t.cmdtyName,
                    cmdtyID:t.cmdtyID,
                    marketID:t.marketID,
                    marketName: t.marketName,
                    users:users,
                    minPrice:avgmin,
                    maxPrice:avgmax,
                    minprices:a,
                    maxprices:b
                });
                data.save();
                console.log(data);
                res.send({
                    "status":"Sucess",
                    "reportID":data._id
                });
            }

        }
    });
    
});

app.get("/reports/", function(req,res){
    let par=req.query.cmdtyID;
   // console.log(par);
  // console.log(Report.find().pretty());
   Report.findOne({cmdtyID:par}, (err,data)=>
    {
        if(err){
            console.log(err);
        }
        else{
            if(data==null)
            {
                res.send({});
            }
            else{
            console.log(data);
            const details={
                _id:data._id,
                cmdtyName:data.cmdtyName,
                cmdtyID:data.cmdtyID,
                marketID:data.marketID,
                marketName:data.marketName,
                users:data.users,
                priceUnit:data.priceUnit,
                minPrice:data.minPrice,
                maxPrice:data.maxPrice
            }
            res.send(details);
            }
        }
    });
});




module.exports = app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
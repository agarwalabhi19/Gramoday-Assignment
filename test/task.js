const chai=require('chai');
const chaiHttp=require('chai-http');
const server=require('../index');

chai.should();

chai.use(chaiHttp);

describe('Report API', ()=>{

    describe("GET /reports/",()=>{
        it('it should get all report with required query', (done)=>{
            chai.request(server)
            .get("/reports/")
            .end((err,response)=>{
                response.should.have.status(200);
            done();
            });

        });
    });

    describe("POST /reports",()=>{
        it('it should post a new report', (done)=>{
            const report={
                reportDetails: {
                    
                    userID: "user-1",
                    marketID: "market-1",
                    marketName: "Vashi Navi Mumbai",
                    cmdtyID: "cmdty-1",
                    marketType: "Mandi",
                    cmdtyName: "Potato",
                    priceUnit: "Pack",
                    convFctr: 50,
                    minPrice: 700,
                    maxPrice: 900
                }
            }  
            chai.request(server)
            .post("/reports")
            .send(report)
            .end((err,response)=>{
                response.should.have.status(200);
            done();
            });

        });
    });

});


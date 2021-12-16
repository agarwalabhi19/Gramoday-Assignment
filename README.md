
## Installation and Run

* Open command prompt 
```
$ git clone https://github.com/agarwalabhi19/Gramoday-Assignment.git
$ cd ../path/to/the/file
$ npm install
```
* To run the project use command

```
nodemon index.js
```

  we will see a message on command prompt as:
```
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
conneced to DB!
Server started on port 3000
```
This indicates that server has started!

Now, to send POST or GET request to our server we can use POSTMAN or THUNDER CLIENT(extension in vs code).

If we send a POST request with data as a valid json then we will get response as:
```
{
  "status": "Sucess",
  "reportID": "61b995bc5f76f6e8c8707a1c"
}
```
where "reportID" is randomly generated and data is now stored in our mongoDB database with this reportID.


And if we send GET request with required query in cmdtyID then as response it will show data as json file.
Example:
```
{
  "_id": "61bae99b46fb9a5571a3ccf0",
  "cmdtyName": "Potato",
  "cmdtyID": "cmdty-1",
  "marketID": "market-2",
  "marketName": "Vashi Navi Mumbai",
  "users": [
    "user-1"
  ],
  "priceUnit": "Kg",
  "minPrice": 12,
  "maxPrice": 20
}
```

## Bonus Task 1

For API testing there is different folder named "test", we will be using mocha and chai for testing requests.
 
For testing run command as:
```
npm test
```
Then, it will show report of test like this:
```
  Report API
    GET /reports/

      ✔ it should get all report with required query (114ms)
    POST /reports
    ✔ it should post a new report (88ms)

  2 passing (214ms)
```
This indicates that all API's are working fine.

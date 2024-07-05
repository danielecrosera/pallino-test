# Test Pallino - Arsenalia
## A Node.js project, exposing two GET APIs

This project was developed with Node.js v20.14.0 and npm 10.7.0, so I recommend using at least these versions.

Git clone this code, move in the project folder and execute the command
```
npm install
```

Now all necessary packages are downloaded and you are ready to start the app.
> Before starting, if you want to change the port (default 3000), edit the .env file

Run the application executing the command
```
node app.js
```

## Available APIs
Call the APIs with GET method. 
Both need a param and both respond with a json object with two elements:
```
    {
        total: 0,
        offers: []
    }
    // total: counts the elements in offers' list 
    // offers: is a list of found offers
```


> http://{yourhost}:3000/api/v1/offers/shop/{shopID}

> http://{yourhost}:3000/api/v1/offers/{countryCode}
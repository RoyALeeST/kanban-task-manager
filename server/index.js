const express = require('express'); // Sever
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const path = require('path')



//#endregion

const app = express();
const ROOT_URL = "/api/v1/";

// create application/json parser
// create application/x-www-form-urlencoded parser
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.text({ limit: '200mb' }));

// enable cors
const cors = require('cors');
app.use(cors({
  origin: 'https://localhost:4200'
}));

// App configuration
app.use(cookieParser()); // Parsing application/json


// Add app routes to express App

// Get environment port
const PORT = process.env.PORT || 3001;

//Run in prod environmetn only
if(process.env.NODE_ENV == 'production'){
  const appPath = path.join(__dirname, '..','dist');
  console.log(appPath)
  app.use(express.static(appPath));
  
  app.get('*', function(req, res){
    res.sendFile(path.resolve(appPath, 'index.html'));
  });
}

// Start
var server = app.listen(PORT, function(){
  console.log(`===== SERVER RUNNING ON PORT ${PORT} ====`)
})
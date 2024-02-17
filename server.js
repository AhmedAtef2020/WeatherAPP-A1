// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 5000;

const server = app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}/`);
})


function postApiData (req, res) {
    // projectData = req.body;
    projectData.newDate = req.body.newDate;
    projectData.feelingRes = req.body.feelingRes;
    projectData.WeatherTemp = req.body.WeatherTemp;
    console.log(projectData);
}

app.post('/apiData', postApiData);

function uiApiData(req, res) {
    res.send(projectData);
}

app.get('/uiData', uiApiData);

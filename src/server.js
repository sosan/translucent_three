const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const userAgent = require('express-useragent')
const rateLimit = require('express-rate-limit');
const app = express();
const apiLimiter = rateLimit({
    windowMs: 60 * 1000, //1min
    max : 20
});
const path = require('path');

app.use(userAgent.express())
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, "../src")));
app.use(express.static(path.join(__dirname, "../")));

app.use(morgan('combined'));

app.get('/', function (request, response) {
    response.sendFile("index.html");
});


app.listen(5000, () => {
    console.log("APP runnning on port 3000");
});

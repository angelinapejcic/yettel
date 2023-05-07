const guestRoute = require('./routes/guestRoutes');
const moderatorRoute = require('./routes/moderatorRoutes');
const adminRoute = require('./routes/adminRoutes');

const errorHandler = require('./_helpers/error-handler');

const dotenv = require('dotenv');
dotenv.config(); 

var express = require("express"),
    app = express(),
    cors = require('cors'),
    bodyParser = require("body-parser"),
    router = express.Router(),
    mongoose = require('mongoose');

// Setup Connection to DB
const mongodbUri = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`;
exports.db = mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.use(cors());

// Routes
app.use('/guest', guestRoute);
app.use('/moderator', moderatorRoute);
app.use('/admin', adminRoute);


// Global error handler
app.use(errorHandler);

// Start server
app.listen(process.env.PORT, function () {
    console.log("Node server running on http://localhost:" + process.env.PORT);
});

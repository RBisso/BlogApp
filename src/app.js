const express  = require('express');
const path     = require('path');
const mongoose = require('mongoose');
const routes   = require('./routes/routes');
const config   = require('./config/database');
//const bodyParser = require('body-parser');
//import bodyParser from 'body-parser';

//starting app
const app = express();
app.set('views', path.join(__dirname, 'views'));         //path to view setup
app.use(express.static(path.join(__dirname, 'public'))); //path to public files setup
app.set('view engine', 'ejs');                           //view engine setup
app.use(express.json());
//app.use(bodyParser.json());
app.use('/', routes)

mongoose.connect(config.database, {
    useNewUrlParser    : true,
    useUnifiedTopology : true,
    dbName             : 'BlogApp'
});

const db = mongoose.connection;
db.on('error', (error) => {
    console.log(error);
});
db.once('open',()=> {
    console.log('Connected to database');
});

const port = process.env.PORT || '9090';
app.listen(port, () => {
    console.log(`Listening on port http://127.0.0.1:${port}`);
});
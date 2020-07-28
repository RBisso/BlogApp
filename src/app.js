const express  = require('express');
const path     = require('path');
const mongoose = require('mongoose');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());


const port = process.env.PORT || '9090';


app.listen(port, () => {
    console.log(`Listening on port htpp://localhost:${port}`);
});
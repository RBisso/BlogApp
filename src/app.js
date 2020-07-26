const express = require('express');
const path    = require('path');

const app = express();



const port = process.env.PORT || '9090';


app.listen(port, () => {
    console.log(`Listening on port htpp://localhost:${port}`);
});
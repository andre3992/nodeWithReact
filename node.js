const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
app.use(cors());

app.get('/', (req, res, next) => {
    let rawdata = fs.readFileSync('clubes.json');
    let clubs = JSON.parse(rawdata);
    res.json(clubs);
    console.log(clubs);
});

app.listen(3001);
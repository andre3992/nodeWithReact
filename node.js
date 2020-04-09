const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res, next) => {
    const rawdata = fs.readFileSync('clubes.json');
    const clubs = JSON.parse(rawdata);
    res.json(clubs);
    console.log(clubs);
});

app.post('/adicionar', (req, res, next) => {

    console.log(req.body.value)
    const rawdata = fs.readFileSync('clubes.json');
    const clubs = JSON.parse(rawdata);
    clubs.clubes.push(req.body.value)
    fs.writeFileSync('clubes.json', JSON.stringify(clubs));
    const rawdata2 = fs.readFileSync('clubes.json');
    const clubs2 = JSON.parse(rawdata2);
    res.json(clubs2);
});

app.listen(3001);
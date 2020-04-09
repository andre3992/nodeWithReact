const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

app.use(cors());

let rawdata = fs.readFileSync('student.json');
let clubs = JSON.parse(rawdata);
console.log(clubs);
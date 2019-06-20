const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/animals', (req, res, next) => {
    const buffer = fs.readFileSync(path.join(__dirname, 'data/animals.json'));
    const animals = JSON.parse(buffer);
    return res.json(animals);
});

app.listen(5004, () => console.info('Server is running ot localhost:5004'));

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => { 
    res.send('Welcome to Chapter3: Service Workers');
});

app.get('/people', (req, res, next) => {
    const peopleBuffer = fs.readFileSync(path.join(__dirname, 'data/people.json'));
    const people= JSON.parse(peopleBuffer);
    res.json(people);
});

app.listen(5003, () => console.log('Sever is running @ localhost:5003'));
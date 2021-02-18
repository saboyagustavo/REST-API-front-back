const express = require('express');
const app = express();
const cors = require('cors');
const alunos = require('./alunos');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/api/v1/alunos', (req, res) => {
    res.send(alunos);
});

app.listen(3000, () => {
    console.log('RUNNING ON localhost:3000');
});

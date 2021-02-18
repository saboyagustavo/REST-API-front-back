const express = require('express');
const app = express();
const alunos = require('./alunos');

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/api/v1/alunos', (req, res) => {
    res.send(alunos);
});

app.listen(3000, () => {
    console.log('RUNNING ON localhost:3000');
});

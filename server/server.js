const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const server = app.listen(5000, () => {
    console.log('Server listening on port 5000');
});

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('On Home Page');
});

app.get('/dashboard', (req, res) => {
    res.send('Welcome User');
});
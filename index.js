const express = require('express');

const app = express();
app.get('/', (request, response) => response.json({
    event: 'Hello World!'
}));
app.listen(3333);
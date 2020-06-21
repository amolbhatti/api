const express = require('express');
const path = require('path');
const routes = express.Router();
routes.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname ,'/../doc.html'));

});
routes.get('/:postId', (req, res) => {
    res.status(200).sendFile(path.join(__dirname ,'/../details.html'));

});

module.exports = routes;
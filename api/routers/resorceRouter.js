const express = require('express');
const resourceRouter = express.Router();
const Resources = require('../../database/models/resorceModel.js');

resourceRouter.get('/', (req, res) => {
    Resources.find()
    .then(response => {
        res.json(response)
    })
    .catch(err => res.json({error: err, message: err.message}))
})

resourceRouter.post('/', (req, res) => {
    Resources.add(req.body)
    .then(response => {
        res.json(response)
    })
    .catch(err => res.json({error: err, message: err.message}))
})

module.exports = resourceRouter
const express = require('express');
const tasksRouter = express.Router();
const Tasks = require('../../database/models/taskModel.js');

tasksRouter.get('/', (req, res) => {
    Tasks.find()
    .then(response => {
        res.json(response)
    })
    .catch(err => res.json({error: err, message: err.message}))
})

tasksRouter.post('/', (req, res) => {
    Tasks.add(req.body)
    .then(response => {
        res.json(response)
    })
    .catch(err => res.json({error: err, message: err.message}))
})

module.exports = tasksRouter
const express = require('express');
const ProjectRouters = express.Router();
const Projects = require('../../database/models/projectModel.js');

ProjectRouters.get('/', (req, res) => {
    Projects.find()
    .then(response => {
        res.json(response)
    })
    .catch(err => res.json({error: err, message: err.message}))
})

ProjectRouters.post('/', (req, res) => {
    Projects.add(req.body)
    .then(response => {
        res.json(response)
    })
    .catch(err => res.json({error: err, message: err.message}))
})
ProjectRouters.get('/:id', (req, res) => {
    Projects.getResources(req.params.id)
    .then(response => res.json(response))
    .catch(err => res.json({error: err, message: err.message}));
})

module.exports = ProjectRouters
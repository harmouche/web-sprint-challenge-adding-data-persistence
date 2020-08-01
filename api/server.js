const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const projectRouter = require('./routers/projectRouter');
const resourceRouter = require('./routers/resourceRouter');
const taskRouter = require('./routers/taskRouter');


const server = express();


server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter)

server.get('/', (req, res) => res.json({message: 'Server Running'}));

module.exports = server;
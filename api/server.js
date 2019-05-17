const express = require('express');
const configureMiddleware = require('./middleware');
const authRouter = require('../auth/auth-router');
const studentsRouter = require('../students/students-router');

const server = express();

configureMiddleware(server)

server.use('/api/auth', authRouter);
server.use('/api/students', studentsRouter)

server.get('/', (req, res, next) => {
  res.send(`<h2>We are Live!<h2>`)
})

module.exports = server;
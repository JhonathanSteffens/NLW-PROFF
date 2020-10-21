const express = require('express');
const server = express();

const {
  PageLanding,
  PageStudy,
  PageGiveClasses,
  saveClasses,
} = require('./pages');

const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static('public'))
  .get('/', PageLanding)
  .get('/study', PageStudy)
  .get('/give-classes', PageGiveClasses)
  .post('/save-classes', saveClasses)
  .listen(4004);

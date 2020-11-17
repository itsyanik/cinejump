const express = require('express');
const theMovieDB = require('./theMovieDB');
const api = express();

function success(response) {
  res.send(response);
}

function error(response) {
  const customResponse = {
    status: response.status_code,
    message: response.status_message,
  };
  const { status, message } = customResponse;
  res.send(`Something went wrong: ${message} Code: ${status}`);
}

api.get('/movie/:id', (req, res) => {
  theMovieDB.movies.getById(
    { id: req.params.id },
    (response) => success(response),
    (response) => error(JSON.parse(response))
  );
});

api.get('/popular', (req, res) => {
  theMovieDB.movies.getPopular(
    {},
    (response) => success(response),
    (response) => error(JSON.parse(response))
  );
});

api.get('/now_playing', (req, res) => {
  theMovieDB.movies.getNowPlaying(
    {},
    (response) => success(response),
    (response) => error(JSON.parse(response))
  );
});

api.get('/video/:id', (req, res) => {
  theMovieDB.movies.getVideos(
    { id: req.params.id },
    (response) => success(response),
    (response) => error(JSON.parse(response))
  );
});

module.exports = api;

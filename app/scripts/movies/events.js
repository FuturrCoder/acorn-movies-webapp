'use strict'

const api = require('./api')
const ui = require('./ui')

const onMovieSearch = (event) => {
  event.preventDefault()
  let search = document.getElementById('movie-keywords').value
  $('#search-header').text(`Search results for: "${search}"`)
  api.movieSearch(search)
    .then(ui.movieSearchSuccess)
    .catch(error => console.error(error))
}

const movieHandlers = () => {
  $('#search-movies').on('click', onMovieSearch)
};

module.exports = {
  movieHandlers,
  onMovieSearch,
}

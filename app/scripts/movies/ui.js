'use strict'

const movieSearchSuccess = (data) => {
  if (data.length == 0) {
    $('#search-header').html(`No results for: "${document.getElementById('movie-keywords').value}"`)
  }
  var movieInfo
  for (var i = 0; i < data.length; i++) {
    movieInfo = Object.entries(data)[i]
    $('#search-results').append('<li>' + movieInfo[1].title + ', ' + movieInfo[1].year +'</li>')
  }
}

module.exports = {
  movieSearchSuccess,
}

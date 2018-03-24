'use strict'

const movieSearchSuccess = (data) => {
  console.log(data)
  // console.log(data[0].term);
  $('#search-results').html('<li>' + data + '</li>')
}

module.exports = {
  movieSearchSuccess,
}

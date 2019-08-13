import SpotifyWrapper from '../src/index'

global.fetch = require('node-fetch')

const spotify = new SpotifyWrapper({
  token:
    'BQAr-A5aq96xo0rED1FnEyFjsZNyqvpKBApFyB1qmtIcU1zqPzqttDjShcaz-evCcfTPHaXvRsy6UaOmxZCAC7RMl578Wg-h3CtmLCpICtrXMYVdaNU97AKc3Jv7mc7zely3SQUyJEJnQE57zTC9eDPTNQ1g4mNTn8fecP3UCLeNsvgcNiowoN50O8Hn4hdQ6ulL8pBxDrHMAp-u38BpJeLCUkiSvnxuKtj36kn2QNNRz4KeT5Hdm8frs8tt-6s5n5txhQYDonPkww'
})
const albums = spotify.search.albums('Incubus')

albums
  .then(data => data.albums.items.map(item => console.log(item.name)))
  .catch(err => console.log(err))

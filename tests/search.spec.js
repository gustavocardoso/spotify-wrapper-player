import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import SpotifyWrapper from '../src/index'

chai.use(sinonChai)

global.fetch = require('node-fetch')

describe('Spotify Wrapper', () => {
  let spotify
  let fetchedStub
  let promise

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    })

    fetchedStub = sinon.stub(global, 'fetch')
    promise = fetchedStub.resolves({
      json: () => ({
        body: 'json'
      })
    })
  })

  afterEach(() => {
    fetchedStub.restore()
  })

  describe('Smoke Tests', () => {
    // search (generic) - more than one type
    // searcHAlbums
    // searchArtists
    // searchTracks
    // searchPlayLists

    it('should exist the searchAlbums method', () => {
      expect(spotify.search.albums).to.exist
    })

    it('should exist the searchArtists method', () => {
      expect(spotify.search.artists).to.exist
    })

    it('should exist the searchTracks method', () => {
      expect(spotify.search.tracks).to.exist
    })

    it('should exist the searchPlayLists method', () => {
      expect(spotify.search.playlists).to.exist
    })
  })

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.artists('Ghost')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const artist = spotify.search.artists('Ghost')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Ghost&type=artist'
      )

      const artist2 = spotify.search.artists('Beatles')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Beatles&type=artist'
      )
    })
  })

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.albums('Ghost')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const albums = spotify.search.albums('Ghost')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Ghost&type=album'
      )

      const albums2 = spotify.search.albums('Beatles')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Beatles&type=album'
      )
    })
  })

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('Ghost')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const tracks = spotify.search.tracks('Ghost')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Ghost&type=track'
      )

      const tracks2 = spotify.search.tracks('Beatles')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Beatles&type=track'
      )
    })
  })

  describe('searchPlayLists', () => {
    it('should call fetch function', () => {
      const playLists = spotify.search.playlists('Ghost')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const playLists = spotify.search.playlists('Ghost')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Ghost&type=playlist'
      )

      const playLists2 = spotify.search.playlists('Beatles')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Beatles&type=playlist'
      )
    })
  })
})

import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import SpotifyWrapper from '../src/index'

chai.use(sinonChai)

global.fetch = require('node-fetch')

describe('Album', () => {
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

  describe('Smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist
    })

    it('should have getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist
    })

    it('shuld have getAlbumTracks method', () => {
      expect(spotify.album.getTracks).to.exist
    })
  })

  describe('getAlbum', () => {
    // verifica se o fetch ocorre
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum()
      expect(fetchedStub).to.have.been.calledOnce
    })

    // verifica s eo fetch ocorre com a url correta
    it('should call fetch with the correct URL', () => {
      const album = spotify.album.getAlbum('49quOXlETeW88GhTf1zHsc')

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/49quOXlETeW88GhTf1zHsc'
      )

      const album2 = spotify.album.getAlbum('51quOXlETeW88GhTf1zHsc')

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/51quOXlETeW88GhTf1zHsc'
      )
    })

    // verifica se o dado é recebido pela promise
    it('should return the correct data from the promise', () => {
      const album = spotify.album.getAlbum('49quOXlETeW88GhTf1zHsc')

      album.then(data => {
        expect(data).to.be.eql({ body: 'json' })
      })
    })
  })

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = spotify.album.getAlbums()

      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const albums = spotify.album.getAlbums([
        '49quOXlETeW88GhTf1zHsc',
        '49quOXlETeW88GhTf1zHdf'
      ])

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/?ids=49quOXlETeW88GhTf1zHsc,49quOXlETeW88GhTf1zHdf'
      )
    })

    it('should call return the correct data from promise', () => {
      const albums = spotify.album.getAlbums([
        '49quOXlETeW88GhTf1zHsc',
        '49quOXlETeW88GhTf1zHdf'
      ])

      albums.then(data => {
        expect(data).to.be.eql({ body: 'json' })
      })
    })
  })

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const tracks = spotify.album.getTracks()

      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const tracks = spotify.album.getTracks('49quOXlETeW88GhTf1zHsc')

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/49quOXlETeW88GhTf1zHsc/tracks'
      )

      const tracks2 = spotify.album.getTracks('49quOXlETeW88GhTf1zHgh')

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/49quOXlETeW88GhTf1zHgh/tracks'
      )
    })

    it('should return the correct data from promise', () => {
      const tracks = spotify.album.getTracks('49quOXlETeW88GhTf1zHgh')

      tracks.then(data => {
        expect(data).to.be.eql({ body: 'json' })
      })
    })
  })
})

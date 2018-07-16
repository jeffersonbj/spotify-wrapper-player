import spotify from '../src/Spotify';
import renderAlbumInfo from '../src/AlbumInfo';
import renderAlbumTracks  from '../src/AlbumTracks';
import searchEnterTrigger from '../src/SearchTrigger';

searchEnterTrigger();

const album = spotify.album.getAlbum('3A5wFiET5rYsVbIFIklpgV');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');



album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));

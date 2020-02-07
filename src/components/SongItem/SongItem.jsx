import React from 'react';
import './Song.css';
import PropTypes from 'prop-types';

const SongItem = ({ song: { _name, _artists, _album, _duration_ms } }) => {
  return (
    <div className='Song'>
      <ul className='song-ul'>
        <li>{_name}</li>
        <li>{_artists[0].name}</li>
        <li>{_album.name}</li>
        <li>{((_duration_ms * 0.001) / 60).toFixed(2)}</li>
      </ul>
    </div>
  );
};

SongItem.propTypes = {
  songId: PropTypes.string,
  tokenPath: PropTypes.string,
  albumPhoto: PropTypes.string,
  songName: PropTypes.string,
  artistName: PropTypes.string
};

export default SongItem;

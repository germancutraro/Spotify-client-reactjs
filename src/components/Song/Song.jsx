import React from 'react';
import './Song.css';
import PropTypes from 'prop-types';

const Song = props => {
  return (
    <div className="Song">
     <ul className="song-ul">
       <li>{props.song._name}</li>
       <li>{props.song._artists[0].name}</li>
       <li>{props.song._album.name}</li>
       <li>{ ((props.song._duration_ms * 0.001) / 60).toFixed(2) }</li>
     </ul>
    </div>
    
  );
};

Song.propTypes = {
  songId: PropTypes.string,
  tokenPath: PropTypes.string,
  albumPhoto: PropTypes.string,
  songName: PropTypes.string,
  artistName: PropTypes.string
};

export default Song;
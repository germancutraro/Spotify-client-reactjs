import React from 'react';
import PropTypes from 'prop-types';

const Song = props => {
  return (
    <div className="Song">
     <ul>
       <li>Song name: {props.song._name}</li>
       <li>Artist: {props.song._artists[0].name}</li>
       <li>Album name: {props.song._album.name}</li>
       <li><img src={props.song._album.images[2].url} alt=""/></li>
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
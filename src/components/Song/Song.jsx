import React from 'react';
import PropTypes from 'prop-types';

const Song = () => {
  return (
    <div className="Song">
      <small>Song 1</small>
      <small>Song 2</small>
      <small>Song 3</small>
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
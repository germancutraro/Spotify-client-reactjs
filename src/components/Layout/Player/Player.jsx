import React from 'react';

const Player = props => {
  console.log(props.match.params.songId)
  return (
    <h1>Player</h1>
  );
};

export default Player;
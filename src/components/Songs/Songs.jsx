import React from 'react';
import './Songs.css';
import Song from '../Song/Song';
// React and Redux
import { connect } from 'react-redux';

const Songs = (props) => {
  const songList = props.songs.map( (song, i) => <Song song={song} key={i} />)
  return (
    <div className="Song-Results">
      {songList.length > 0 ? songList : <p>Not found!</p>}
    </div>
  );
};

const mapStateToProps = state => {
  return { songs: state.songs }
};

export default connect(mapStateToProps, null)(Songs);
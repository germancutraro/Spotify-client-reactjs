import React, { useEffect } from 'react';
import SongItem from '../../components/SongItem/SongItem';
import NavBar from '../../components/NavBar/NavBar';
// redux
import { getSongsStart } from './songsActions';
import { signIn, getUserStart } from '../Auth/authActions';
import { useSelector, useDispatch } from 'react-redux';
// styles
import {
  SongsContainer,
  SongsTitle,
  SongsList,
  SongsItem
} from './songsStyles';

const Songs = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const dispatch = useDispatch();
  const songs = useSelector(({ songs }) => songs.list);

  useEffect(() => {
    dispatch(signIn());
    dispatch(getUserStart());
  }, [dispatch]);

  const handleClick = () => dispatch(getSongsStart({ songName: searchValue }));

  return (
    <>
      <NavBar
        searchValue={searchValue}
        handleChange={e => setSearchValue(e.target.value)}
        handleClick={handleClick}
      />
      <SongsContainer>
        <div className='song-results-wrapper'>
          <SongsTitle>Songs:</SongsTitle>
          <SongsList>
            <SongsItem>TITLE</SongsItem>
            <SongsItem>BAND</SongsItem>
            <SongsItem>ALBUM</SongsItem>
            <SongsItem>DURATION</SongsItem>
          </SongsList>
          {songs.length ? (
            songs.map(song => {
              console.log(song);

              return <SongItem song={song} />;
            })
          ) : (
            <p>Not Found</p>
          )}
        </div>
      </SongsContainer>
    </>
  );
};

export default Songs;

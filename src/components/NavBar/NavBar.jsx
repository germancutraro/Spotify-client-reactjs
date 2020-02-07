import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import { useSelector } from 'react-redux';

import { Brightness7, Brightness4, ExitToApp } from '@material-ui/icons';

const NavBar = ({ searchValue, handleChange, handleClick }) => {
  const user = useSelector(({ auth: { user } }) => user);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ color: '#fff' }}>Spotify</h1>

          <div>
            <SearchBox
              inputValue={searchValue}
              onChangeHandler={handleChange}
              onClickHandler={handleClick}
            />
          </div>
        </div>

        <div>
          {user && user.images && (
            <img
              src={user.images[0].url}
              alt=''
              width={45}
              height={45}
              style={{ borderRadius: '100%' }}
            />
          )}
          <Brightness7 style={{ color: '#fff' }} />
          <Brightness4 style={{ color: '#fff' }} />
          <ExitToApp style={{ color: '#fff' }} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

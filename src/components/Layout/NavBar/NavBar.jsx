import React from 'react';
import './NavBar.css';
import SearchBox from '../../SearchBox/SearchBox';

const NavBar = props => {
  return (
    <nav className="main-menu">
     <div className="main-menu__container">
        <div className="main-menu__left">
          <i className="fa fa-spotify"></i>
         <h1 className="spotify-title">Spotify</h1>
        </div>
        <div className="main-menu__right">
          <SearchBox 
             inputValue={props.inputValue}
             onChangeHandler={props.onChangeHandler}
             onClickHandler={props.onClickHandler} 
          />
        </div>
     </div>
    </nav>
  );
};

export default NavBar;
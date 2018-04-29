import React from 'react';
import './SearchBox.css';

const SearchBox = ({ inputValue, onChangeHandler, onClickHandler}) => {
  return (
    <div className="search-wrapper">
      <input 
         className="search_box" 
         type="text" 
         placeholder="Search..." 
         value={inputValue} 
         onChange={onChangeHandler}
      />
      <i className="fa fa-search" style={{color: '#fff', padding: '10px'}} onClick={onClickHandler}></i>
    </div>
  );
}; 

export default SearchBox;
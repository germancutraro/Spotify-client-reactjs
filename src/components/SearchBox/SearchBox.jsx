import React from 'react';
import './SearchBox.css';

const SearchBox = ({ inputValue, onChangeHandler, onClickHandler }) => {
  return (
    <div className='search-wrapper'>
      <input
        className='search_box'
        type='text'
        placeholder='Search...'
        value={inputValue}
        onChange={onChangeHandler}
        onKeyDown={e => (e.key === 'Enter' ? onClickHandler() : null)}
      />
    </div>
  );
};

export default React.memo(SearchBox);

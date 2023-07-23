import React from 'react';
import "./SearchFilter.scss";

const SearchFilter = () => {
  return (
    <div className='SearchFilterWrap'>
        <input type="text" placeholder='Enter search keyword'/>
        <button>search</button>
    </div>
  )
}

export default SearchFilter;
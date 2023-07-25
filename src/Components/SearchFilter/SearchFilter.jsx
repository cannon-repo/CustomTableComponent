import React, { useEffect, useState } from 'react';
import "./SearchFilter.scss";

const SearchFilter = ({setSearchFilter}) => {

  const [value, setValue] = useState("");

  useEffect(() => {
    if(value.length > 0) {
      setSearchFilter(value);
    } else {
      setSearchFilter(null);
    }
  }, [value]);

  

  return (
    <div className='SearchFilterWrap'>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter search keyword'/>
        <button>search</button>
    </div>
  )
}

export default SearchFilter;
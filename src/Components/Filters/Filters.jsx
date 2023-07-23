import React from 'react';
import "./Filters.scss";
import SearchFilter from '../SearchFilter/SearchFilter';

const Filters = ({setShowModal}) => {

  const showModal = () => {
    setShowModal(true);
  }

  return (
    <div className='Filters'>
        <SearchFilter/>
        <button className='ColumnFilterButton' onClick={showModal}>manage filters</button>
    </div>
  )
}

export default Filters;
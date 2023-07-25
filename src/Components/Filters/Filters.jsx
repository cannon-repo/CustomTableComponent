import React from 'react';
import "./Filters.scss";
import SearchFilter from '../SearchFilter/SearchFilter';

const Filters = ({setShowModal, setSearchFilter}) => {

  const showModal = () => {
    setShowModal(true);
  }

  return (
    <div className='Filters'>
        <SearchFilter setSearchFilter={setSearchFilter}/>
        <button className='ColumnFilterButton' onClick={showModal}>manage filters</button>
    </div>
  )
}

export default Filters;
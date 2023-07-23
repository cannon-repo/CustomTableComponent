import React from 'react';
import "./ColumnFilter.scss";

const ColumnFilter = ({showModal, setShowModal}) => {

  const style = {
    display: showModal ? 'flex' : 'none'
  }

  const hideModal = () => {
    setShowModal(false);
  }

  return (
    <div className='ColumnFilterWrap' style={style}>
        <div className='ColumnFilterBackDrop' onClick={hideModal}></div>
        <div className='ColumnFilterModal'>
            
        </div>
    </div>
  )
}

export default ColumnFilter;
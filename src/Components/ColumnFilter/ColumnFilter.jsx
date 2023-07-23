import React from "react";
import "./ColumnFilter.scss";
import EachFilter from "../EachFilter/EachFilter";

const ColumnFilter = ({ showModal, setShowModal, keys }) => {
  const style = {
    display: showModal ? "flex" : "none",
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="ColumnFilterWrap" style={style}>
      <div className="ColumnFilterBackDrop" onClick={hideModal}></div>
      <div className="ColumnFilterModal">
        <EachFilter keys={keys} />
        <div className="FilterActions">
          <button className="AddFilter">+</button>
          <button className="ClearFilter">clear all filters</button>
        </div>
        <div className="ModalActions">
          <button onClick={hideModal}>cancel</button>
          <button>apply</button>
        </div>
      </div>
    </div>
  );
};

export default ColumnFilter;

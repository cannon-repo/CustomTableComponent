import React, { useState } from "react";
import "./TableWrapper.scss";
import Table from "../Table/Table";
import Filters from "../Filters/Filters";
import ColumnFilter from "../ColumnFilter/ColumnFilter"; 

const TableWrapper = ({ data }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="TableWrapper">
      <ColumnFilter setShowModal={setShowModal} showModal={showModal}/>
      <Filters setShowModal={setShowModal}/>
      <Table data={data} />
    </div>
  );
};

export default TableWrapper;

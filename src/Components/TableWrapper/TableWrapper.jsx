import React, { useEffect, useState } from "react";
import "./TableWrapper.scss";
import Table from "../Table/Table";
import Filters from "../Filters/Filters";
import ColumnFilter from "../ColumnFilter/ColumnFilter"; 

const TableWrapper = ({ data }) => {

  const [showModal, setShowModal] = useState(false);

  const [filters, setFilters] = useState([]);

  const [searchFilter, setSearchFilter] = useState(null);

  return (
    <div className="TableWrapper">
      <ColumnFilter setShowModal={setShowModal} showModal={showModal} keys={data[0]}/>
      <Filters setShowModal={setShowModal} filters={filters} setSearchFilter={setSearchFilter}/>
      <Table data={data} />
    </div>
  );
};

export default TableWrapper;

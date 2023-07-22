import React from "react";
import "./TableWrapper.scss";
import Table from "../Table/Table";

const TableWrapper = ({ data }) => {
  return (
    <div className="TableWrapper">
      <Table data={data} />
    </div>
  );
};

export default TableWrapper;

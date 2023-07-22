import React from "react";

const Table = ({ data }) => {
  return (
    <table className="Table">
      <thead>
        <tr>
          {data.length > 0 && Object.keys(data[0]).map((key, index) => <th key={index}>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
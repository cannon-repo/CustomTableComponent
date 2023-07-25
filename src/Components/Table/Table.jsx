import React from 'react';
import "./Table.scss";

const Table = ({data}) => {
  return (
    <table className="Table">
        <thead className="TableHead">
          <tr className="TableRow">
            {data.length > 0 &&
              Object.keys(data[0]).map((key, index) => {
                return (
                  <th className="TableHeadData" key={index}>
                    {key}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="TableRow">
              {Object.values(item).map((value, index) => (
                <td className="TableRowData" key={index}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default Table
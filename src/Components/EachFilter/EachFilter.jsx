import React from "react";
import "./EachFilter.scss";
import {IoClose} from "react-icons/io5";

const EachFilter = ({ keys }) => {
  return (
    <div className="EachFilter">
      <select>
        {Object.keys(keys).map((key, index) => {
          return (
            <option key={index} value={key}>
              {key}
            </option>
          );
        })}
      </select>
      <input type="text" placeholder="Filter keyword" />
      <button><IoClose/></button>
    </div>
  );
};

export default EachFilter;

import React from "react";
import Button from "./Button";

const Table = ({ columns, row, component, history }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {/* Rendering table headers dynamically from the columns prop */}
          {columns?.map((column, index) => (
            <th key={index} scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {row?.map((rowItem, index) => (
          <tr key={index}>
            {/* Rendering row data */}
            <td>{rowItem?.name}</td>
            <td>{rowItem?.uniqueId}</td>
            <td>{rowItem?.status}</td>
            <td>
              <Button text="Delete" className="bg-danger text-white" />
            </td>
          </tr>
        ))}

        {component === "assetHistory" &&
          history?.map((rowItem, index) => (
            <tr key={`assetHistory-${index}`}>
              <td>{rowItem?.asset?.name}</td>
              <td>{rowItem?.employee?.name}</td>
              <td>{rowItem?.action}</td>
              <td>{rowItem?.actionDate}</td>
              <td>{rowItem?.notes}</td>
            </tr>
          ))}

        {component === "issueReturn" &&
          history?.map((rowItem, index) => (
            <tr key={`issueReturn-${index}`}>
              <td>{rowItem?.uniqueId}</td>
              <td>{rowItem?.action}</td>
              <td>{rowItem?.actionDate}</td>
              <td>{rowItem?.notes}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;

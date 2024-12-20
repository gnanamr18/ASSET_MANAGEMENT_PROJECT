import React from "react";
import Button from "./Button";
import { showAlert } from "./SweetAlert";

const Table = ({ columns, row, component, history, dept }) => {
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
              <Button
                text={
                  component === "employee"
                    ? "Resign"
                    : component === "asset"
                    ? "Scrap"
                    : null
                }
                handleClick={() => {
                  if (component === "employee") {
                    showAlert(
                      "Yes, Mark them Resign",
                      component,
                      rowItem.uniqueId
                    );
                  } else if (component === "asset") {
                    showAlert(
                      "Yes, Mark them obsolete",
                      component,
                      rowItem.uniqueId
                    );
                  }
                }}
                className="bg-danger text-white"
              />
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

        {component === "dept" &&
          dept?.map((rowItem, index) => (
            <tr key={`issueReturn-${index}`}>
              <td>{rowItem?.id}</td>
              <td>{rowItem?.dept}</td>
              <td>{rowItem?.deptSymbol}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;

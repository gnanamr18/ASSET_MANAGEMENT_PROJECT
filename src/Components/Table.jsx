import React from 'react'
import Button from './Button'

const Table = ({columns,row}) => {
  console.log(row,'row')
  return (
    <table class="table">
  <thead>
  <tr>
          {/* Rendering table headers dynamically from the columns prop */}
          {columns.map((column, index) => (
            <th key={index} scope="col">{column.name}</th>
          ))}
        </tr>
  </thead>
  <tbody>
  {row?.map((row, index) => (
  <tr key={index}>
    {/* Uncomment if you want to include a row index */}
    {/* <th scope="row">{index + 1}</th> */}
    <td>{row?.name}</td>
    <td>{row.uniqueId}</td>
    <td>{row.status}</td>
    <td>
      <Button text="Delete" className="bg-danger text-white" />
    </td>
  </tr>
))}

  </tbody>
</table>
  )
}

export default Table
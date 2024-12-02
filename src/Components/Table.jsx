import React from 'react'
import Button from './Button'

const Table = ({columns}) => {
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <Button text="Delete" className="bg-danger text-white" />
    </tr>
  </tbody>
</table>
  )
}

export default Table
import React from 'react'
import { Table } from 'react-bootstrap'
const History = () => {
  return (
    <>
    <div className='container mt-5'>
       <div className='row'>
         <div className="col-12">
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Timestamp</th>
          <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td></td>
          <td>@mdo</td>
          <td><i className="fa-solid fa-trash"></i></td>
        </tr>
      </tbody>
    </Table>
         </div>
       </div>
    </div>
    </>
  )
}

export default History
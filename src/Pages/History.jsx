import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { deleteHistory, getWatchHistory } from '../Services/allAPI'
const History = () => {

  const [videohistory,setvideohistory]=useState([])
   
   const getHistory=async()=>{
      const res=await getWatchHistory()
      console.log(res);
      if(res.status<=200 && res.status<300){
          setvideohistory(res.data)
      }
   }
  
  useEffect(()=>{
      getHistory()
  },[])

  const historyDelete=async(historyId)=>{
     await deleteHistory(historyId)
     getHistory()
  }

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
        {
          videohistory.length>0?
          videohistory.map((history,index)=>(
            <tr key={history?.id}>
            <td>{index+1}</td>
            <td>{history?.caption}</td>
            <td> <a href={history?.url} target='_blank'>{history?.url}</a> </td>
            <td> {history?.timeStamp}</td>
            <td><i onClick={()=>{
                historyDelete(history?.id)
            }} className="fa-solid fa-trash"></i></td>
          </tr>
          ))
          :
          <p className='text-white '>No Watch History</p>
        }
       
      </tbody>
    </Table>
         </div>
       </div>
    </div>
    </>
  )
}

export default History
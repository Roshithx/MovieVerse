import React, { useState } from 'react'
import AddVideo from '../Components/AddVideo'
import { Link } from 'react-router-dom'
import View from '../Components/View'
const Upload = () => {
  const [addvideoRes,setaddvideoRes]=useState("")
  return (
    <>
      <div className='container'>
        <div className='row'>
           <div className='col-12 d-flex justify-content-between align-items-center'>
           <AddVideo setaddvideoRes={setaddvideoRes}/>
           <Link to={'/history'} className=' '>Watch History</Link>
           </div>
        </div>
        <div className="row">
           <div className="col-12">
            <h5 className='mt-5'>All Movies</h5>
            <View addvideoRes={addvideoRes}/>
           </div>
        </div>
   
        </div>  
    </>
  )
}

export default Upload
import React from 'react'
import VideoCard from './VideoCard'
import Categories from './Categories'

const View = () => {
  return (
    <>
     <div className="container mt-5">
        <div className="row ">
            <div className="col-6 d-flex gap-3 flex-wrap">
             <VideoCard/>
             <VideoCard/>
            </div>
            <div className="col-6">
              <Categories/>
            </div>
        </div>
     </div>
    </>
  )
}

export default View
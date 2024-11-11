import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Categories from "./Categories";
import {  getVideoAPI } from "../Services/allAPI";
const View = ({addvideoRes}) => {
  const [allvideos, setallvideos] = useState([]);
  const [deletevideoResponse,setdeletevideoResponse]=useState("")

  useEffect(() => {
    getAllVideos();
  }, [addvideoRes,deletevideoResponse]);



  const getAllVideos = async () => {
    const result = await getVideoAPI();
    if (result.status >= 200 && result.status < 300) {
      setallvideos(result.data);
    }
  };
  console.log(allvideos);



  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 d-flex flex-wrap gap-5">
            {allvideos.map((video) => (
              <VideoCard key={video.id} videodetails={video} setdeletevideoResponse={setdeletevideoResponse} />
            ))}
          </div>
          <div className="col-6">
            <Categories />
          </div>
        </div>
      </div>
    </>
  );
};

export default View;

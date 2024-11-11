
import commonAPI from "./CommonApi"
import SERVERURL from "./ServerUrl"

//Upload video 
export const uploadVideoAPI=async(uploadVideo)=>{
   return await commonAPI("POST",`${SERVERURL}/allvideos`,uploadVideo)
} 

//get video to view component
export const getVideoAPI=async()=>{
    return await commonAPI("GET",`${SERVERURL}/allvideos`,"")
}

//get video from view component
export const deleteVideoAPI=async(deleteVideo)=>{
   return await commonAPI("DELETE",`${SERVERURL}/allvideos`,deleteVideo)
}
//store watch history

export const storeHistory= async(storevideo)=>{
   return await commonAPI("POST",`${SERVERURL}/history`,storevideo)
}

//get watch history

export const getWatchHistory=async()=>{
   return await commonAPI("GET",`${SERVERURL}/history`,"")
}

//delete history
export const deleteHistory=async(historyId)=>{
   return await commonAPI("DELETE",`${SERVERURL}/history/${historyId}`,{})
}

//delete videocard
export const deleteVideoCard=async(videoID)=>{
   return await commonAPI("DELETE",`${SERVERURL}/allvideos/${videoID}`,{})
}

//upload category

export const addCategory=async(category)=>{
    return await commonAPI("POST",`${SERVERURL}/categories`,category)
}

// get category

export const getCategory=async()=>{
   return await commonAPI("GET",`${SERVERURL}/categories`,"")
}

// delelte catergory

export const deleteCategory=async(categoryId)=>{
   return await commonAPI("DELETE",`${SERVERURL}/categories/${categoryId}`,{})
}
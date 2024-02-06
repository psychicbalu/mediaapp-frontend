const { commonAPI } = require("./commonAPI");
const { serverUrl } = require("./serverUrl");


// Upload video
export const uploadVideo = async (reqBody) => {
    // Make POST http request "http://localhost:4000/videos" to add videos to the json server
    // Return response to the add component
    return await commonAPI("POST", `${serverUrl}/videos`, reqBody);
};

// Get all videos from json
export const getAllVideos = async () => {
    // Make GET http request "http://localhost:4000/videos" to get all videos from the json server
    // Return response to the view component
    return await commonAPI("GET", `${serverUrl}/videos`, "");
};

// add to category
export const addToCategory = async (reqBody)=>{
    // make POST http request http://localhost:4000/category to store videos to 
    //the json server return response to the to the Category component
    return await commonAPI ("POST",`${serverUrl}/categories`,reqBody)
}

export const deleteHistory =async (id)=>{
    //make DELELTE http request "http://localhost:4000/history" to delete  videos from the json server return response to the videocard componrnt

    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})
}

//get all  categories
export const getAllCategories=async()=>{
    // make GET http request http://localhost:4000/category to store videos to 
   //the json server return response to the to the Category component
   return await commonAPI ("GET",`${serverUrl}/categories`,"")
}

//update category

export const updateCategories=async(id,body)=>{
    // make GET http request http://localhost:4000/category to delete videos to 
   //the json server return response to the to the Category component
   return await commonAPI ("PUT",`${serverUrl}/categories/${id}`,body)
}

//delete all  categories
export const deleteCategories=async(id)=>{
    // make GET http request http://localhost:4000/category to delete videos to 
   //the json server return response to the to the Category component
   return await commonAPI ("DELETE",`${serverUrl}/categories/${id}`,{})
}

// Get a video
export const getAVideo = async (id) => {
    // Make GET http request "http://localhost:4000/videos" to get a specific video from the json server
    // Return response to the video card component
    return await commonAPI("GET", `${serverUrl}/videos/${id}`, "");
};

// Delete a video
export const deleteVideo = async (id) => {
    // Make DELETE http request "http://localhost:4000/videos" to delete a specific video from the json server
    // Return response to the video card component
    return await commonAPI("DELETE", `${serverUrl}/videos/${id}`, {});
};

//store watching video history to json server

export const addTohistory =async (videoDetails)=>{

    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}

export const getallhistory =async ()=>{

    return await commonAPI("GET",`${serverUrl}/history`,"")
}
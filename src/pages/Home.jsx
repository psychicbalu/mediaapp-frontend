import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {

  const[uploadVideoServerResponse,setUploadVideoServerRespnose] = useState({})
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
      <div className='add-videos'>
      <Add/>
      </div>
      <Link to={'/watch-history'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}>Watch History</Link>
    </div>

    <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="all-videos col-lg-9">
        <h3>All Videos</h3>
        <View/>
      </div>

      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-between">
        
        <div className="catagory col-lg-3">
          <Category />
        </div>



     </div>

    </div>

    </>

  )
}

export default Home
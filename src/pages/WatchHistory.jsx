import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getallhistory , deleteHistory } from '../services/allAPI'

function WatchHistory() {
  const [history,setHistory] = useState([])
  const handleHistory = async()=>{  
    // make api call
    const {data} = await getallhistory()
    setHistory(data)
  }
  console.log(history);

  useEffect(()=>{
    handleHistory()
  },[])

const handleDeleteHistory = async(id)=>{
// await api call 
await deleteHistory(id)
// update state
// return remaning history
handleHistory()


}


  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none',color:'white',fontSize:'20px', color:'blueviolet'}}><i class="fa-solid fa-circle-arrow-left fa-beat"></i>Back to Home</Link> 
    </div>

    <table className='table mt-5 mb-5 container'>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>URL</th>
      <th>TimeStamp</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {history && history.map((item, index) => (
      console.log("itemss",item),
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item?.caption}</td>
        <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
        <td>{item?.timeStamp}</td>
        <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
      </tr>
    ))}
    {!history && <tr><td colSpan="4"><p className='fw-bolder text-danger fs-5'>Nothing to display</p></td></tr>}
  </tbody>
</table>

    </>
  )
}

export default WatchHistory
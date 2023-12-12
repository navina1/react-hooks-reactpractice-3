import React, { useEffect, useState } from 'react';
import axios from 'axios'
//useEffect Hook
function Post() {
    const [postId,setPostId]=useState(1);
    const [data,setData]=useState(null)
    const handleClick= async() =>{
       const data=await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
       setData(data)
    }
    
    useEffect(()=>{
        const getData=async()=>{
            const data=await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            setData(data)
        }
        getData()
    },[])//dependency list is empty , so it will run only once-in initial rendering only.
  return (
    <div>
        <h2>Post Id - {postId}</h2>
        <input type='number' value={postId} onChange={(e)=>setPostId(e.target.value)}/>
        <button onClick={handleClick}>Submit</button>
        <div>{JSON.stringify(data)}</div>
    </div>

  )
}

export default Post
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { v4 as uuidV4 } from "uuid";

function Help() {
  
  const [id,setId]=useState('');
  const [input,setInput]=useState('');
  const [flag,setFlag]=useState(false);

  const createOwnGoogleId=()=>{
      setId(uuidV4());
  }
  const goToGoogleDoc=()=>{
   setFlag(true);
  }
  return (
   
    <>
    {
    (!flag)?
    <>
    <h1>create your own google document</h1>
    <button onClick={createOwnGoogleId}>create your own document</button>
    <h1>your generated googledoc id:{id}</h1>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={goToGoogleDoc}>Enter</button>

  
    </>:<>
    <Navigate to={`/documents/${input}`} />
    </>

    }
    
    

    
    </>

  )
}

export default Help
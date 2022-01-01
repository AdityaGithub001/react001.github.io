import React, { useEffect } from "react"
import { useState } from 'react'

function Forloo(props){

    const[name,setName]=useState(0);

    useEffect(()=>{
        console.log("component is mounted")

        console.log("component is updated")
    },[])

    

    return(
    <div>
         <h1>{name}</h1>
          <button onClick={()=>setName(name+1)}>change</button>
          </div>
    
    )
}
 export default Forloo;
         
        

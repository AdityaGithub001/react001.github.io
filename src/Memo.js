import React, { useMemo } from "react";
import { useState } from "react/cjs/react.development";

const Memo=()=>{
    const[count,setCount]=useState()
    const[i,setI]=useState(0)

    const handleClick=(e)=>{
            setCount(e.target.value)
    }
    const product=useMemo(()=>{
        return multiplication(count)
    },[count])

    return(
        <>
        <h1>{product}</h1>
        <input type="text" onChange={handleClick}/><br/>
        <button onClick={()=>setI(i+5)}>button</button><h1>{i}</h1>
        </>
    )
}

const multiplication=(n)=>{
     console.log("multi is rendering")
     return n>0?n*5:null;
}
export default Memo;
import { getByTitle } from "@testing-library/react";
import React,{useState} from "react";
import Info from "./Info";
const Info1=(props)=>{
    const[details,setDetails]=useState({
        name:'sachin',age:'30',place:'bgm'
    });

    return(
        <div>
            <h1>{props.title}</h1>
            <h1>{details.age}</h1>
            <h1>{details.place}</h1>
        </div>
    )
    
}

export default Info1;
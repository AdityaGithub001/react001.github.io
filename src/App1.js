import React,{useState} from 'react';
import './App.css';

const App1=()=>{
       const [num,setNum]=useState(0);

       const changeplus=()=>{
               setNum(0)
       }

       const changeminus=()=>{
               setNum(num-1)
       }

 
  



return(
        <center>
        <div id="demo">
        <button onClick={changeplus} style={{width:'60px',height:'60px',fontSize:"30px"}}>+</button>
        <h1>{num}</h1>
        <button onClick={changeminus} style={{width:'60px',height:'60px',fontSize:"30px"}}>-</button>
        </div>
        </center>
)
      
}

export default App1;


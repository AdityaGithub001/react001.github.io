import React,{useReducer} from "react"

let initialstate=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increase':return state+1;
        case 'decrease':return state-1;
        case 'reset':return initialstate;
        default:return state
    }
}
const Reduce=()=>{
    const[count,dispatch]=useReducer(reducer,initialstate)
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>dispatch('increase')}>increase</button>
        <button onClick={()=>dispatch('decrease')}>decrease</button>
        <button onClick={()=>dispatch('reset')}>reset</button>

        </>
    )
}

export default Reduce;
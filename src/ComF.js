import react from "react";
import Usercontext from "./Usercontext";

const ComF=()=>{
    
    return(
        <div>
        <h1>Component F</h1>
        <Usercontext.Consumer>
            {
                (data)=>{
                    return(
                        <h1>{data}</h1>
                    )
                }
            }
        </Usercontext.Consumer>

                
                
            
    
        </div>
    )
}

export default ComF;
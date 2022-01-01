//import { render } from "@testing-library/react";
import React,{Component} from "react";
class Info extends Component{
    constructor(){
        super()
        this.state={
            name:'aditya',age:'23',place:'bgm'
        }
    }
      handleclick=()=>{setTimeout(()=>{
        this.setState({name:'prajwal',age:'30'})
      },2000)
          
          
      }


render(){
   const{name,age,place}=this.state

    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{place}</h1>
            <button onClick={this.handleclick}>change</button>
        </div>
    )
}}


    

    export default Info;

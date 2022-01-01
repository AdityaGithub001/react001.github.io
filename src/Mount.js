import React,{Component} from "react"

class Mount extends Component{
    constructor(){
        super();
        this.state=({
            name:"aditya"
        })
    
    }

    componentDidMount(){
        console.log("component")
    }
    
    render(){
        console.log("render")
        return(
            <>
            <h1>{this.state.name}</h1>
            <button onClick={()=>{this.setState({name:"sachin"})}}>update</button>
            </>
        )
    }
}
export default Mount;
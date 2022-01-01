import React, { Component } from 'react'
import './App.css'

export default class Api extends Component {
    constructor() {
        super()
        this.state = {
            arr: []
        }

    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    arr: result,
                    search:"",
                    loaded:false
                
                })
                console.log(result)
            })
            .catch(error => console.log(error))
    }

    render() {
        return(
        <>
            <center>
            <input type="search" placeholder="search" onChange={(e)=>this.setState({search:e.target.value})}/><br/>&nbsp;&nbsp;
            <table  border="1" cellSpacing="0" className='apitable'>
            
                
                <thead className='apibody'>
                    <tr style={{color:"red"}}>
                        <td>S.NO</td>
                        <td>Image</td>
                        <td>Title</td>
                        <td>Price</td>
                    </tr>
                </thead>
                {
                    this.state.arr.filter((value)=>{
                        if(this.state.search==""){
                            return value
                        }
                        else if(value.title.toLowerCase().includes(this.state.search.toLowerCase())){
                            return value
                        }
                    })
                    .map((item,i)=>
                    
                      <tr key={i}>
                          <td>{i+1}</td>
                          <td><img src={item.image} width="100px" height="100px"></img></td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                      </tr>
                
                    )
                
                    
                }
                
                
                
            </table>
            </center>
            </>
            
        )
    }
}
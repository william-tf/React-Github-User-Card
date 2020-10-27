import React from 'react'
import axios from 'axios'
import './Card.css'

class CardMaker extends React.Component{
    constructor(){
        super()
        this.state = {
            user:[]
        }
    }

    componentDidMount(){
      
        axios.get(`https://api.github.com/users/williamtf`)
        .then(res => {
          //console.log(res)
          this.setState({user:res.data})
        })
        .catch(err => console.log(err))
         }





render(){

    return(
        <div className="cardContainer">
            
            <img src={this.state.user.avatar_url} width='200'/>  
            <h3>{this.state.user.login}</h3>
            <h3>{this.state.user.type}</h3> 
        </div>
    )
}
}


export default CardMaker
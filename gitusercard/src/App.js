import './App.css';
import React from 'react'
import axios from 'axios'
import GitForm from './components/GitForm'
import CardMaker from './components/CardMaker'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      users:[]
    }
  }

  // componentDidMount(){
  // // this.fetchUsers('williamtf')
  // axios.get(`https://api.github.com/users/williamtf`)
  // .then(res => {
  //   //console.log(res)
  //   this.setState({users:res.data})
  // })
  // .catch(err => console.log(err))
  //  }

  fetchUsers = (user) => {

    axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      this.setState({users:res.data})
    })
    .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({users: event.target.value})
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.fetchUsers(this.state.users)
    this.setState({users:''})
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
        <GitForm handleChange={this.handleChange} handleSearch={this.handleSearch}/>
        </header>
      <CardMaker />
      </div>
    );
  }

  }

export default App;

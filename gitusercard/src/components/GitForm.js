import React from 'react'


class GitForm extends React.Component{

    


    render(){
        return(
            <form onSubmit={this.props.handleSearch}>
                <input onChange={this.props.handleChange} type="text" placeholder="find a user"/>
                <button>Search</button>
            </form>
        )
    }
}

export default GitForm
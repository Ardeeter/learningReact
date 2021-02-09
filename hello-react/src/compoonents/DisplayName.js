
import React, { Component } from 'react'

class DisplayName extends Component {

    render(props){
        return(
        <h1>Hi {this.props.name}! You are {this.props.age} years old.</h1>
        )
    }  
}

export default DisplayName
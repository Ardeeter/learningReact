
import React, { Component } from 'react'

class DisplayName extends Component {

    render(props){
        return(
        <h1>Hi {this.props.name}!</h1>
        )
    }  
}

export default DisplayName
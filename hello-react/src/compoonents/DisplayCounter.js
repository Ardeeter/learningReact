

import React, { Component } from 'react'
import DisplayName from './DisplayName'

class DisplayCounter extends Component {
  render() {
    return (
      <>
        <h1>{this.props.ctr}</h1>
      </>
    )
  }
}

export default DisplayCounter

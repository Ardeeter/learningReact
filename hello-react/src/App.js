
import React, { Component } from 'react'
import DisplayName from './compoonents/DisplayName'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <button>Click Me</button>
        <DisplayName name="Ally Deeter" />
      </div>
    )
  }


}

export default App

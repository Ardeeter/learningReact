
import React, { Component } from 'react'
import DisplayName from './compoonents/DisplayName'

class App extends Component {

  constructor(){
    super()

    this.counter = 0
    // this.handleIncrementClick = this.handleIncrementClick.bind(this)
  }

  handleIncrementClick =() => {
    console.log('handleIncrementClick')

    this.counter++
    console.log(this.counter)
  }

  render() {
    return (
      <div>
        <h1>{this.counter}</h1>
        <button onClick =  {this.handleIncrementClick}>Increment</button>
      </div>
    )
  }


}

export default App

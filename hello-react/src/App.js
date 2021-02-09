
import React, { Component } from 'react'
import DisplayName from './compoonents/DisplayName'

class App extends Component {

  constructor(){
    super()

    this.state = {
      counter: 0
    }

    // this.counter = 0
    // this.handleIncrementClick = this.handleIncrementClick.bind(this)
  }

  handleIncrementClick = () => {

    this.setState({
      counter: this.state.counter + 1
    })
    // console.log('handleIncrementClick')

    // this.counter++
    // console.log(this.counter)
  }

  handleDecrementClick = () => {

    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick =  {this.handleIncrementClick}>Increment</button>
        <button onClick = {this.handleDecrementClick}>Decrement</button>
      </div>
    )
  }


}

export default App

import React, { Component } from 'react'

class App extends Component {


  constructor(){
    super();

    this.state = {
      count: 0
    }
  }

  increment = (event) => {

    console.log(event.target)

    // re-render

    this.setState({
      count: this.state.count + 1
    })

    // this.state.count = this.state.count + 1 (NEVER DO THIS)
  }

  decrement = (event) => {
    
    this.setState({
      count: this.state.count - 1
    })
  }
  


  render() {

    // code this.method
    // this.props
    // this.state
    // bind, call, apply


    return (
      <>
        <button onClick={this.increment}>+</button>
        <div>{this.state.count}</div>
        <button onClick={this.decrement}>-</button>
      </>
    )
  }
}

export default App


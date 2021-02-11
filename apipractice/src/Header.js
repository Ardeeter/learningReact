import React from 'react'
import logo from './logo.svg';

export const sayHello = (name) => {
    alert(`${name} has entered the chat`)
}

const Header = ({ firstName, lastName, age }) => {
  return (
    <>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, {firstName}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </>
  )
}

export default Header

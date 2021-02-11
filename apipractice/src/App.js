import React from 'react';
import Header, {sayHello} from './Header';
import './App.css';

function App(props) {
  const initialState = {
    firstName: '',
    lastName: '',
    age: ''
  }

  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    setState({
      ...state,
      firstName: 'Alex'
    })
  }, [])

  return (
    <div className="App">
      <Header {...state}/>
    </div>
  );
}

export default App;

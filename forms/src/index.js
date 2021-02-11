import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseLayout from './components/layout/BaseLayout'
import Forms from './components/Forms'
import FormHooks from './components/FormHooks'
import Parent from './components/liftingState/Parent'
import ParentHook from './components/liftingState/ParentHook'
import ProjectManagement from './components/projectManagement/ProjectManagement'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

const NoMatch = () => <div>Error: Could Not Find Route</div>


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/forms' component={Forms} />
          <Route path='/formhooks' component={FormHooks} />
          <Route path='/lifting_state' component={Parent} />
          <Route path='/lifting_state_hooks' component={ParentHook} />
          <Route path='/project_management' component={ProjectManagement} />
          <Route component={NoMatch} />
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


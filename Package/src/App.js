import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import Navbar from './components/Navbar'


const App = ({history}) => {
  return (
    <div>
    
      <Router history={history}>
      <Switch>
      <Route path="/" component={Navbar} />
      </Switch>
      
      
      </Router>
    
    </div>
  )
}

export default App

/*
      <Switch>
      <Route path="/transactions" component={Navbar} />
      </Switch>
      <Switch>
      <Route path="/payments" component={Navbar} />
      </Switch>
      */
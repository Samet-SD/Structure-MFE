import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
    
      <BrowserRouter>
      <Switch>
      
      <Route exact path="/" component={Navbar} />
      </Switch>
      </BrowserRouter>
    
    </div>
  )
}

export default App
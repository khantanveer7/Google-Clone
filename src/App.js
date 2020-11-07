import React from 'react'
import Home from './pages/home/Home'
import SearchPage from './pages/searchPage/SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

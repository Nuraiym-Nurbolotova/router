import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();





const Contacts = () => (
  <div>
    <h1>
      Contacts
    </h1>
  </div>
)

class Navigation extends React.Component{
  render(){
    return(
      <BrowserRouter history={history}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>

        </ul>
      </div>
      
      

      <hr/> 

      <Route exact path = "/" component={Home} />
      <Route path = "/about" component={About} />
      <Route path = "/contact" component={Contacts} />

      </BrowserRouter>
    )
  }
}
export default Navigation;
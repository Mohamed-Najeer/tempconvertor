import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Celsius} from './jsx/celsius';
import {Fahrenheit} from './jsx/fahrenheit';

class Home extends React.Component{
  render(){

    return(
      <Router>
     <nav className="navbar navbar-expand-md bg-dark navbar-dark">
<a className="navbar-brand" href="#">Temp Convertor</a>
</nav>
     <nav className="navbar navbar-expand-md bg-light navbar-dark">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
<h5 className="mx-4 pt-2" >Convert to</h5>
<ul className="navbar-nav " >
        <li className="d-flex nav-item">
          <a className="nav-link active " > <Link to="/celsius">Celsius</Link></a>
        </li>
        <li className="d-flex nav-item">
          <a className="nav-link " ><Link to="/fahrenheit">Fahrenheit</Link></a>
        </li>
      </ul>
</div>
</nav>
<h4 className="text-center my-5">Welcome to the Temperature convertor</h4>
    <div>
      <Switch>
        <Route path="/celsius">
          <Celsius />
        </Route>
        <Route path="/fahrenheit">
        <Fahrenheit/>
        </Route>
      </Switch>
    </div>
  </Router>
    )
  } 
}
ReactDOM.render(<Home/>, document.getElementById('root'));
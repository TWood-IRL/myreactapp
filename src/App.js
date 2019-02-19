// Import React
import React, { Component } from 'react';
import Home from './Home' ; 
import Welcome from './Welcome' ; 
import Navigation from './Navigation' ; 
import Login from './Login' ; 
import Meeting from './Meeting' ; 
import Register from './Register' ; 
import {Router} from '@reach/router' ; 
class App extends Component {

  constructor(){
    super() ; 
    this.state  = {
      user: 'Tom' 
    } ; 
  }

  render() {
    return (
      <div> 
        <Navigation user={this.state.user} /> 
        {this.state.user && <Welcome user={this.state.user} />}  

        <Router> 
          <Home path="/" user={this.state.user} /> 
          <Login path="/login"  /> 
          <Meeting path="/meetings"  /> 
          <Register path="/register"  /> 
          <Login path="/login"  /> 
        </Router>

      </div>
    ) ;  
  } 
 
}

export default App;

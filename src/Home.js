import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component{ 
  render() { 
      return (
    <div className="outer">
      <h1 className="banner"> This is my Landing Page, its a dumb Component. Click <Link to="/data" className="link">here</Link> to navigate to the next page </h1>
    </div>
    );
  }
}


export default Home;

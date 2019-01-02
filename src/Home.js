import React, { Component } from 'react';

class Home extends Component{ 
  render() { 
      return (
    <div className="outer">
      <h1 className="banner"> This is my Landing Page, its a dumb Component. Click <a className="link" href="/data">here</a> to navigate to the next page </h1>
    </div>
    );
  }
}


export default Home;

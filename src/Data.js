import React, { Component } from 'react';

class Data extends Component{ 

    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount = () => {
        this.fetchData()
    }


    fetchData = () =>{ 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json=> 
            { this.setState({items:json.map(child => child)}); }
            );
         }

  render() { 
      return (
          <div className="outer">
          <h1 className="banner2"> This is a smart Component, here's some data it fetches. Click <a className="link2" href="/">here</a>  to go back.</h1>
          <div className="data">
    <ul>

 { this.state.items.map((item,i) => <li key={i}>{ item.title }</li>) }

    </ul>
    </div>
    </div>
    );
  }
}


export default Data;

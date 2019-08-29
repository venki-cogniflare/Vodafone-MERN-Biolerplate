import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props); 
  } 

  render() {
    location.replace("https://github.com/login/oauth/authorize?client_id=1b7302f2159fa8cd3518")
    return (  
      <div></div>
        // <a href="https://github.com/login/oauth/authorize?client_id=1b7302f2159fa8cd3518"> SigIn with gitHub</a>      
    );
  }
}

export default Home;

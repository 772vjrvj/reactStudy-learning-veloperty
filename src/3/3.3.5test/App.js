import React, { Component } from 'react';
import MyComponent from './MyComponent'

class App extends Component {
  render() {
    return (
      <MyComponent name='react' age={55}/>
    );
  }
}

export default App;
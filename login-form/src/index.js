import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginComp from './components/LoginComp';
import FunctionalComp from './components/FunctionalComp';
//import reportWebVitals from './reportWebVitals';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionalComp></FunctionalComp>
        <LoginComp></LoginComp>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))


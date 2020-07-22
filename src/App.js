import React from 'react';
import logo from './logo.svg';
import {Container, Title} from './style';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>, commit and then break stuff.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Container>
        <Title>Hello WOrld!</Title>
      </Container>
    </div>
  );
}

export default App;

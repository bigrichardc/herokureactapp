import React from 'react';
import logo from './logo.svg';
import {Container, Title} from './style';
import './App.css';

class App extends React.Component {

  state = { inColour: "red"}

    handleClick = () => this.setState({
        inColour: "green"
    })
    

  render() {
    //example of destructuring an assignment
    let {inColour} = this.state;
    let {handleClick} = this;

    return(
      
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
        <Title inputColour={inColour} onClick={handleClick}>Hello hello hello hello Wild</Title>
      </Container>
    </div>
    )
  };
}

export default App;

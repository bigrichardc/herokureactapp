import React from 'react';
import logo from './logo.svg';
import {Container, Title} from './style';
import './App.css';

class App extends React.Component {

  state = { inColour: "red", rules: 0}


  /*  change state directly
  handleClick = () => this.setState({
    inColour: "green"
  })
  */


    handleClick = () => this.setState((prevState) => {
      //get old state variables
      let {inColour, rules} = prevState;  
      console.log(prevState);
      //set existing state variable to something else
      inColour = "green";
      
      // add new state variables and add to existing, then return
      let inColours = {[`inColour${rules}`] : 'green'};
      rules++;
      return {
        inColour,
        rules,
        ...inColours
      }

      
        
    })

    get testDiv() {
      return(
      <div>HelloWorld!!!</div>
      );
    }
    

  render() {
    //example of destructuring an assignment
    let {inColour} = this.state;
    let {handleClick, testDiv} = this;

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
        {testDiv}
        <Title inputColour={inColour} onClick={handleClick}>Hello hello hello hello Wild</Title>
      </Container>
    </div>
    )
  };
}

export default App;

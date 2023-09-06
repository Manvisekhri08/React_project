import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
     //always a json object
      firstname: 'Robert',
      lastname: 'Langdon',
      
      comapny: 'Facebook'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.firstname} {this.state.lastname} and I work at {this.state.comapny} !!!
          </p>
          <button onClick={ () => { this.setState(() => {
            return {
              firstname: 'Dan', lastname: 'Brown'
            };
          },
          () => {
            console.log(this.state)
          }
          ); //setState is an asynchronous call as console.log is synchrnous call and when its get called the state might not be updated as we saw in console on second click the state got updated in console so we will use function instead
        }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;

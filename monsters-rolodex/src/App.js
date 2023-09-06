import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      monsters: [
        {
          name: 'Mike Wazowski'
        },
        {
          name: 'Sulley'
        },
        {
          name: 'Celia'
        },
        {
          name: 'Frank Oz'
        },
      ]
     //always a json object
    };
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1>{monster.name}</h1>
          })
          }
      </div>
    );
  }
}

export default App;

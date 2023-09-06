import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      monsters: [
        {
          name: 'Mike Wazowski',
          id: '12uhu11'
        },
        {
          name: 'Sulley',
          id: '12uhdu7'
        },
        {
          name: 'Celia',
          id: '627ghqhj'
        },
        {
          name: 'Frank Oz',
          id: '17wuhjqi'
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
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
              </div>
          })
          }
      </div>
    );
  }
}

export default App;

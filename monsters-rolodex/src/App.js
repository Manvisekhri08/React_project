import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      monsters: [  ]    // So if our monster's array is empty, when we get the new list of array from our API, we want to update the state object and therefore we want to re render this component.
     //always a json object
    };
  }
  componentDidMount() {     // Mounting is the first time a component gets placed onto the DOM, so the first time react renders a component onto the page that is mounting.
    fetch('https://jsonplaceholder.typicode.com/users')      // It only happens once throughout a component's life. The only time when a component might remount is if it's been on mounted meaning it's been completely removed from the DOM.
        .then(response =>                                 // when we fetch the api its going to be a promise 
          response.json()                                 // converting the response to json cz that's what we want
        )  
        .then(users =>                                   //  returns a value is going to return another promise that has been resolved.    
          //console.log(users)                             // will get the users array from api
          this.setState(() => {
            return {monsters : users}                       //return back an object where monsters now points to users.
          },
          () => {
            console.log(this.state)                        // a class component specifically that needs to leverage some kind of API call in order to get data that it needs in order to display the appropriate UI, you want to put that inside of your component did mount lifecycle method.
          }
          )
          )                            
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

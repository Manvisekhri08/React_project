import { useState, useEffect } from 'react';                // hook

import logo from './logo.svg';
import './App.css';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = (props) => {

  const [searchField, setSearchField] = useState('');             //array destructuirng from useState because it gives us an array of two values  [ value(we want to store), setValue()]
  const [monsters, setMonsters] = useState([]); 
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')        //State is updated react re renders this function fetches again gets different users sets monsters and then reruns. and stuck in an infinite loop if we don't use useEffect hook
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, [])                                                        // the only time you ever call this funtion is on mount,  because if any of the dependencies change use effect is going to call this function, but I'm passing you no dependencies, which means that nothing is ever going to change.. So nothing should ever trigger you to recall this function ever again other than the very first time when the function mounts.

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });
    setFilteredMonsters(newFilteredMonster);
  }, [monsters, searchField])

  const onSearchChange = (event) => {                                                //this way our event only gets initialised once. when inside render it was intialising again and again. 
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>MONSTERS ROLODEX</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-searchBox' />
      <Cardlist monsters={filteredMonsters} />
    </div>
  )
}



// class App extends Component {

//   /*
//   constructor runs first. inside it we intialise the state. 
//   render runs after constructor. render determine what to show, kind of like template of HTML.
//   componentDidMount runs next after render. React, run the constructor, intialised the state, now time to render the initial UI of this component. Mount intialie UI onto DOM. Once mounts, it will run.
//   **The moment state updates/changes, react knows its component is different. Now react re render. render() runs again. 
//   Once the state changes, we want to re render what component's UI is with any new values.
//   */

//   constructor() {
//     super();
//     this.state = {
//       monsters: [],                                          // So if our monster's array is empty, when we get the new list of array from our API, we want to update the state object and therefore we want to re render this component.
//       searchField: ' '
//       //always a json object
//     };
//   }
//   componentDidMount() {                                      // Mounting is the first time a component gets placed onto the DOM, so the first time react renders a component onto the page that is mounting.
//     fetch('https://jsonplaceholder.typicode.com/users')      // It only happens once throughout a component's life. The only time when a component might remount is if it's been on mounted meaning it's been completely removed from the DOM.
//       .then(response =>                                   // when we fetch the api its going to be a promise 
//         response.json()                                    // converting the response to json cz that's what we want
//       )
//       .then(users =>                                      //  returns a value is going to return another promise that has been resolved.    
//         //console.log(users)                              // will get the users array from api
//         this.setState(() => {
//           return { monsters: users }                       //return back an object where monsters now points to users.
//         }                                                      //WHENEVER SETSTATE IS CALLED RENDER IS CALLED AGAIN
//           // () => {                                           //  this is asynchronous, so we actually don't know when this data is going to come back. Once it comes back, we are going to now update the state.
//           //   console.log(this.state)                        // a class component specifically that needs to leverage some kind of API call in order to get data that it needs in order to display the appropriate UI, you want to put that inside of your component did mount lifecycle method.
//           // }
//         )
//       )
//   }

//   onSearchChange = (event) => {                                                //this way our event only gets initialised once. when inside render it was intialising again and again. 
//     //console.log({startingArray : this.state.monsters});
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {

//     // console.log('render from appjs')

//     const { monsters, searchField } = this.state;                                   // for better readability 
//     const { onSearchChange } = this;

//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField)
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>MONSTERS ROLODEX</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeHolder='search monsters' className='monsters-searchBox' />
//         <Cardlist monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;

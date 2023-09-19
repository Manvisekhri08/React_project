import { Component } from "react";

import './card-list.styles.css'

import Card from '../card/card.component'

class Cardlist extends Component {

    render() {
        // console.log(this.props.monsters)                  //empty array => from appjs in constructor the monsters array is empty, then render looged in and then in didcoponentmount we are setting full lists of monsters and getting array with data and then render is logged in for 2nd time
        // console.log('render from cardlist');              //logged
        const { monsters } = this.props                   // COMPONENET ALSO RENDER AGAIN WHEN PROPS CHANGE
        return (
            <div className="card-list"> 
                {
                    monsters.map((monster) => {
                        return (
                           <Card monster = {monster}/>
                        )})}
            </div>
        )
    }

}


export default Cardlist;
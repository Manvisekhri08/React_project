import { Component } from "react";

class Cardlist extends Component {

    render() {
        // console.log(this.props.monsters)                  //empty array => from appjs in constructor the monsters array is empty, then render looged in and then in didcoponentmount we are setting full lists of monsters and getting array with data and then render is logged in for 2nd time
        // console.log('render from cardlist');              //logged
        const { monsters } = this.props                   // COMPONENET ALSO RENDER AGAIN WHEN PROPS CHANGE
        return (
            <div> 
                {
                    monsters.map((monster) => (                   
                        <h1 key={monster.id}>{monster.name}</h1>
                    ))
                }
            </div>
        )
    }

}


export default Cardlist;
import React from 'react';
import Deck from './Deck';

class Blackjack extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentGrab: undefined
        }
    }

    
    render() {
        let {currentGrab} = this.state;
        console.log("Render is being called");
        return (
            <React.Fragment>
                <Deck onGrab={(card) => { this.setState({ currentGrab: card })}} />
                <Deck onGrab={(card) => { this.setState({ currentGrab: card })}} />
                <Deck onGrab={(card) => { this.setState({ currentGrab: card })}} />
                <Deck onGrab={(card) => { this.setState({ currentGrab: card })}} />
                <Deck onGrab={(card) => { this.setState({ currentGrab: card })}} />
                <Deck onGrab={(card) => { this.setState({ currentGrab: card })}} />
                <p>{
                    JSON.stringify(currentGrab || {})
                }</p>
            </React.Fragment>
        )
    }
}

export default Blackjack;
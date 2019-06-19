import React from 'react';

class Deck extends React.Component{
    constructor(props){
        super(props);

        let cards = [];
        //Diamonds, Spaded, Clubs, Hearts
        for (let i = 0; i < 4; i++){
            for (let n = 0; n < 13; n++){
                cards.push({
                    type: i,
                    value: n < 10 ? n + 1 : 10,
                    card: n
                });
            }
        }

        this.state = {
            availableCards: cards
        }
    }

    grab(){
        let {onGrab} = this.props;
        let {availableCards} = this.state;

        let latestIndex = availableCards.length;

        let currentNumber = Math.random() * latestIndex;

        let card = availableCards.splice(currentNumber, 1);

        onGrab(card);

        this.setState({
            availableCards: availableCards
        });
    }

    render(){
        let {availableCards} = this.state;
        return (
            <button onClick={this.grab.bind(this)}>Grab a card ({availableCards.length} cards left)</button>
        )
    }
}

export default Deck;
import React from 'react';

class Deck extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            enabled: true
        };
    }
    componentDidMount(){
        this.initializeCards();
    }

    initializeCards(){
        let cards = [];
        //Loop over four suits and 13 cards
        for (let i = 0; i < 4; i++){
            for (let n = 0; n < 13; n++){
                let currentCard = {
                    type: i,
                    value: n < 10 ? n + 1 : 10,
                    card: n
                }
                if (n == 0){
                    currentCard.value = 11;
                }
                cards.push(currentCard);
            }
        }

        this.setState({
            availableCards: cards
        });
    }

    grab(){
        let {onGrab} = this.props;
        let {gameStatus} = this.props;
        let {availableCards} = this.state;

        if(gameStatus === 'playing') {
            let latestIndex = availableCards.length;
            let currentNumber = Math.random() * latestIndex;
            let card = availableCards.splice(currentNumber, 1);
            //cards is an array
            onGrab(card[0]);
            this.setState({
                availableCards: availableCards
            });
        }
    }

    componentDidUpdate(oldProps){
        let {round} = this.props;

        if (oldProps.round != round){
            this.initializeCards();
        }
    }

    render(){
        let {availableCards} = this.state;
        return (
            <button onClick={this.grab.bind(this)}>Grab a card ({availableCards ? availableCards.length : 0} cards left)</button>
        )
    }
}

export default Deck;
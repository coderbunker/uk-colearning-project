import React from 'react';
import Deck from './Deck';
import Card from './Card';
//import { bindExpression } from '@babel/types';

class Blackjack extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentGrab: undefined,
            currentTotal: 0,
            gameStatus: 'playing',
            previouscards: [],
            round: 0
        };

        this.onGrab = this.onGrab.bind(this);
    }

    onGrab(card) {
        let { currentTotal, gameStatus, previouscards } = this.state;
        let valueToAdd;
        if (card && gameStatus === 'playing') {
            if (card.card === 0 && ((card.value + currentTotal) > 21)) {
                valueToAdd = 1;
            } else {
                valueToAdd = card.value;
            }

            currentTotal += valueToAdd;
            this.setState({ currentGrab: card, currentTotal: currentTotal });
            previouscards.push(card);
            if (currentTotal === 21) {
                this.setState({ gameStatus: 'win' });
            } else if (currentTotal > 21) {
                this.setState({ gameStatus: 'lose' });
            }
        }
    }

    startNewRound(){
        this.setState(({round}) => ({
            previouscards: [],
            currentTotal: 0,
            gameStatus: 'playing',
            round: round + 1
        }));
    }

    render() {
        let { currentGrab, gameStatus, previouscards, round } = this.state;
        return (
            <React.Fragment>
                <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
                <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
                <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
                <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
                <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
                <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
                <div className="card-container">
                    {previouscards.map((card, index) => {
                        return <Card type={card.type} card={card.card} key={index}/>
                    })}
                </div>
               
                {currentGrab && <Card type={currentGrab.type} card={currentGrab.card}/>}
                <p>{
                    JSON.stringify(currentGrab || {})
                }</p>
                <h1>
                    Total score: {this.state.currentTotal}
                    <br />Game status: {this.state.gameStatus}
                </h1>
                <button onClick={this.startNewRound.bind(this)}>Reset</button>
            </React.Fragment>
        )
    }
}

export default Blackjack;
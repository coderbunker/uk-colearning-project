import React from 'react';
import Deck from './Deck';
import { bindExpression } from '@babel/types';

class Blackjack extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentGrab: undefined,
            currentTotal: 0,
            outcome: 'playing'
        }

        this.onGrab = this.onGrab.bind(this);
    }

    onGrab(card) {
        let { currentTotal, outcome } = this.state;
        if (card && outcome === 'playing') {
            currentTotal += card.value;
            this.setState({ currentGrab: card, currentTotal: currentTotal });

            if (currentTotal === 21) {
                this.setState({ outcome: 'win' });
            } else if (currentTotal > 21) {
                this.setState({ outcome: 'lose' });
            }
        }
    }

    render() {
        let { currentGrab } = this.state;

        return (
            <React.Fragment>
                <Deck onGrab={this.onGrab} />
                <Deck onGrab={this.onGrab} />
                <Deck onGrab={this.onGrab} />
                <Deck onGrab={this.onGrab} />
                <Deck onGrab={this.onGrab} />
                <Deck onGrab={this.onGrab} />
                <p>{
                    JSON.stringify(currentGrab || {})
                }</p>
                <h1>
                    Total: {this.state.currentTotal}
                    <br />outcome: {this.state.outcome}
                </h1>
            </React.Fragment>
        )
    }
}

export default Blackjack;
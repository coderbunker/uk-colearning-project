import React from "react";
import Deck from "./Deck";
import Player from "./Player";

class Blackjack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameStatus: "playing",
      round: 0,
      players: [new Player(), new Player()]
    };

    this.onGrab = this.onGrab.bind(this);
  }

  onGrab(card) {
    let { currentTotal, gameStatus, previouscards } = this.state;
    let valueToAdd;
    if (card && gameStatus === "playing") {
      if (card.card === 0 && card.value + currentTotal > 21) {
        valueToAdd = 1;
      } else {
        valueToAdd = card.value;
      }

      currentTotal += valueToAdd;
      this.setState({ currentGrab: card, currentTotal: currentTotal });
      previouscards.push(card);
      if (currentTotal === 21) {
        this.setState({ gameStatus: "win" });
      } else if (currentTotal > 21) {
        this.setState({ gameStatus: "lose" });
      }
    }
  }

  startNewRound() {
    this.setState(({ round }) => ({      
      gameStatus: "playing",
      round: round + 1
    }));
  }

  render() {
    let { gameStatus, players, round } = this.state;
    return (
      <React.Fragment>
        <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
        <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
        <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
        <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
        <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
        <Deck gameStatus={gameStatus} round={round} onGrab={this.onGrab} />
        <div className="players-container">
          {players.map((card, index) => {
            return <Player  />;
          })}
        </div>
        <button onClick={this.startNewRound.bind(this)}>Reset</button>
      </React.Fragment>
    );
  }
}

export default Blackjack;

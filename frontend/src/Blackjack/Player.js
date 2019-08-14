import React from "react";
import Card from "./Card";

class Player extends React.Component {
  constructor() {
    reset();
    this.state = {
      currentGrab: undefined,
      currentTotal: 0,
      previouscards: []
    };
  }
  reset() {
    this.setState(({ round }) => ({
      previouscards: [],
      currentTotal: 0
    }));
  }
  render() {
    return (
      <div>
        <div className="card-container">
          {previouscards.map((card, index) => {
            return <Card type={card.type} card={card.card} key={index} />;
          })}
        </div>
        {currentGrab && (
          <Card type={currentGrab.type} card={currentGrab.card} />
        )}
        <p>{JSON.stringify(currentGrab || {})}</p>
        <h1>
          Total score: {this.state.currentTotal}
          <br />
          Game status: {this.state.gameStatus}
        </h1>
      </div>
    );
  }
}

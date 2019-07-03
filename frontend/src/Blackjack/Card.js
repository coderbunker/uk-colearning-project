import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let {card, type} = this.props;
        return (
            <div className="card" style={{ backgroundPositionY: `-${type * 139}px`, backgroundPositionX: `-${card * 102}px`,  }}>
            </div>
        )
    }
}

export default Card;

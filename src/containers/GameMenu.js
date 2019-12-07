import React from "react";
import MenuTime from "../components/MenuTime";
import MenuInfo from "../components/MenuInfo";

class GameMenu extends React.Component {
  render() {
    let { click, remain, time } = this.props;
    return (
      <div className="game-menu">
        <div className="game-menu--top">
          <MenuTime time={time} />
        </div>
        <div className="game-menu--bottom">
          <MenuInfo 
            level={"medium"}
            boardSize={this.props.boardSize}
            score={this.props.score}
            click={click}
            remain={remain}
          />
        </div>
      </div>
    );
  }
}

export default GameMenu;

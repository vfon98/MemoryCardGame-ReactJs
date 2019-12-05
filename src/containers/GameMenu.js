import React from "react";
import MenuTime from "../components/MenuTime";
import MenuInfo from "../components/MenuInfo";

class GameMenu extends React.Component {
  render() {
    let { click, remain } = this.props;
    return (
      <div className="game-menu">
        <div className="game-menu--top">
          <MenuTime time="00:00" />
        </div>
        <div className="game-menu--bottom">
          <MenuInfo 
            level={"medium"}
            boardSize={this.props.boardSize}
            score={0}
            click={click}
            remain={remain}
          />
        </div>
      </div>
    );
  }
}

export default GameMenu;

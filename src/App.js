/* eslint-disable react/jsx-no-undef */
import React from "react";
import GameBanner from "./components/GameBanner";
import GameBoard from "./containers/GameBoard";
import GameMenu from "./containers/GameMenu";

class App extends React.Component {
  state = {
    click: 0,
    remain: 24
  }

  passGameStatusToMenu = (gameStatus) => {
    this.setState({
      click: gameStatus.click,
      remain: gameStatus.remain
    })
  }

  render() {
    // let { click, remain } = this.state;
    return (
      <div className="container border">
        <GameBanner />
        <div className="game row">
          <GameBoard boardSize={5} gameStatus={this.passGameStatusToMenu} />
          <GameMenu boardSize={5} {...this.state}/>
        </div>
      </div>
    );
  }
}

export default App;

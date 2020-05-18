/* eslint-disable react/jsx-no-undef */
import React from "react";
import GameBanner from "./components/GameBanner";
import GameBoard from "./containers/GameBoard";
import GameMenu from "./containers/GameMenu";
import GameOver from "./components/GameOver";

class App extends React.PureComponent {
  state = {
    boardSize: 5,
    time: 0,
    click: 0,
    remain: 24,
    isOver: false,
    timer: null,
    score: 0
  };

  passGameStatusToMenu = gameStatus => {
    this.setState({
      click: gameStatus.click,
      remain: gameStatus.remain
    });
  };

  handleGameOver = isOver => {
    this.stopTimer();
    this.setState({
      isOver: true
    });
  };

  setTime = () => {
    this.setState({
      time: this.state.time + 1
    });
  };

  formatTime = () => {
    let { time } = this.state;
    let sec = this.padTime(time % 60);
    let min = parseInt(time / 60);
    let clock = `${min}:${sec}`;
    return clock;
  };

  padTime = time => {
    let timeString = time + "";
    if (timeString.length < 2) {
      return "0" + timeString;
    } else return timeString;
  };

  startTimer = () => {
    console.log("Timer started");
    let timer = setInterval(this.setTime, 1000);
    this.setState({ timer: timer });
  };

  stopTimer = timer => {
    this.setState({
      timer: clearInterval(this.state.timer)
    });
  };

  handleRestartGame = () => {
    console.log("Game restarted");
    window.location.reload();
    // this.setState({
    //   isOver: false,
    //   click: 0,
    //   time: 0,
    //   willRestart: true
    // });
  };

  render() {
    let { boardSize, click, remain, time } = this.state;
    let formatedTime = this.formatTime();
    let score = parseInt((click * 1000) / time) || 0;
    return (
      <div className="container">
        <GameBanner />
        <div className="game">
          <GameBoard
            boardSize={boardSize}
            gameStatus={this.passGameStatusToMenu}
            startTimer={this.startTimer}
            onGameOver={this.handleGameOver}
          />
          <GameMenu
            boardSize={boardSize}
            click={click}
            remain={remain}
            time={formatedTime}
            score={score}
          />

          {this.state.isOver ? (
            <GameOver
              time={time}
              click={click}
              score={score}
              handleRestartGame={this.handleRestartGame}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;

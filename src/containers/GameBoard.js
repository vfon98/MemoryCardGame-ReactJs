import React from "react";
import BoardCell from "../components/BoardCell";
import logosArray from "../logosArray";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    const neededImages = ~~(props.boardSize ** 2 / 2);
    this.state = {
      NUMBER_OF_NEEDED_IMG: neededImages, // parse to int
      randomPairs: [],
      lastLogoID: null,
      lastCellIndex: null,
      isOver: false,
      click: 1,
      remain: neededImages * 2
    };
  }

  UNSAFE_componentWillMount() {
    // Get random logos from resources when app started
    this.setState({
      randomPairs: this.createRandomPairsFromChosenLogos()
    });
  }

  componentDidUpdate() {
    const { remain, isOver } = this.state;
    // Check game over
    if (!isOver && remain === 0) {
      this.setState({
        isOver: true
      });
      this.props.onGameOver(true);
      console.log("GAME OVER !");
    }
  }

  shuffleArray = arr => {
    let dumpArr = [...arr];
    return dumpArr.sort(() => 0.5 - Math.random());
  };

  getRandomLogosFromResources = () => {
    let { NUMBER_OF_NEEDED_IMG } = this.state;
    let chosenLogos = this.shuffleArray(logosArray);
    // Cut needed images
    chosenLogos.length = NUMBER_OF_NEEDED_IMG;
    return [...chosenLogos];
  };
  // To make sure element is unique
  addIndexForElements = arr => {
    return arr.map((elem, index) => ({
      ...elem,
      index: index
    }));
  };

  duplicateArrayElements = arr => {
    return arr.concat(arr);
  };

  createRandomPairsFromChosenLogos = () => {
    let chosenLogos = this.getRandomLogosFromResources();
    let pairsLogos = this.duplicateArrayElements(chosenLogos);
    let logosWithIndex = this.addIndexForElements(pairsLogos);
    return this.shuffleArray(logosWithIndex);
  };

  handleClick = (logoID, cellIndex, isHidden) => {
    if (cellIndex === -1 || isHidden === false) return;
    console.log("id:", logoID + ", index:" + cellIndex);
    let { randomPairs, lastLogoID, lastCellIndex, click, remain } = this.state;
    randomPairs[cellIndex].is_hidden = false;

    if (lastLogoID !== null) {
      if (lastLogoID === logoID) {
        console.log("found");
        this.setState(
          {
            lastLogoID: null,
            lastCellIndex: null,
            remain: remain - 2
          },
          () => {
            // Update status immediately when found
            remain = this.state.remain;
            this.props.gameStatus({ click, remain });
          }
        );
      } else {
        setTimeout(
          function() {
            randomPairs[lastCellIndex].is_hidden = true;
            randomPairs[cellIndex].is_hidden = true;
            this.setState({
              lastLogoID: null,
              lastCellIndex: null
            });
          }.bind(this),
          500
        );
      }
    } else {
      this.setState({
        lastLogoID: logoID,
        lastCellIndex: cellIndex
      });
    }
    // Update after click
    this.setState(
      {
        randomPairs,
        click: click + 1
      },
      () => {
        if (this.state.click === 2) this.props.startTimer();
      }
    );
    let gameStatus = {
      click: click,
      remain: remain
    };
    this.props.gameStatus(gameStatus);
  };

  render() {
    const luckyLogoPath = "./logo/star.svg";
    const centerCellIndex = this.state.NUMBER_OF_NEEDED_IMG;
    let { randomPairs } = this.state;
    let boardCells = [];

    randomPairs.forEach((cell, index) => {
      if (index === centerCellIndex) {
        boardCells.push(
          <BoardCell
            handleCellClick={this.handleClick}
            logoPath={luckyLogoPath}
            logoID={-1}
            isHidden={false}
            cellIndex={-1}
            key={-1}
          />
        );
      }
      boardCells.push(
        <BoardCell
          handleCellClick={this.handleClick}
          logoPath={cell.link}
          logoID={cell.id}
          isHidden={cell.is_hidden}
          cellIndex={index}
          key={index}
        />
      );
    });

    return <div className="game-board">{boardCells}</div>;
  }
}

export default GameBoard;

import React from "react";

// const BoardCell = ({ logoSrc, isHidden }) => {
//     const hiddenLogoPath = "./logo/question-block.svg";
//     let cellImgPath = isHidden ? hiddenLogoPath : logoSrc;

//     return (
//         <div className="board-cell">
//             <img src={cellImgPath} alt="missing" />
//         </div>
//     );
// }

class BoardCell extends React.PureComponent {
  render() {
    let { logoPath, logoID, isHidden, cellIndex } = this.props;
    const hiddenLogoPath = "./logo/question-block.svg";
    let cellImgPath = isHidden ? hiddenLogoPath : logoPath;

    return (
      <div className="board-cell" onClick={() => this.props.handleCellClick(logoID, cellIndex, isHidden)}>
        <img src={cellImgPath} alt="missing" />
      </div>
    );
  }
}

export default BoardCell;

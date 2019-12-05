import React from "react";

const MenuInfo = ({ level, boardSize, score, click, remain }) => {
  return (
    <div className="info">
      <table className="info--table">
        <tbody>
          <tr>
            <th>Level:</th>
            <td>{level}</td>
          </tr>
          <tr>
            <th>Size:</th>
            <td>
              {boardSize} x {boardSize}
            </td>
          </tr>
          <tr>
            <th>Score:</th>
            <td>{score}</td>
          </tr>
          <tr>
            <th>Click:</th>
            <td>{click}</td>
          </tr>
          <tr>
            <th>Remain:</th>
            <td>{remain}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MenuInfo;

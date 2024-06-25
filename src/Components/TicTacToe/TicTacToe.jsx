import React, { useState, useRef } from "react";
import "./TicTacToe.css";

import CircleIcon from "../Assests/circle.png";
import CrossIcon from "../Assests/cross.png";

let data = ["", "", "", "", "", "", "", "", ""]; // act as data for each box

const TicTacToe = (props) => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [x_score, setX_score] = useState(0);
  const [o_score, setO_score] = useState(0);
  let titleRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${CrossIcon}'/> `;
      data[num] = "x";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src='${CircleIcon}'/> `;
      data[num] = "o";
      setCount(count + 1);
    }

    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }

    if (!data.includes("") && !lock) {
      won("draw");
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      setX_score(x_score + 1);
      titleRef.current.innerHTML = `Congratulations <img src=${CrossIcon}> Wins`;
    } else if (winner === "o") {
      setO_score(o_score + 1);
      titleRef.current.innerHTML = `Congratulations <img src=${CircleIcon}> Wins`;
    } else if (winner === "draw") {
      titleRef.current.innerHTML = `It's a Draw!`;
    }
  };

  const reset = () => {
    setLock(false);
    setCount(0);
    titleRef.current.innerHTML = `Tic Tac Toe Game In <span> React JS</span>`;
    data = ["", "", "", "", "", "", "", "", ""];

    box_array.map((box, index) => {
      return (box.current.innerHTML = "");
    });
  };

  const resetScore = () => {
    setO_score(0);
    setX_score(0);
  };
  return (
    <div className="new">
      <div className="container">
        <h1 className="title" ref={titleRef}>
          Tic Tac Toe Game In <span> React JS</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div
              className="boxes"
              ref={box1}
              onClick={(e) => toggle(e, 0)}
            ></div>
            <div
              className="boxes"
              ref={box2}
              onClick={(e) => toggle(e, 1)}
            ></div>
            <div
              className="boxes"
              ref={box3}
              onClick={(e) => toggle(e, 2)}
            ></div>
          </div>
          <div className="row2">
            <div
              className="boxes"
              ref={box4}
              onClick={(e) => toggle(e, 3)}
            ></div>
            <div
              className="boxes"
              ref={box5}
              onClick={(e) => toggle(e, 4)}
            ></div>
            <div
              className="boxes"
              ref={box6}
              onClick={(e) => toggle(e, 5)}
            ></div>
          </div>
          <div className="row3">
            <div
              className="boxes"
              ref={box7}
              onClick={(e) => toggle(e, 6)}
            ></div>
            <div
              className="boxes"
              ref={box8}
              onClick={(e) => toggle(e, 7)}
            ></div>
            <div
              className="boxes"
              ref={box9}
              onClick={(e) => toggle(e, 8)}
            ></div>
          </div>
        </div>
        <button className="reset" onClick={() => reset()}>
          Reset
        </button>
      </div>
      <div className="scoreContainer">
        <h1 className="title_score">🏁 Score! 🏁</h1>
        <div className="score">
          <h2 className="x_score">
            <img src={CrossIcon} /> <span>: {x_score}</span>
          </h2>
          <h2 className="o_score">
            <img src={CircleIcon} />
            <span>: {o_score}</span>
          </h2>
        </div>
        <button className="reset" onClick={() => resetScore()}>
          Reset Score
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;

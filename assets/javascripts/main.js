const module = (() => {
  const gameboard = document.querySelector(".gameboard");
  let gameboardArray = [];
  const settingDataAttribute = (index, i) => {
    if (index === 0) {
      return i;
    } else if (index === 1) {
      return i + 3;
    } else {
      return i + 6;
    }
  };
  // creating the gameboard with dom
  const creatingGameBoard = () => {
    for (let index = 0; index < 3; index++) {
      const row = document.createElement("div");
      row.setAttribute("style", "display: flex;");
      row.classList.add("row");
      for (let i = 0; i < 3; i++) {
        const square = document.createElement("div");
        square.setAttribute(
          "style",
          "width: 100px; height: 100px; border: 1px solid black"
        );
        square.setAttribute("data", `${settingDataAttribute(index, i)}`);
        square.classList.add("square");
        row.appendChild(square);
      }
      gameboard.appendChild(row);
    }
  };

  /*
   * fill gameboard
   * const markGameboard = () => {
   */

  // };

  // check turn
  const checkTurn = () => {
    if (gameboardArray.length % 2 === 0) {
      return "X";
    } else {
      return "O";
    }
  };

  // check if there is already a value inside the gameboard
  const checkValue = (adala) => {
    if (!gameboardArray.find(elm => elm[0] === adala)) {
      return true;
    } else {
      return false;
    }
  };

  // check for a winner
  const checkForAWinner = (value) => {
    if (gameboardArray.length > 4) {
      const arr = gameboardArray.filter(element => element[1] === value);
      if (
        arr.find(x => x[0] === 0) &&
        arr.find(x => x[0] === 1) &&
        arr.find(x => x[0] === 2)
      ) {
        return true;
      } else if (
        arr.find(x => x[0] === 3) &&
        arr.find(x => x[0] === 4) &&
        arr.find(x => x[0] === 5)
      ) {
        return true;
      } else if (
        arr.find(x => x[0] === 6) &&
        arr.find(x => x[0] === 7) &&
        arr.find(x => x[0] === 8)
      ) {
        return true;
      } else if (
        arr.find(x => x[0] === 2) &&
        arr.find(x => x[0] === 4) &&
        arr.find(x => x[0] === 6)
      ) {
        return true;
      } else if (
        arr.find(x => x[0] === 0) &&
        arr.find(x => x[0] === 4) &&
        arr.find(x => x[0] === 8)
      ) {
        return true;
      } else if (
        arr.find(x => x[0] === 0) &&
        arr.find(x => x[0] === 3) &&
        arr.find(x => x[0] === 6)
      ) {
        return true;
      } else if (
        arr.find(x => x[0] === 1) &&
        arr.find(x => x[0] === 4) &&
        arr.find(x => x[0] === 7)
      ) {
        return true;
      } else if (
        arr.find(x => x[0] === 2) &&
        arr.find(x => x[0] === 5) &&
        arr.find(x => x[0] === 8)
      ) {
        return true;
      }
    }
  };
  return {
    creatingGameBoard,
    gameboardArray,
    checkTurn,
    checkValue,
    checkForAWinner
  };
})();

module.creatingGameBoard();
const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("click", function () {
    const data = parseInt(this.getAttribute("data"));
    const value = module.checkTurn();
    const element = [data, value];
    // element[data] =  value;
    if (module.checkValue(data) === true) {
      this.textContent = value;
      module.gameboardArray.push(element);
    }

    if (module.checkForAWinner(value) === true) {
      if (value === "X") {
        alert(`the first player win`);
      } else {
        alert(`the second player win`);
      }
    }
  }));


const module = (() => {
    const gameboard = document.querySelector('.gameboard');
    let gameboardArray = [];
    const settingDataAttribute = (index,i) =>{
        if (index === 0) {
            return  i;
        }else if(index === 1){
            return i + 3;
        }else {
            return i + 6;
        };
    }
    // creating the gameboard with dom 
    const creatingGameBoard = () => {
        for (let index = 0; index < 3; index++) {
            const row = document.createElement('div');
            row.setAttribute('style','display: flex;');
            row.classList.add('row');
            for (let i = 0; i < 3; i++) {
                const square = document.createElement('div');
                square.setAttribute('style','width: 100px; height: 100px; border: 1px solid black');
                square.setAttribute('data',`${settingDataAttribute(index,i)}`);
                square.classList.add('square')
                row.appendChild(square);
            }
            gameboard.appendChild(row);
        }
        
    };

    // fill gameboard

    const markGameboard = () => {
        
    };

    // check turn

    const checkTurn = () =>{
        if (gameboardArray.length % 2 === 0) {
            return "X"
        }else {
            return "O"
        }
    };

    // check if there is already a value inside the gameboard 

    const checkValue = (adala) => {
        if (!gameboardArray.find(elm => elm[adala])) {
            return true;
        }else{
            return false;
        }
    };

    return {creatingGameBoard,gameboardArray,checkTurn,checkValue};
})();


module.creatingGameBoard();
const squares = document.querySelectorAll('.square');
squares.forEach(square =>  square.addEventListener('click',function() {
    const data = this.getAttribute("data");
    let value = module.checkTurn();
    const element = {};
    element[data] =  value;
    if (module.checkValue(data) === true ) {
        this.textContent = value;
        module.gameboardArray.push(element);
    };
}));

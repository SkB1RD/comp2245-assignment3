document.addEventListener("DOMContentLoaded",() =>{
    console.log("Page loaded - ready to run JavaScript");

    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");
    console.log(squares);
    const newGameButton = document.querySelector(".btn");

    let currentPlayer = "X";

    const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

    newGameButton.addEventListener("click", () => {
    squares.forEach(square =>{
        square.textContent = "";
        square.classList.remove("X");
        square.classList.remove("O");
    });

    const status = document.getElementById("status");
    status.textContent = "Move your mouse over a square and click to play an X or an O.";
    status.classList.remove("you-won");

    currentPlayer = "X";
});


    function checkWinner(){
        for (const combo of winningCombos){
            const [a,b,c] = combo
            
            if(
                squares[a].textContent !== "" &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            ){
                const winner = squares[a].textContent;
                const status = document.getElementById("status");

                status.textContent = `Congratulations! ${winner} is the Winner!`;
                status.classList.add("you-won");

                return true;
            }
        }
        return false;
    }

    squares.forEach(square => {
    square.classList.add("square");


    square.addEventListener("mouseover", () => {
        square.classList.add("hover");
    });

    square.addEventListener("mouseout", () => {
        square.classList.remove("hover");
    });
    
    square.addEventListener("click", () =>{
        if (square.textContent ===""){
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            
            if (checkWinner()) {
                return;
            }

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    });


    });






















});
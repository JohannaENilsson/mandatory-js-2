const gamefield = document.querySelector(`#gamefield`);
let squares = document.querySelectorAll(`.square`);
let button = document.querySelector(`button`);

// gör allt i funktioner
// while loop i funktionen för GameStillOn === true. När GameStillOne === false. kalla på endGame()
// WinnerGame() kollas varje gång det är en ny runda.

let player = "x";

function witchPlayer() {
  if (player === "x") {
    player = "o";
    //console.log(`player o`);
  } else if (player === "o") {
    player = "x";
    //console.log(`player x`);
  }
}

let gameOn = function (on = true) {
  if(on === true) {
    continue;
  } else {
    console.log(on);
    // if (x === true) {
    //   for(let square = 0; square < squares.length; square++){
    //     square.removeEventListener(`click`, oneClick);
    //     console.log(square);

  }
  }

  function oneClick(e) {
    witchPlayer(); // kollar vem det är
    //console.log(player);
    for (let square of squares) {
      console.log(square);
      
    // if (player === "x") {
    //   squares[i].innerHTML = "X";
    //   winnerOfGame();
    // } else if (player === "o") {
    //   squares[i].innerHTML = "O";
    //   winnerOfGame();
    // }
    // squares[i].removeEventListener(`click`, oneClick); // plockar bort efter 1 click
  }
  //return square;
}
oneClick();
  //square.addEventListener(`click`, oneClick); //

  // // RESET ---->
  // button.addEventListener(`click`, function(e) {
  //   squares[i].innerHTML = "";
  //   squares[i].addEventListener(`click`, oneClick); // Kallar på klickfunktionen igen
  //   player = 1; // sätter om player på 1.
  // });

  // function winnerOfGame() {
  //   if (
  //     squares[0].innerText === "X" &&
  //     squares[1].innerText === "X" &&
  //     squares[2].innerText === "X"
  //   ) {
  //     console.log(`X winns`);
  //     gameOne = false;
  //     endGame(gameOne);
  //   } else if (
  //     squares[3].innerText === "X" &&
  //     squares[4].innerText === "X" &&
  //     squares[5].innerText === "X"
  //   ) {
  //     console.log(`X winns`);
  //   } else if (
  //     squares[6].innerText === "X" &&
  //     squares[7].innerText === "X" &&
  //     squares[8].innerText === "X"
  //   ) {
  //     console.log(`X winns`);
  //   } else if (
  //     squares[0].innerText === "X" &&
  //     squares[4].innerText === "X" &&
  //     squares[8].innerText === "X"
  //   ) {
  //     console.log(`X winns`);
  //   } else if (
  //     squares[2].innerText === "X" &&
  //     squares[4].innerText === "X" &&
  //     squares[6].innerText === "X"
  //   ) {
  //     console.log(`X winns`);
  //   } else if (
  //     squares[0].innerText === "X" &&
  //     squares[3].innerText === "X" &&
  //     squares[6].innerText === "X"
  //   ) {
  //     console.log(`X winns`);
  //   } else if (
  //     squares[1].innerText === "X" &&
  //     squares[4].innerText === "X" &&
  //     squares[7].innerText === "X"
  //   ) {
  //     console.log(`X winns`);
  //   } else if (
  //     squares[2].innerText === "X" &&
  //     squares[5].innerText === "X" &&
  //     squares[8].innerText === "X"
  //   ) {
  //     console.log(`X winns`);
  //   } else if (
  //     squares[0].innerText === "O" &&
  //     squares[1].innerText === "O" &&
  //     squares[2].innerText === "O"
  //   ) {
  //     console.log(`O winns`);
  //   } else if (
  //     squares[3].innerText === "O" &&
  //     squares[4].innerText === "O" &&
  //     squares[5].innerText === "O"
  //   ) {
  //     console.log(`O winns`);
  //   } else if (
  //     squares[6].innerText === "O" &&
  //     squares[7].innerText === "O" &&
  //     squares[8].innerText === "O"
  //   ) {
  //     console.log(`O winns`);
  //   } else if (
  //     squares[0].innerText === "O" &&
  //     squares[4].innerText === "O" &&
  //     squares[8].innerText === "O"
  //   ) {
  //     console.log(`O winns`);
  //   } else if (
  //     squares[2].innerText === "O" &&
  //     squares[4].innerText === "O" &&
  //     squares[6].innerText === "O"
  //   ) {
  //     console.log(`O winns`);
  //   } else if (
  //     squares[0].innerText === "O" &&
  //     squares[3].innerText === "O" &&
  //     squares[6].innerText === "O"
  //   ) {
  //     console.log(`O winns`);
  //   } else if (
  //     squares[1].innerText === "O" &&
  //     squares[4].innerText === "O" &&
  //     squares[7].innerText === "O"
  //   ) {
  //     console.log(`O winns`);
  //   } else if (
  //     squares[2].innerText === "O" &&
  //     squares[5].innerText === "O" &&
  //     squares[8].innerText === "O"
  //   ) {
  //     console.log(`O winns`);
  //   }
  // }
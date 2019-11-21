const gamefield = document.querySelector("#gamefield");
let resetBtn = document.querySelector("main button");
let replayBtn = document.querySelector(`#popUp button`);
let squares = document.querySelectorAll(".square");
let popUp = document.querySelector(`#containerPopUp`);
let winP = document.querySelector(`#popUp p`);

const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];


console.log(squares);

/// SEN if arr.length < 5 return. ingen kan vinna innan 5 drag
// Behöver en arr med den vinnande kombinationerna.
// Behöver se vilken av squares[i] som blivit tryckt på
// 2 tomma arrayer för x  o att pusha upp när knapp blivit tryckt på
// jämföra med den vinnande arrayen.

let gameOn = false; // Spelet är inte igång än
let clickArr = []; // sparar clicken
let xArr = []; // pusha upp x click square[i]

// PLAY -> Spelet startar
function play() {
  gameOn = true;
  // console.log(`play call`);
}

// Sätter dit eventlyssnarna
function setUp() {
  resetBtn.style.display = `block`; // Visar reset knappen igen
  winP.innerHTML = ""; // Vinnartext rensas
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener(`click`, oneClick); // Sätter dit eventlyssnare på alla
    clickArr = []; // tömmer arrayen
  }
}

// WITCH PLAYER
let player = `X`;
function witchPlayer() {
  console.log(`WitchPlayer`);
  if (player === `X`) {
    player = `O`;
  } else if (player === `O`) {
    player = `X`;
  }
}

//Click
function oneClick(e) {
  let square = e.target; // Lussnar på vilken ruta som blivit clickad på
  console.log(`Every click ${square}`);
  clickArr.push(square);
  // console.log(clickArr);

  witchPlayer();
  if (player === "X") {
    square.style.color = `green`;
    square.style.backgroundColor = `rgba(245, 245, 245, 0.377)`;
    square.innerHTML = "X";
    xArr.push(square);
    console.log(xArr);
    console.log(`Draw X`);
  } else if (player === "O") {
    square.innerHTML = "O";
    square.style.color = `red`;
    square.style.backgroundColor = `rgba(245, 245, 245, 0.377)`;
    console.log(`Draw O`);
  }
  if (clickArr.length >= 5) { // 
    console.log(`Click function`, gameOn);
    console.log("ITS over 5");
    // Efter 5 click börja kolla efter vinst
    if (gameOn === false) {
      
      // om detta händer ska den inte gå vidare
      return;
    }
    if (isGameOver() === true) {
      // om någon retunerar true
      endGame(); // stängs spelet av
    }
    if (clickArr.length > 8) {
      // om arrayen är fyld med mer än 8, startas itsATie
      itsATie();
    }
  }
  square.removeEventListener(`click`, oneClick); // plockar bort efter 1 click
}

// RESET
function resetSquares() {
  popUp.style.display = `none`; // Döljer popupen
  for (let square of squares) {
    square.innerHTML = ``; // rensar alla rutorna på innehåll
    square.style.backgroundColor = ` rgba(255, 255, 255, 0.836)`;
    console.log(square);
  }
  setUp(); // sätter dit eventlyssnarna
  play(); // startar spelet

}
resetBtn.addEventListener(`click`, resetSquares);
replayBtn.addEventListener(`click`,resetSquares);

// WINNER OF THE GAME
function isGameOver() {

  // LOOPAR WINNINGCOMBO
console.log(winningCombo);
for (let i = 0; i < winningCombo.length; i++) {
  console.log(winningCombo[i]);
  let winArr = winningCombo[i];
  for (let j = 0; j < winArr.length; j++) {
    console.log(winArr[j]);
    for (let k = 0; k < xArr.length; k++) {
      if (xArr[k] == winArr[j]) {
        console.log("the best");
        return true;
      }
    }
  }
}




  // if (
  //   squares[0].innerText === "X" &&
  //   squares[1].innerText === "X" &&
  //   squares[2].innerText === "X"
  // ) {
  //   console.log(`X winns`);
  //   return true; // någon har vunnit
  // } else if (
  //   squares[3].innerText === "X" &&
  //   squares[4].innerText === "X" &&
  //   squares[5].innerText === "X"
  // ) {
  //   console.log(`X winns`);
  //   return true;
  // } else if (
  //   squares[6].innerText === "X" &&
  //   squares[7].innerText === "X" &&
  //   squares[8].innerText === "X"
  // ) {
  //   console.log(`X winns`);
  //   return true;
  // } else if (
  //   squares[0].innerText === "X" &&
  //   squares[4].innerText === "X" &&
  //   squares[8].innerText === "X"
  // ) {
  //   console.log(`X winns`);
  //   return true;
  // } else if (
  //   squares[2].innerText === "X" &&
  //   squares[4].innerText === "X" &&
  //   squares[6].innerText === "X"
  // ) {
  //   console.log(`X winns`);
  //   return true;
  // } else if (
  //   squares[0].innerText === "X" &&
  //   squares[3].innerText === "X" &&
  //   squares[6].innerText === "X"
  // ) {
  //   console.log(`X winns`);
  //   return true;
  // } else if (
  //   squares[1].innerText === "X" &&
  //   squares[4].innerText === "X" &&
  //   squares[7].innerText === "X"
  // ) {
  //   console.log(`X winns`);
  //   return true;
  // } else if (
  //   squares[2].innerText === "X" &&
  //   squares[5].innerText === "X" &&
  //   squares[8].innerText === "X"
  // ) {
  //   console.log(`X winns`);
  //   return true;
  // } else if (
  //   squares[0].innerText === "O" &&
  //   squares[1].innerText === "O" &&
  //   squares[2].innerText === "O"
  // ) {
  //   console.log(`O winns`);
  //   return true;
  // } else if (
  //   squares[3].innerText === "O" &&
  //   squares[4].innerText === "O" &&
  //   squares[5].innerText === "O"
  // ) {
  //   console.log(`O winns`);
  //   return true;
  // } else if (
  //   squares[6].innerText === "O" &&
  //   squares[7].innerText === "O" &&
  //   squares[8].innerText === "O"
  // ) {
  //   console.log(`O winns`);
  //   return true;
  // } else if (
  //   squares[0].innerText === "O" &&
  //   squares[4].innerText === "O" &&
  //   squares[8].innerText === "O"
  // ) {
  //   console.log(`O winns`);
  //   return true;
  // } else if (
  //   squares[2].innerText === "O" &&
  //   squares[4].innerText === "O" &&
  //   squares[6].innerText === "O"
  // ) {
  //   console.log(`O winns`);
  //   return true;
  // } else if (
  //   squares[0].innerText === "O" &&
  //   squares[3].innerText === "O" &&
  //   squares[6].innerText === "O"
  // ) {
  //   console.log(`O winns`);
  //   return true;
  // } else if (
  //   squares[1].innerText === "O" &&
  //   squares[4].innerText === "O" &&
  //   squares[7].innerText === "O"
  // ) {
  //   console.log(`O winns`);
  //   return true;
  // } else if (
  //   squares[2].innerText === "O" &&
  //   squares[5].innerText === "O" &&
  //   squares[8].innerText === "O"
  // ) {
  //   console.log(`O winns`);
  //   return true;
  // }
  return false; // ingen har vunnit än
}

// TIE
function itsATie() {
  gameOn = false;
  resetBtn.style.display = `none`;
  setTimeout(function() {
    // så att o el x hinner ritas ut
    popUp.style.display = `flex`;
    winP.textContent = `This round is a tie`; // insert ${player} 
  }, 10);
}

// ENDGAME
function endGame() {
  console.log(`End game`);
  gameOn = false; // spelet är av
  console.log(`${player} won the game`);
  resetBtn.style.display = `none`;
  setTimeout(function() {     
    // så att o el x hinner ritas ut
    popUp.style.display = `flex`;
    winP.textContent = `${player} won this round`; // insert ${player}  
  }, 10);
}

setUp(); // sätter dit eventlyssnarna
play(); // startar spelet

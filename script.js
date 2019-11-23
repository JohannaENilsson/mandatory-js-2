let resetBtn = document.querySelector("main button");
let replayBtn = document.querySelector("#popUp button");
let squares = document.querySelectorAll(".square");
let popUp = document.querySelector("#containerPopUp");
let winP = document.querySelector("#popUp p");

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
// console.log(squares);

let gameOn = false; // Spelet är inte igång än
let clickArr = []; // sparar clicken
let xArr = []; // pusha upp x click square[i]
let OArr = [];

// PLAY -> Spelet startar
function play() {
  gameOn = true;
  // console.log('play call');
}

// Sätter dit eventlyssnarna och rensar arrayer
function setUp() {
  resetBtn.style.display = "block"; // Visar reset knappen igen
  winP.innerHTML = ""; // Vinnartext rensas
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", oneClick); // Sätter dit eventlyssnare på alla
    clickArr = []; // tömmer arrayen
    xArr = [];
    OArr = [];
  }
}

// ***** LÄGG TILL ATT RANDOM BÖRJAR

// WITCH PLAYER
let player = "X";
function witchPlayer() {
  // console.log('WitchPlayer');
  if (player === "X") {
    player = "O";
  } else if (player === "O") {
    player = "X";
  }
}

//Click
function oneClick(e) {
  let square = e.target; // Lyssnar på vilken ruta som blivit clickad på
  console.log(`Every click ${square.dataset.id}`); // Hämtar id:et på resp ruta
  clickArr.push(square);
  // console.log(clickArr);

  witchPlayer();
  if (player === "X") {
    square.style.color = "green";
    square.style.backgroundColor = "rgba(245, 245, 245, 0.377)";
    square.textContent = "X";
    xArr.push(parseInt(square.dataset.id)); // Pushar upp square id:et i resp array
    console.log(`X har klickat på ${xArr}`);
    // console.log('Draw X');
  } else if (player === "O") {
    square.style.color = "red";
    square.style.backgroundColor = "rgba(245, 245, 245, 0.377)";
    square.textContent = "O";
    OArr.push(parseInt(square.dataset.id));
    console.log(`O har klickat på ${OArr}`);
    // console.log('Draw O');
  }
  if (clickArr.length >= 5) {
    // Börjar kolla efter vinnare efter 5 click. ingen kan vinna innan
    console.log("Click function", gameOn);
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
  square.removeEventListener("click", oneClick); // plockar bort efter 1 click
}

// RESET
function resetSquares() {
  popUp.style.display = "none"; // Döljer popupen
  for (let square of squares) {
    square.innerHTML = ""; // rensar alla rutorna på innehåll
    square.style.backgroundColor = " rgba(255, 255, 255, 0.836)";
    // console.log(square);
  }
  setUp(); // sätter dit eventlyssnarna
  play(); // startar spelet
}
resetBtn.addEventListener("click", resetSquares);
replayBtn.addEventListener("click", resetSquares);

// WINNER OF THE GAME
function isGameOver() {
  for (let i = 0; i < winningCombo.length; i++) {
    const winCombo = winningCombo[i];

    console.log(xArr);
    console.log(winCombo[0] + " - " + winCombo[1] + " - " + winCombo[2]);

    if (
      xArr.includes(winCombo[0]) &&
      xArr.includes(winCombo[1]) &&
      xArr.includes(winCombo[2])
    ) {
      return true;
    } else if (
      OArr.includes(winCombo[0]) &&
      OArr.includes(winCombo[1]) &&
      OArr.includes(winCombo[2])
    ) {
      return true;
    }
  }
  return false;
}

// TIE
function itsATie() {
  gameOn = false;
  resetBtn.style.display = "none";
  setTimeout(function() {
    // så att o el x hinner ritas ut
    popUp.style.display = "flex";
    winP.textContent = "This round is a tie"; // insert ${player}
  }, 10);
}

// ENDGAME
function endGame() {
  console.log("End game");
  gameOn = false; // spelet är av
  console.log(`${player} won the game`);
  resetBtn.style.display = "none";
  setTimeout(function() {
    // så att o el x hinner ritas ut
    popUp.style.display = "flex";
    winP.textContent = `${player} won this round`; // insert ${player}
  }, 10);
}

setUp(); // sätter dit eventlyssnarna
play(); // startar spelet

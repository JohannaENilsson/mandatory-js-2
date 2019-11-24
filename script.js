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

let gameOn = false; // Spelet är inte igång än
let clickArr = []; // sparar clicken
let xArr = []; // pusha upp x click square[i]
let OArr = [];

// PLAY -> Spelet startar
function play() {
  gameOn = true; // Spelet är på
}

// Sätter dit eventlyssnarna och rensar arrayer
function setUp() {
  resetBtn.style.display = "block"; // Visar reset knappen igen
  winP.innerHTML = ""; // Vinnartext rensas
  clickArr = []; // tömmer arrayen
  xArr = [];
  OArr = [];
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", oneClick); // Sätter dit eventlyssnare på alla rutor
  }
}

// WITCH PLAYER
let player = "X";
function witchPlayer() {
  if (player === "X") {
    player = "O";
  } else if (player === "O") {
    player = "X";
  }
}

//Click
function oneClick(e) {
  let square = e.target; // Lyssnar på vilken ruta som blivit clickad på
  clickArr.push(square); // Håller kolla på antalet klick som gjorts

  witchPlayer();
  if (player === "X") {
    square.style.color = "green";
    square.style.backgroundColor = "rgba(245, 245, 245, 0.377)";
    square.textContent = "X";
    xArr.push(parseInt(square.dataset.id)); // Pushar upp square id:et i resp array
  } else if (player === "O") {
    square.style.color = "red";
    square.style.backgroundColor = "rgba(245, 245, 245, 0.377)";
    square.textContent = "O";
    OArr.push(parseInt(square.dataset.id));
  }

  if (clickArr.length >= 5) {
    // Börjar kolla efter vinnare efter 5 click. ingen kan vinna innan
    if (gameOn === false) {
      // om detta händer ska den inte gå vidare och kolla nedan if satser
      return;
    }
    if (isGameOver() === true) {
      // om någon retunerar true
      endGame(); // stängs spelet av
    }

    if (clickArr.length > 8 && isGameOver() !== true) {
      // om arrayen är fyld med mer än 8 OCH ingen har vunnit startas itsATie
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

    if (
      xArr.includes(winCombo[0]) && //kollar igenom alla 8 winCombos. 1:A siffran måste finnas i XArr
      xArr.includes(winCombo[1]) && //kollar igenom alla 8 winCombos. 2:A siffran måste finnas i XArr
      xArr.includes(winCombo[2]) //kollar igenom alla 8 winCombos. 3:A siffran måste finnas i XArr
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
  gameOn = false; // spelet är av
  resetBtn.style.display = "none";
  setTimeout(function() {
    // så att o el x hinner ritas ut
    popUp.style.display = "flex";
    winP.textContent = "This round is a tie";
  }, 10);
}

// ENDGAME
function endGame() {
  gameOn = false; // spelet är av
  console.log(`${player} won the game`);
  resetBtn.style.display = "none";
  setTimeout(function() {
    // så att o el x hinner ritas ut
    popUp.style.display = "flex";
    winP.textContent = `${player} won this round`; // Texten blir vilken spelare som vann
  }, 10);
}

setUp(); // sätter dit eventlyssnarna
play(); // startar spelet
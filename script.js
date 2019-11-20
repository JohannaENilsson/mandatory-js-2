const gamefield = document.querySelector("#gamefield");
let resetBtn = document.querySelector("button");
let squares = document.querySelectorAll(".square");
// console.log(squares);

/// SEN if arr.length < 5 return. ingen kan vinna innan 5 drag
// Behöver en arr med den vinnande kombinationerna.
// Behöver se vilken av squares[i] som blivit tryckt på
// 2 tomma arrayer för x  o att pusha upp när knapp blivit tryckt på
// jämföra med den vinnande arrayen.

let gameOn = false; // Spelet är inte igång än
let clickArr = []; // sparar clicken

// PLAY -> Spelet startar
function play() {
  gameOn = true;
  // console.log(`play call`);
}

// Sätter dit eventlyssnarna
function setUp() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener(`click`, oneClick); // Sätter dit eventlyssnare på alla
    clickArr = []; // tömmer arrayen
  }
}

// WITCH PLAYER
let player = `x`;
function witchPlayer() {
  console.log(`WitchPlayer`);
  if (player === `x`) {
    player = `o`;
  } else if (player === `o`) {
    player = `x`;
  }
}

//Click
function oneClick(e) {
  let square = e.target; // Lussnar på vilken ruta som blivit clickad på
  console.log(`Every click ${square}`);
  clickArr.push(square);
  // console.log(clickArr);

  witchPlayer();
  if (player === "x") {
    square.innerHTML = "X";
    console.log(`Draw X`);
  } else if (player === "o") {
    square.innerHTML = "O";
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
}

// RESET
function resetSquares() {
  for (let square of squares) {
    square.innerHTML = ``; // rensar alla rutorna på innehåll
    console.log(square);
  }
}
resetBtn.addEventListener(`click`, resetSquares);

// WINNER OF THE GAME
function isGameOver() {
  if (
    squares[0].innerText === "X" &&
    squares[1].innerText === "X" &&
    squares[2].innerText === "X"
  ) {
    console.log(`X winns`);
    return true; // någon har vunnit
  } else if (
    squares[3].innerText === "X" &&
    squares[4].innerText === "X" &&
    squares[5].innerText === "X"
  ) {
    console.log(`X winns`);
    return true;
  } else if (
    squares[6].innerText === "X" &&
    squares[7].innerText === "X" &&
    squares[8].innerText === "X"
  ) {
    console.log(`X winns`);
    return true;
  } else if (
    squares[0].innerText === "X" &&
    squares[4].innerText === "X" &&
    squares[8].innerText === "X"
  ) {
    console.log(`X winns`);
    return true;
  } else if (
    squares[2].innerText === "X" &&
    squares[4].innerText === "X" &&
    squares[6].innerText === "X"
  ) {
    console.log(`X winns`);
    return true;
  } else if (
    squares[0].innerText === "X" &&
    squares[3].innerText === "X" &&
    squares[6].innerText === "X"
  ) {
    console.log(`X winns`);
    return true;
  } else if (
    squares[1].innerText === "X" &&
    squares[4].innerText === "X" &&
    squares[7].innerText === "X"
  ) {
    console.log(`X winns`);
    return true;
  } else if (
    squares[2].innerText === "X" &&
    squares[5].innerText === "X" &&
    squares[8].innerText === "X"
  ) {
    console.log(`X winns`);
    return true;
  } else if (
    squares[0].innerText === "O" &&
    squares[1].innerText === "O" &&
    squares[2].innerText === "O"
  ) {
    console.log(`O winns`);
    return true;
  } else if (
    squares[3].innerText === "O" &&
    squares[4].innerText === "O" &&
    squares[5].innerText === "O"
  ) {
    console.log(`O winns`);
    return true;
  } else if (
    squares[6].innerText === "O" &&
    squares[7].innerText === "O" &&
    squares[8].innerText === "O"
  ) {
    console.log(`O winns`);
    return true;
  } else if (
    squares[0].innerText === "O" &&
    squares[4].innerText === "O" &&
    squares[8].innerText === "O"
  ) {
    console.log(`O winns`);
    return true;
  } else if (
    squares[2].innerText === "O" &&
    squares[4].innerText === "O" &&
    squares[6].innerText === "O"
  ) {
    console.log(`O winns`);
    return true;
  } else if (
    squares[0].innerText === "O" &&
    squares[3].innerText === "O" &&
    squares[6].innerText === "O"
  ) {
    console.log(`O winns`);
    return true;
  } else if (
    squares[1].innerText === "O" &&
    squares[4].innerText === "O" &&
    squares[7].innerText === "O"
  ) {
    console.log(`O winns`);
    return true;
  } else if (
    squares[2].innerText === "O" &&
    squares[5].innerText === "O" &&
    squares[8].innerText === "O"
  ) {
    console.log(`O winns`);
    return true;
  }
  return false; // ingen har vunnit än
}

// TIE
function itsATie() {
  gameOn = false;
  setTimeout(function() {
    // så att o el x hinner ritas ut
    if (confirm(`It´s a tie. Do you wanna play again?`)) {
      resetSquares();
      setUp();
      play();
    } else {
      alert(`Don't be a sore loser`);
      gameOn = false;
    }
  }, 10);
}

// ENDGAME
function endGame() {
  console.log(`End game`);
  gameOn = false; // spelet är av
  console.log(`${player} won the game.`);

  setTimeout(function() {
    // så att o el x hinner ritas ut
    if (confirm(`${player} won the game. Do you wanna play again?`)) {
      resetSquares();
      setUp();
      play();
    } else {
      alert(`Don't be a sore loser`);
      gameOn = false;
    }
  }, 10);
}

setUp(); // sätter dit eventlyssnarna
play(); // startar spelet

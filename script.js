console.log(`Hello world`);

const gamefield = document.querySelector(`#gamefield`);
let squares = document.querySelectorAll(`.square`);
let button = document.querySelector(`button`);

let player = 1;

function witchPlayer(){
    if(player === 1) {
        player = 2;
        console.log(`player 1`);
    } else if (player === 2) {
        player = 1;
        console.log(`player 2`);
    }
}


for (let i = 0; i < squares.length; i++){
    let square = squares[i];
    // console.log(square);

    function oneClick(e){
        witchPlayer(); // kollar vem
        // console.log(player);
        if (player === 1) {
            let two = document.createElement(`p`);
            two.textContent = "two";
            square.appendChild(two);
            console.log(`player 2`);
        } else if (player === 2) {
            let one = document.createElement(`p`);
            one.textContent = "one";
            square.appendChild(one);
            console.log(`player 1`);
        }

        square.removeEventListener(`click`, oneClick); // plockar bort efter 1 click
    }

    square.addEventListener(`click`, oneClick); // 

}
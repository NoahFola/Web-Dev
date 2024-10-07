
let n = (Math.random() * 6) + 1;
player1 = Math.floor(n);

let m = (Math.random() * 6) + 1;
player2 = Math.floor(m);

let dice1 = String("dice" + player1 + ".png");
let dice2 = String("dice" + player2 + ".png");

document.getElementById("diceImg1").setAttribute("src", dice1);
document.getElementById("diceImg2").setAttribute("src", dice2);

if(player1>player2){
    document.getElementById("h1").innerHTML = "Player 1 wins!!"
}
else if(player2>player1){
    document.getElementById("h1").innerHTML = "Player 2 wins!!"
}
else{
    document.getElementById("h1").innerHTML = "It's a Draw"
}


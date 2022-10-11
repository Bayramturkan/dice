var randomNumber1 = Math.random();
randomNumber1 *=6+1;
randomNumber1 =Math.floor(randomNumber1); //1-6

var randomDiceImage = "dice" + randomNumber1 +".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png- images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); // Selecting attribute for changing src to change images.



var randomNumber2 = Math.random();
randomNumber2 *=6+1;
randomNumber2 = Math.floor(randomNumber2);

var randomDiceImage2 = "dice" + randomNumber2 +".png";
var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Conditions for who wins

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else{
    document.querySelector("h1").innerHTML= " Draw" ;
}


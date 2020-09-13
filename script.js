var location1 = 2;
var location2 = 3;
var location3 = 4;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Guess where my battleship is: (enter a number 0 - 6)");
    if (guess < 0 || guess > 6 || guess == null || guess === "") {
        alert ("Please enter a valid cell number (enter a number 0 - 6)");
    } else{
        guesses ++;

    if (guess == location1 || guess == location2 || guess == location3) {
        hits ++;
        alert("Hit!");

        if (hits == 3) {
            isSunk = true;
            alert("You've sunk my battleship!");
            }
        } else {
            alert("Miss!")
        }
    }
}


var stats = "It took you " + guesses + " tries to sink the battleship, " + "which means you accuracy is " + (3/guesses);
alert(stats);
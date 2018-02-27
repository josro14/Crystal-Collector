$( document ).ready(function(){

var wins = 0;
var losses = 0;
var totalScore = 0;
console.log(totalScore);

//Generate random target number between 19-120
var targetNumber = Math.floor(Math.random() * (102) + 19);
console.log(targetNumber);

//Appending random number to the randomNumber id in the html doc
$('#number-gen').text(targetNumber);

//Generate random numbers for each crystal between 1-12
var rubyNumber = Math.floor(Math.random() * (12) + 1);
console.log(rubyNumber);

var crystalNumber = Math.floor(Math.random() * (12) + 1);
console.log(crystalNumber);

var gemNumber = Math.floor(Math.random() * (12) + 1);
console.log(gemNumber);

var sapphireNumber = Math.floor(Math.random() * (12) + 1);
console.log(sapphireNumber);

//When crystals are clicked their values are written to the DOM under "Your total score is:" / "state-score" class.
$("#ruby").on("click", function () {
    totalScore = totalScore + rubyNumber;
    $("#current-score").text("Your current score is: " + totalScore);
    if (totalScore === targetNumber) {
        winnerWinner();
    } else if (totalScore > targetNumber) {
        loserLoser();
    }
});

$("#crystal").on("click", function () {
    totalScore = totalScore + crystalNumber;
    $("#current-score").text("Your current score is: " + totalScore);
    if (totalScore === targetNumber) {
        winnerWinner();
    } else if (totalScore > targetNumber) {
        loserLoser();
    }
});

$("#gem").on("click", function () {
    totalScore = totalScore + gemNumber;
    $("#current-score").text("Your current score is: " + totalScore);
    if (totalScore === targetNumber) {
        winnerWinner();
    } else if (totalScore > targetNumber) {
        loserLoser();
    }
});

$("#sapphire").on("click", function myFunction() {
    totalScore = totalScore + sapphireNumber;
    $("#current-score").text("Your current score is: " + totalScore);
    if (totalScore === targetNumber) {
        winnerWinner();
    } else if (totalScore > targetNumber) {
        loserLoser();
    }
});
//Add values of the crystals to the score each time a new one is clicked. 


//Wins function as wins increase by one then random numbers are re-generated and game resets.
function winnerWinner() {
    alert("You win!");
    wins++;
    $("#win-count").text("Wins: " + wins);
    resetGame();
};

//Losses function as losses increase by one then random numbers are still re-generated and game resets.
function loserLoser() {
    alert("Aww, you lose!");
    losses++;
    $("#loss-count").text("Losses: " + losses);
    resetGame();
};

//Reset the game to initial state after a win or a loss
function resetGame() {
    targetNumber = Math.floor(Math.random() * (102) + 19);
    rubyNumber = Math.floor(Math.random() * (12) + 1);
    crystalNumber = Math.floor(Math.random() * (12) + 1);
    gemNumber = Math.floor(Math.random() * (12) + 1);
    sapphireNumber = Math.floor(Math.random() * (12) + 1);
    totalScore = 0;
    $('#number-gen').text(targetNumber);
    $("#current-score").text(totalScore);
};

});
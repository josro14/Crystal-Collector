var wins = 0;
var losses = 0;

//Generate random target number between 19-120
var targetNumber = Math.floor(Math.random()*(102) +19);
console.log(targetNumber);

//Generate random numbers for each crystal between 1-12
var rubyNumber = Math.floor(Math.random()*(12) +1);
console.log(rubyNumber);

var crystalNumber = Math.floor(Math.random()*(12) +1);
console.log(crystalNumber);

var gemNumber = Math.floor(Math.random()*(12) +1);
console.log(gemNumber);

var sapphireNumber = Math.floor(Math.random()*(12) +1);
console.log(sapphireNumber);

//When crystals are clicked their values are written to the DOM under "Your total score is:" / "state-score" class.


//Add values of the crystals to the score each time a new one is clicked. 


//If "state-score" = "targetNumber" then wins increase by one and the random numbers are re-generated.


//If "state-score" > "targetNumber" then the losses increase by one and random numbers are still re-generated.
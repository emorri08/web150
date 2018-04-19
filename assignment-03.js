//Elly Boyd - Assignment 03
//assignment-03.js

//prompt user to enter a number grade between 0 and 100
var scores = parseFloat(prompt('Please enter a number grade from 0 - 100'));
var msg;

//change the value of scores to the number that the user entered
console.log(scores);

//if statement with the different numeric values and the corresponding letter grades to display depending on the number that was entered
if (scores > 100) {
    msg = 'Sorry, your score cannot be greater than 100. Please refresh the page and enter a number less than 100';
} else if (scores < 0) {
    msg = 'Sorry, your score cannot be less than 0. Please refresh the page and enter a number greater than 0';       
} else if (scores >= 88) {
    msg = 'A';
} else if (scores >= 80) {
    msg = 'B';
} else if (scores >= 68) {
    msg = 'C';
} else if (scores >= 60) {
    msg = 'D';
} else if (scores < 60) {
    msg = "Sorry, you did not pass. Please try again!";
}

alert('Number Grade: ' + scores + '\nLetter Grade: ' + msg);

// Eleanor Boyd - WEB150 - Assignment 06
// Miles Per Gallon Calculator
// mpg-calculator.js

//Eleanor Boyd - WEB150 - Assignment 6 - Miles Per Gallon Calculator

//calculator function
function calculate(){

    var distance = parseFloat(document.getElementById('milesDriven').value); 
    
    var gallons = parseFloat(document.getElementById('gallonsUsed').value); 
    
    if (isNaN(distance) || isNaN(gallons))
    {
        alert('Oops! There was a problem with your entry...please make sure that both entries are numeric and re-submit. Thank you!')
    }
    else{  
    
    var mpg = distance/gallons;   
    
    document.getElementById("mpg").value = mpg.toFixed(2);  
 
    }   
    
}

document.getElementById('calculateMPG').addEventListener('click', calculate);

// I am adding the clear form function that was part of last week's assignment because I felt that it was really useful to be able to click a button and clear the form and not have to refresh the screen. I hope that was ok!

function clearForm(){
    document.getElementById('mpgCalculator').reset();
}

//clears the form when clicked
document.getElementById('clearForm').addEventListener('click', clearForm);
//Eleanor Boyd - WEB150 - Weeks 3 and 4 Online Assignment
//boyd-calculator-avg-grade.js

//declare the variables
    var gradeEntry = parseFloat(prompt("Please enter your number grades between 0 and 100. \n When finished, please enter 999 to calculate the average. \n Enter only number grades from 0 to 100. \n Enter only one number grade at a time.", "0"));
    var total = 0;                      //the total amount of all the grades added together
    var numberOfGrades = 0;             //the total number of grades that were entered
    var avg = total / numberOfGrades;   //divides the total amount of all the grades by the total number of grades to get the average grade
//do while loop
    do {    //do
        total += gradeEntry;
        gradeEntry = parseFloat(prompt("Please enter your number grades between 0 and 100. \n When finished, please enter 999 to calculate the average. \n \n Please enter only number grades between 0 and 100. \n \n Please enter only one number grade at a time.", "0"));
        numberOfGrades++;
        avg = total / numberOfGrades;
        if (gradeEntry === 999){             //if the number entered is exactly equal to 999, end the program.
            break;
        }
    }

    while (gradeEntry >= 0 && gradeEntry <=100);  //while the number entered is greater than or equal to zero and while the number entered is less or equal to 100 
//display on page
    document.write ("Total score entered:" + total + "<br>You average total is: " + avg); 
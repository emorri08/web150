//Eleanor Boyd - WEB150 - Assignment 5 - Bill Calculator

//calculator function
function calculate(){

    var billAmt = parseFloat(document.getElementById('billAmt').value); //defines the variable "billAmt" as the number entered into the portion of the form with the id of "billAmt"
    var rate = parseFloat(document.getElementById('rate').value);   //defines the variable "rate" as the number entered into the portion of the form with the id of "rate"
    
    if (isNaN(billAmt) || billAmt <= 0 || billAmt > 1000)//if the number entered for the Bill Subtotal is greater than 1000 or less than 0, return this message in the element with the id of error1 
    {
        document.getElementById("error1").innerHTML = "Bill Subtotal must be a positive number less than $1,000";
        isValid = false;
    }
    else if (isNaN(rate) || rate <= 0 || rate > 25)//if the number entered for the Tax Rate is greater than  25 or less than 0, return this message in the element with the id of error2
    {
        document.getElementById("error2").innerHTML = "Tax Rate must be a positive number that is less than 25";
        isValid = false;
    }
    else{   //otherwise do the calculation
    
    var taxAmt = billAmt * (rate/100);  //defines the variable "taxAmt" as "billAmt" times ("rate" divided by 100) 
    var total = taxAmt + billAmt;   //defines the variable "total" as "taxAmt" plus "billAmt"
    
    document.getElementById("salesTax").value = taxAmt.toFixed(2);  //returns the calculated tax in the disabled "sales tax" portion of the form.
    document.getElementById("total").value = total;  //returns the calculated total in the disabled "total" portion of the form. 
    }   
    
}
//returns the tax amount and total when clicked
document.getElementById('calculateTotal').addEventListener('click', calculate);

//clear form function
function clearForm(){
    document.getElementById('billCalculator').reset();
}

//clears the form when clicked
document.getElementById('clearForm').addEventListener('click', clearForm);




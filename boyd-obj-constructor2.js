//create a template for objects that are cars

function Car(name, topSpeed, currentSpeed){
  this.name = name;
  this.topSpeed = topSpeed;
  this.currentSpeed = currentSpeed;
  this.speedDifference = function(){
    return this.topSpeed - this.currentSpeed;//difference between the current speed and the top Speed

  };
}

//create two car objects
var hondaCivic = new Car('Honda Civic', 125, 65);
var toyotaPrius = new Car('Toyota Prius', 110, 55);
var volkswagenJetta = new Car('Volkswagen Jetta', 155, 75);
var bmw3Series = new Car('BMW 325i', 146, 70);
var bmw5Series = new Car('BMW 525i', 155, 80);
var mercedesBenzSL = new Car('Mercedes Benz SL Class', 155, 60);

//update the HTML page
var car1 = hondaCivic.name + ' Remaining MPH: ';
car1 += hondaCivic.speedDifference();

var elCar1 = document.getElementById("car1");
elCar1.textContent = car1;

var car2 = toyotaPrius.name + ' Remaining MPH: ';
car2 += toyotaPrius.speedDifference();

var elCar2 = document.getElementById("car2");
elCar2.textContent = car2;

var car3 = volkswagenJetta.name + ' Remaining MPH: ';
car3 += volkswagenJetta.speedDifference();

var elCar3 = document.getElementById("car3");
elCar3.textContent = car3;

var car4 = bmw3Series.name + ' Remaining MPH: ';
car4 += bmw3Series.speedDifference();

var elCar4 = document.getElementById("car4");
elCar4.textContent = car4;

var car5 = bmw5Series.name + ' Remaining MPH: ';
car5 += bmw5Series.speedDifference();

var elCar5 = document.getElementById("car5");
elCar5.textContent = car5;

var car6 = mercedesBenzSL.name + ' Remaining MPH: ';
car6 += mercedesBenzSL.speedDifference();

var elCar6 = document.getElementById("car6");
elCar6.textContent = car6;

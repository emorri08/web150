//create a template for objects that are cat shelters

function Shelter(name, kennels, occupied){
    this.name = name;
    this.kennels = kennels;
    this.occupied= occupied;
    this.checkAvailability = function(){
        return this.kennels - this.occupied; //available rooms

    };
}

//create the new cat shelter objects
var seattleShelter = new Shelter('Seattle', 400, 362);
var bellevueShelter = new Shelter('Bellevue', 500, 471);
var rentonShelter = new Shelter('Renton', 450, 420);
var redmondShelter = new Shelter('Redmond', 433, 400);
var issaquahShelter = new Shelter('Issaquah', 468, 469);

//update the HTML page to show the shelter availability at each of the five shelters listed above.

var cats1 = seattleShelter.name + ' kennels: ';
cats1 += seattleShelter.checkAvailability();

var elCats1 = document.getElementById("cats1");
elCats1.textContent = cats1;

var cats2 = bellevueShelter.name + ' kennels: ';
cats2 += bellevueShelter.checkAvailability();

var elCats2 = document.getElementById("cats2");
elCats2.textContent = cats2;

var cats3 = rentonShelter.name + ' kennels: ';
cats3 += rentonShelter.checkAvailability();

var elCats3 = document.getElementById("cats3");
elCats3.textContent = cats3;

var cats4 = redmondShelter.name + ' kennels: ';
cats4 += redmondShelter.checkAvailability();

var elCats4 = document.getElementById("cats4");
elCats4.textContent = cats4;

var cats5 = issaquahShelter.name + ' kennels: ';
cats5 += issaquahShelter.checkAvailability();

var elCats5 = document.getElementById("cats5");
elCats5.textContent = cats5;

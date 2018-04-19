//Eleanor Boyd - WEB150 - Assignment 4
//script.js


//1.
//this code finds the element with the id of 'one'
var el = document.getElementById('one');
//this code changes the class of the element with the id of 'one' to 'jar'
el.className = 'jar';

//2.
//this code finds the elements with a class of 'tealight'
var elements = document.getElementsByClassName('jar'); 
//this code changes the class of the second element with the class of 'jar'
if (elements.length > 0) {
    var two = elements[2];
    two.className = 'votive';
}

//3.
//this code finds all the <li> tags
var elements = document.getElementsByTagName('li');     
//this code says that if there are any <li> tags, select the fifth one and change its class to 'pillar'
if (elements.length > 0) {
    var el = elements[4];
    el.className = 'pillar';
}

//4.
//the querySelector method only returns the first match
//this code targets the first <li> tag with a class of 'votive' and changes the class to 'taper'
var el = document.querySelector('li.votive');
el.className = 'taper';

//5.
//the querySelectorAll method returns a NodeList
//this code targets the third <li> tag with a class of 'pillar' and changes the class to 'tealight'
var els = document.querySelectorAll('li.pillar');
els[2].className = 'tealight';

//6.
//set-attribute
//find the item with an id of 'eight'
var itemEight = document.getElementById('eight');
//change the class name of the item with an id of 'eight' to 'tealight'
itemEight.className = 'tealight';

//7.
//get attribute
//find the item with an id of 'one'
var itemOne = document.getElementById('one');
//if the item has a class attribute, get that attribute
if(itemOne.hasAttribute('class')){
    var attribute = itemOne.getAttribute('class');
}
//and print it to the page
var el = document.getElementById('results');
el.innerHTML = "<p>The class of item one in the product list is: " + attribute + '</p>';


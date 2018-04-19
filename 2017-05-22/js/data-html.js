//data-html.js

//create XML httpRequest Object
var xhr = new XMLHttpRequest();

//when the response has loaded
xhr.onload = function(){
    if(xhr.status === 200){ //the server status was ok
        document.getElementById('content').innerHTML = xhr.responseText;    //update
        
    }
};

xhr.open('GET', 'data/data.html', true);    //prepares the request
xhr.send(null); //in this  case, not searching so it's null



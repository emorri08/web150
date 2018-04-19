// Eleanor Boyd - WEB150 - Assignment 07
// assignment07.js

//1.
//makes the "types of candles" list (on the left side of the main page) fade in
$(function(){
   var $li = $('li.productList');
    $li.hide().each(function(index){
        $(this).delay(500 * index).fadeIn(1000)
     });
    
// Slowly fades out each item on the "types of candles" list when it is clicked on
    $li.on('click', function(){
        $(this).fadeOut(1500);
    });
});

//2.
// puts the content on the right side of the page into tabs (colors, scents, sizes, types of wax, and wish list)
$(function(){
    $('#tabs').tabs();
});

//3.
// makes the list under the "colors" tab an accordion style list
$(function(){
    $('#accordion1').accordion();
});

//4.
// toggles the list under the "wax type" tab on and off
$(function(){
    
    var $waxList = $('li.waxList');
    
    $('#waxType').toggle(); //list is hidden until button is clicked
    $('#wax').click(function(){
    $('#waxType').slideToggle('fast');
    });
    
});

//5.
// makes the list under the "scents" tab fade in over .25 seconds with a delay of 3/10 of a second times the index of each item to give a staggered effect.
$(function(){

    var $scentList = $('li.scentList');// stores list items with a class of "scentList" in the variable "$scentList"
    $scentList.hide().each(function(index){
       $(this).delay(300 * index).fadeIn(250); 
    });
});

//6.
// makes the list under the "scents" tab slide out to the left when clicked on
$(function(){
   $('li.scentList').on('click', function(){
       $(this).animate({
           opacity : 0.0,
           paddingRight : '+=300',
       }, 1500, function(){
          $(this).remove(); 
       });
   });
});


//7.
// makes the list under the "sizes" tab slide out to the right
$(function(){
   $('li.sizes').on('click', function(){
       $(this).animate({
            opacity : 0.0,
            paddingLeft : '+=300',
            }, 500, function(){
            $(this).remove();
       });
   }) ;
});

//8. 
// under the "wish list" tab
//add new item form allows users to add new items to a list
$(function(){
    var $addNewButton = $('#addNewButton');
    var $form1 = $('#form1');
    var $inputText = $('input:text');
    
    $addNewButton.show();
    $form1.hide();
    
    $('#showTextField').on('click', function(){
        $addNewButton.hide();
        $form1.show();
    });
    
    $form1.on('submit', function(e){
        e.preventDefault();
        var $newInput = $inputText.val();
        $('li.addNewProduct:last').after('<li>' + $newInput + '</li>');
        $form1.hide();
        $addNewButton.show();
        $inputText.val('');
    });
});

//9.
// under the "wax type" tab, user can click on any of the three list items to change the background colors of all three list items to white, red, and grey.
$(function(){
    $('li.waxList').click(function(){
        $('#waxOne').css("background-color", "white");
        $('#waxTwo').css("background-color", "red");
        $('#waxThree').css("background-color", "grey");
    });
});
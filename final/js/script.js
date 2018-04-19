//Elly Boyd - WEB150 - Final Project
//script.js

// fade in banner image
$(function(){
   var $banner = $('#bannerImg');
    $banner.hide().each(function(){
        $(this).delay(500).fadeIn(9000);
    });
});
// Main and Sub Headlines on "home" slide down
$(function(){
    $('#heading').hide().delay(1500).slideDown(2500);
});

//tabs widget on about.html
$(function(){
    $('#facts').tabs();
});

//accordion widget on resources.html
$(function(){
    $('#accordion').accordion();
});

//button widget - takes user "back to home" on all pages but index.html
$(function(){
   $('button').button(); 
});

//slide down images on extras.html
$(function(){ 
    $('#imgOne').hide().delay(1000).slideDown(2000);//slide down first image
    
    $('#imgTwo').hide().delay(1750).slideDown(2500);//slide down second image
    
    $('#imgThree').hide().delay(2500).slideDown(3000);//slide down third image
});


//bounce effect - Click on any of the images and -- they bounce 10 times, then disappears
$( document ).click(function(){
    $( '#imgOne' ).toggle( 'bounce', { times: 2 }, 'slow' );  
});

$(document).click(function(){
    $('#imgTwo').toggle('bounce', {times: 4}, 'fast');
});

$(document).click(function(){
    $('#imgThree').toggle('bounce', {times: 6}, 'slow');
});

//bounce effect on success message on success.html
$(document).click(function(){
    $('#formFeedback').toggle('bounce', {times: 5}, 'slow');
});




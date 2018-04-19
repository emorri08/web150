//Elly Boyd - WEB150 - Assignment08
//jQuery FAQ

$(function(){
    $('#faq').animate({    //increase headline opacity to 1, size to 650%, and left padding to 375px
        fontSize : '650%',
        opacity : 1,
        paddingLeft: '+=375px'
    }, 1500).delay(1000); //delay of 1 second before next animation

    $('#container h2').animate({ //returns headline to it's original position and to a size of 175%
        fontSize : '175%',
        paddingLeft : '-=375px'
    }, 2000)
    
 
    
    $('#container div').toggle();   //toggle hides divs
    $('#container h3').toggle(  
    
        function(){
            $(this).toggleClass('minusImage');//changes image from plus to minus
            $(this).next().slideDown(1500);//show the paragraph of text
        },
        
        function(){
            $(this).toggleClass('minusImage');//changes image back to minus from plus
            $(this).next().slideUp(1750);//hides the paragraph of text
        }
    );
});
    

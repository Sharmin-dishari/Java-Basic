$(document).ready(function(){
    //Basic
    //$('h1').hide(1000);
    //$('h1').show(1000);
    //$('h1').dblclick(function(){
        //alert('Hello World');
    //});

    //selector
   /* $('li:even').addClass('even');
    $('li:odd').addClass('odd');*/

    //animation
    /* $('#b1').mouseover(function(){
        $(this).val('Show The Div');
$('div.one').stop().show(1000);
});
$('#b1').mouseout(function(){
    $('div.one').stop().hide(1000);
    
});
 $('#b1').hover(function(){
$('div.one').toggle(1000);
 });*/


 //Colorplate
/*$('#colors').change(function(){
    color=$('#colors').val();
    $('body').css('background',color);
});*/


//Animate
/*$('a').mouseover(function(){
    $(this).animate({'width':'500px'},500);
});
$('a').mouseout(function(){
    $(this).animate({'width':'150px'},500);
});*/


//password
/*$('#pass').keyup(function(){
    length =$('#pass').val().length;
    if(length==0){
        $('#checker').removeClass('weak');
        $('#checker').removeClass('good');
        $('#checker').removeClass('strong');
        $('#checker').text('');

    }
    else if(length<=4){
        $('#checker').addClass('weak');
        $('#checker').removeClass('good');
        $('#checker').removeClass('strong');
        $('#checker').text('Weak');

    }
    else if(length<=8){
        $('#checker').addClass('good');
        $('#checker').removeClass('strong');
        $('#checker').removeClass('weak');
        $('#checker').text('Good');
        
    }
    else if(length<=12){
        $('#checker').addClass('strong');
        $('#checker').removeClass('weak');
        $('#checker').removeClass('good');
        $('#checker').text('Strong');

    }
});*/
$('#play').click(function(){
    $('#slider').cycle('resume');
});
$('#pause').click(function(){
    $('#slider').cycle('pause');
});
$('#slider').cycle({
    fx: 'turndown',
    speed:1000,
    timeout:2000,
    next: '#next',
    prev: '#prev',
    pager: '#pager'
});
 
});
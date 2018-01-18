/*-------DOCUMENT READY----------------*/
$(document).ready(function(){ 
    // SETTING THE VERTICAL POS OF TAB CAROUSEL
    var height = $(window).height();
    var iheight = $('#carousel img').height();
    if (height >= (2*iheight+100)){
        var ypos = (height/2)-(iheight/2)-100;
        $('#carousel .app-slider').css("top",ypos+"px");
    }


    // CAROUSEL FOR LARGE DEVICES ONLY
    $('.slider').slick({
        //setting-name: setting-value
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
    });
    
    commonPointSlider();
    
    // SET HEADER HEIGHT 
    setTimeout(function(){
        var h = window.innerHeight;
        $('#header').height(h);
        $('.sec7').height(h);
    }, 200);
    
});

/*-----------CAROUSEL REDIRECT LINKS TO SAMPLES---------------*/
var redirectLinks = [
    {
        name : "hotel",
        linkTo : "http://hotelbooking-in.stackstaging.com/#/",
    },
    {
        name : "restrofinder",
        linkTo : "http://restrofinder-in.stackstaging.com/",
    },
    {
        name : "bloghere",
        linkTo : "http://bloghere-com.stackstaging.com/",   
    },
    {
        name : "sae",
        linkTo : "http://saesvnit-com.stackstaging.com",
    }
];


$('#carousel').on('click','img.slick-active',function(){
    var link = $(this).attr('data-href');
    redirectLinks.forEach(function(site){
        if (site.name === link)
            window.location = site.linkTo;
    });
});

$('.phone-carousel').on('click','img.slick-active',function(){
    var link = $(this).attr('data-href');
    redirectLinks.forEach(function(site){
        if (site.name === link)
            window.location = site.linkTo;
    });
});
/*--------TYPING EFFECT FOR HEADER--------------------*/
$(function () {
    $(".header-autotype").typed({
        strings: ["<h3>Sanjay George</h3><h3 class='small-h3'>&#60;Web Developer/&#62;<span class='blink'>|</span></h3>"]
        , typeSpeed: 60
        , startDelay: 3000
        , loop: false
        , showCursor:false
    });
});

/*-----------COMMON POINT SLIDER------------------*/
    
function slidingMotion(){
// function for the sliding and animation
// of points in the common/interested section
    $('#common').children('.point').each(function(){
        if ($(this).hasClass('hide')){
            $(this).removeClass('hide');
            $(this).css('animation','fadeIn 1s');
            // typing effect for p tag 
            $(function () {
                $(".bored-autotype").typed({
                    strings: ["Click and hold the home button <br> on the device above <br> to see something interesting <span class='blink'>|</span>"]
                    , typeSpeed: 10 //10
                    , startDelay: 0
                    , loop: false
                    , showCursor : false
                
                });
            });

        }
        else{
            $(this).addClass('hide');
        }
    });  
}; 
    

function selectSocialIcons(i){
// function for setting animation to social icons row
// in the interested section

    
    setTimeout(function(){
        $('.contact-social').find('ul li:nth-child('+i+')').find('i').css("animation","flash .7s 2");
        if (i <= 4) 
            selectSocialIcons(++i);
    },70);

};
    
function commonPointSlider(){
// main function for all animations
// in common/interested pts slider section
    slider = setInterval(slidingMotion, 7000);
    
    // CONTACT BUTTON CLICK EVENT
    $('#contact-btn').click(function(e){
        e.preventDefault();
        
        if ($(this).text().toLowerCase() == "get in touch"){
            // PAUSE SLIDING 
            clearInterval(slider);
            // OTHER ANIMATIONS
            setTimeout(function(){
                selectSocialIcons(1);
            },1200);
            $('.contact-info').removeClass('hide');
            $('.contact-info').css('animation','fadeIn2 1s');
            $(this).text("hide info");
            
        }
        else if($(this).text().toLowerCase() == "hide info"){
            $('.contact-info').addClass('hide');
            $(this).text("get in touch");
            // RESUME SLIDING ANIMATION
            slider = setInterval(slidingMotion, 7000);

            
        }

    });
    
    
};

/*---------MOBILE HOME BTN FUNCTION---------------*/
// GAME : LOLLIPOP COLOR CHANGER
function mobGame(){
// function for what happens when
// mobile carousel home btn is clicked,
// loading the game
// and revert back to default slider
    
//body blur not rqd
//only change the screen
//console.log('hi, mobile');
$('.slider').slick('unslick');
$('.slider').hide();
//$('.slides').remove();
$('.slides').append("<div class='ph-game-canvas'></div>");
//$('.app-slider').append("<div class='ph-game-canvas'></div>");
$('.ph-game-canvas').append("<div class='circle'></div>");
$('.ph-game-canvas').append("<div class='stick'></div>");



    
// game start
colorArray = ['red', 'blue', 'yellow', 'green', 'white','purple','black','brown','violet'];    
    
$('.circle').click(function(e){
    e.preventDefault;
    var colorIndex = Math.floor((Math.random() * 9));
    $(this).css('background-color',colorArray[colorIndex]);
});
    
    
// revert back ????????????
}

// CLICK AND HOLD MOBILE CAROUSEL HOME BTN 1.5s
var timeoutId = 0;
$('.mobhome').on('mousedown', function() {
    timeoutId = setTimeout(mobGame, 1500);
}).on('mouseup mouseleave', function() {
    clearTimeout(timeoutId);
});


        
/*---------TAB HOME BUTTON FUNCTION---------------*/
// GAME : REACTION TESTER (TAB HOME BUTTON)

function startupCanvas(top, left, w, h){
// function that creates the canvas
// according to the values specified 
// by setCanvasSize() 
    $('body').prepend("<div class='tab-game-canvas'></div>");
    $('.tab-game-canvas').css({"position":"absolute", "top" : top + "px", "left" : left + "px","width" : w + "px", "height" : h + "px", "z-index" : "1000", "animation" : "wakeup 1s"});
}

function setCanvasSize(){
// function for determining width, height, and position
// of the tab game canvas.

    if (window.innerWidth >= 993 && window.innerWidth < 1301 ){
        var cTop = $('#game-base').offset().top + 47;
        var cLeft = $('#game-base').offset().left + 43;
        var cWidth = $('#game-base').width() - 65;
        var cHeight = $('#game-base').height() -50;
    }
    else if (window.innerWidth >= 1301 && window.innerWidth < 1700 ){
        var cTop = $('#game-base').offset().top + 60;
        var cLeft = $('#game-base').offset().left + 60;
        var cWidth = $('#game-base').width() - 75;
        var cHeight = $('#game-base').height() -55;
    }
    else if (window.innerWidth >= 1700){
        cTop = $('#game-base').offset().top + 80;
        cLeft = $('#game-base').offset().left + 70;
        cWidth = $('#game-base').width() - 80;
        cHeight = $('#game-base').height() - 65;
    }
    setTimeout(function(){
        startupCanvas(cTop, cLeft, cWidth, cHeight);
    },1000);  
};

/*------------REACTION TESTER COMPONENTS---------------------*/

function getRandomColor() {
//
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var clickedTime, createdTime, reactionTime, dispTime;
var clicks = 0;
var reactionTimeSum = 0;
var avgTime = 0;

var drawShape = function(notClicked){
// function for randomly drawing shapes
    
    if (notClicked === true){
        console.error("game over");
        return ;
    }
    
    var waitTime = Math.random();
    waitTime = waitTime * 1000; // random wait time 0 to 1s
    

    setTimeout(function(){
        // display the shape
        var cWidth = $('.tab-game-canvas').innerWidth();
        var cHeight = $('.tab-game-canvas').innerHeight();
        var left = Math.floor(Math.random() * (cWidth-100));
        var top = Math.floor(Math.random() * (cHeight-100));
        var $shape = $('.shape');
        
        if (Math.random() > 0.5)
            $shape.css("border-radius", "50%");
        else
            $shape.css("border-radius", "0%");
        
        $shape.css({"background-color" : getRandomColor(), "left" : left+"px", "top" : top+"px", "display":"block" });
        
        createdTime = Date.now();

    }, waitTime);

   
    
    return;
         
};

$('body').on('click','.tab-game-canvas #shape',function(){
// function on clicking 
// calculates scores 
// drawShape again
    
    $(this).css("display","none");
    clicks++;
    clickedTime = Date.now();
    reactionTime = (clickedTime-createdTime)/1000;
    reactionTimeSum = reactionTimeSum + reactionTime;
    avgTime = reactionTimeSum / clicks;
    
    $('.score').text(reactionTime.toFixed(2) + ' s');
    $('.avg-score').text(avgTime.toFixed(2) + ' s');
    drawShape(false);
    
});

function reactionTester(){
// function that starts up the game
// calls drawShape and shows initial scores

    $('.tab-game-canvas').append("<div id='shape' class='shape'></div>");
    if (reactionTime === undefined) reactionTime = 0;
    $('.tab-game-canvas').append("<div class='score-keep center'><div class=''><span>Reaction Time : </span><span class='score'>"+reactionTime.toFixed(2)+" s</span></div><div class=''><span>Average Reaction Time : </span><span class='avg-score'>"+ avgTime.toFixed(2) +" s</span></div></div>");
    
    drawShape(false);
 
};


/*------------REACTION TESTER COMPONENTS END-------------------*/

function gameStart(){
// function to start the game
// show intro and start the game
    $('.tab-game-canvas').append("<div class='col l12 intro-holder'><h2 class='center'>REACTION TESTER</h2></div>");
    $('.intro-holder').append("<p class='game-intro-autotype'></p>");
    if (reactionTime === undefined){
        $(function () {
            $(".game-intro-autotype").typed({
                strings: ["Click on the shapes as soon as you can to test your reaction time. Click anywhere outside the tablet to go back to the resume. <span class='blink'>|</span>"]
                , typeSpeed: 40 //40
                , startDelay: 500 //1000
                , loop: false
                , showCursor : false
                , callback : function(){
                    $('.intro-holder').append("<div class='row'><button class='btn game-start-btn'>START GAME</button></div>");
                    $('.game-start-btn').click(function(){
                        $('.intro-holder').css("animation","fadeOut2 .5s");
                        setTimeout(function(){
                            $('.intro-holder').remove();   
                       },300);
                       reactionTester();
                    });
                }

            });
        });
    }
    else{
        $('.game-intro-autotype').text("Click on the shapes as soon as you can to test your reaction time.");
        $('.intro-holder').append("<div class='row'><button class='btn game-start-btn'>RESUME GAME</button></div>");
        $('.game-start-btn').click(function(){
            $('.intro-holder').css("animation","fadeOut2 .5s");
            setTimeout(function(){
                $('.intro-holder').remove();   
           },300);
           reactionTester();
        });
    }

}

function tabGame(){
// function for what happens when 
// tab home button is clicked, 
// loading the game and 
// also revert back to default
    
    //entire body blur
    $('body').append("<div id='blur' class='blur'><div>");
    $('body').addClass('scroll-lock');
    // create new carousel above blur
    $('body').append("<img id='game-base' class='base ' src='src/images/tab.png'>");
    $('#game-base').css({"position":"absolute", "top" : $('#blur-base').offset().top+"px", "left" : $('#blur-base').offset().left+"px","width" : $('#carousel img').width(), "height" : $('#blur-base').height(),"z-index" : "1000", "animation" : "rotation 1s"});
    // hide other carousel
    $('#carousel .app-slider').hide();
    //unslick
    $('.slider').slick('unslick');
    $('.slider').hide();
  
    //----game start----
    setCanvasSize();
    setTimeout(function(){
        gameStart();
    },2000);
    
    //----click on body to revert back to original----
    $('#blur').click(function(){
        $('#blur').remove();
        $('.tab-game-canvas').remove();
        $('#game-base').remove();
        $('#carousel .app-slider').show();
        $('body').removeClass('scroll-lock');
        // slick slider
        $('.slider').show();
        $('.slider').slick({
            //setting-name: setting-value
            arrows:false,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:false,
        });
        $('#carousel .app-slider').css("animation","rotateback 1s");
        $('#carousel .app-slider').css("transform","perspective(1000px) rotateY(20deg)");
        setTimeout(function(){
            $('#carousel .app-slider').css("animation","vibrate 1s infinite");
        },1000);

    });

}  

// CLICK AND HOLD TAB HOME BUTTON 1.5s
var timeoutId = 0;
$('.tabhome').on('mousedown', function() {
    timeoutId = setTimeout(tabGame, 1500);
}).on('mouseup mouseleave', function() {
    clearTimeout(timeoutId);
});


/*------------------WAYPOINTS----------------------*/

// STICKY LEFT SECTION
$('.sticky-start').waypoint(function(direction) {
    if (direction == "down") {
        $('.tab-carousel').addClass('fix-section');
    } else {
        $('.tab-carousel').removeClass('fix-section');
    }

}, {
    offset: '0px'
});

/*------------------------*/  
$('.sticky-end').waypoint(function(direction) {
    var distance = $('.sticky-end').offset().top;

    if (direction == "down") {
        $('.tab-carousel').removeClass('fix-section');
        $('.tab-carousel').addClass('scroll-section');
        $('.tab-carousel').css('top',distance+'px');
    } else {
        $('.tab-carousel').removeClass('scroll-section');
        $('.tab-carousel').addClass('fix-section');
        $('.tab-carousel').css('top','0px');
    }

}, {
    offset: '0px'
});

// ANIMATING TAB CAROUSEL
$('.tab-carousel').waypoint(function(direction) {
    if (direction == "down") {
        $('#carousel .app-slider').css("transform","perspective(1000px) rotateY(20deg)");
        setTimeout(function(){
            $('#carousel .app-slider').css("animation","vibrate 1s infinite");
        },1000);
    } 

}, {
    offset: '10%'
});

$('.phone-carousel').waypoint(function(direction) {
    if (direction == "down") {
        $('.phone-carouel .app-slider').css("transform","perspective(1000px) rotateY(50deg)");
        
    } 

}, {
    offset: '10%'
});


// function for displaying info points  
function displayInfo(i,n,section) {           
    setTimeout(function () {  
      $('.info-sec'+section+'').find('ul li:nth-child('+i+')').css("transform","translateX(0px)");      
      i++;                     
      if (i <= n) {            
         displayInfo(i,n,section);            
      }                       
   }, 300)
}

// ANIMATING THE PROFILE INFO POINTS  
// section 4
$('.info-sec.sec4').waypoint(function(direction) {
    if (direction == "down") {
        var n = $('.info-sec.sec4').find('ul li').length;
        displayInfo(1,n,".sec4");  
    } 
}, {
    offset: '50%'
});
// section 5
$('.info-sec.sec5').waypoint(function(direction) {
    if (direction == "down") {
        var n = $('.info-sec.sec5').find('ul li').length;
        displayInfo(1,n,".sec5");  
    } 
}, {
    offset: '50%'
});
// section 6
$('.info-sec.sec6').waypoint(function(direction) {
    if (direction == "down") {
        var n = $('.info-sec.sec6').find('ul li').length;
        displayInfo(1,n,".sec6");  
    } 
}, {
    offset: '50%'
});

  

          
$(window).resize(function() {
   setTimeout(function(){
       $('.slider').slick('unslick');
       $('.slider').slick({
            //setting-name: setting-value
            arrows:false,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:false,
        });

   },100);

    // SETTING THE VERTICAL POS OF TAB CAROUSEL
    var height = $(window).height();
    var iheight = $('#carousel img').height();
    if (height >= (2*iheight+100)){
        var ypos = (height/2)-(iheight/2)-100;
        $('#carousel .app-slider').css("top",ypos+"px");
    }


});

window.addEventListener("orientationchange", function() {
	// Announce the new orientation number
//	alert(screen.orientation);
    setTimeout(function(){
        var h = window.innerHeight;
        $('#header').height(h);
        $('.sec7').height(h);
    }, 500);
}, false);



       
/*------------------------------------------------*/  
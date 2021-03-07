let log = console.log;


var logoContainer = document.getElementById("logoContainer");
var listLogo = logoContainer.getElementsByTagName("img");


function randomNumber(min, max) {
    return (Math.random() * (max - min) + min);
      };


function startPosition(logo){
    logo.style['left']= `${randomNumber(-100, 200)}%`;
	logo.style['top']=  `${randomNumber(100, 200)}%`;
	logo.style['transition'] = 'left 1s, top 1s';
    
};

for (var i = 0; i < listLogo.length; i++) {

	startPosition(listLogo[i]);
};


var listeCoordX = [];
var listeCoordY = [];

function addCoordList(i, angle){
	listeCoordX[i]= 50 + (45*Math.cos(angle));
	listeCoordY[i]= 50 + (45*Math.sin(angle));
	};

for (var i = 0; i < listLogo.length; i++) {
	let angle = ((Math.PI*2) /listLogo.length) * i ;
	addCoordList(i, angle);
	};



function finalPosition(listLogo,listeCoordX,listeCoordY){

	for (var i = 0; i < listLogo.length; i++) {
		listLogo[i].style['left'] =`${listeCoordX[i]}%` ;
		listLogo[i].style['top'] =`${listeCoordY[i]}%`;
		}
	};


window.addEventListener('scroll', () => {
    const scrolled =  window.scrollY;
    // console.log(scrolled);

    if(scrolled > 650){
        finalPosition(listLogo,listeCoordX,listeCoordY);
    }
    });
	
$(function(){
	$('.slider').slick({
        
		centerMode: true,
		centerPadding: '80px',
		slidesToShow: 2,
		adaptiveHeight: false,
		prevArrow: $('.arrowNext'),
		nextArrow: $('.arrowPrev'),
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: false,
        initialSlide: 1,
        focusOnSelect: true,
       
        responsive: [{
            
            breakpoint: 1024,
            settings: {
            
              slidesToShow: 1,
              initialSlide: 1,
             
            }},
            {
            breakpoint: 600,
            
            settings: {
          
                vertical: true,
                verticalSwiping: true,
              slidesToShow: 1,
              initialSlide: 1,
             
            }
        }
          ] 
      
	  });
});
    /*==================================================================
    [ Validate ]*/
(function ($) {
    "use strict";
    var input = $('.validate-input .input');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

log($(window).width());


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
    console.log(scrolled);

    if(scrolled > 500){
        finalPosition(listLogo,listeCoordX,listeCoordY);
    }
    });
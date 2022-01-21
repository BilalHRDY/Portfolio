// var secondParallax = document.querySelectorAll('.parallax-mirror')[2];
// secondParallax.style['margin-bottom'] = '100px;';

var logoContainer = document.getElementById("logoContainer");
var listLogo = logoContainer.getElementsByTagName("img");

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function startPosition(logo) {
  logo.style["left"] = `${randomNumber(-100, 200)}%`;
  logo.style["top"] = `${randomNumber(100, 200)}%`;
  logo.style["transition"] = "left 1s, top 1s";
}

// for (var i = 0; i < listLogo.length; i++) {
//   startPosition(listLogo[i]);
// }

var listeCoordX = [];
var listeCoordY = [];

function addCoordList(i, angle) {
  listeCoordX[i] = 50 + 45 * Math.cos(angle);
  listeCoordY[i] = 50 + 45 * Math.sin(angle);
}

for (var i = 0; i < listLogo.length; i++) {
  let angle = ((Math.PI * 2) / listLogo.length) * i;
  addCoordList(i, angle);
}

function finalPosition(listLogo, listeCoordX, listeCoordY) {
  for (var i = 0; i < listLogo.length; i++) {
    listLogo[i].style["left"] = `${listeCoordX[i]}%`;
    listLogo[i].style["top"] = `${listeCoordY[i]}%`;
  }
}

// window.addEventListener("scroll", () => {
//     const scrolled = window.scrollY;

//     if (scrolled > 650) {
//       finalPosition(listLogo, listeCoordX, listeCoordY);
//     }

// });

finalPosition(listLogo, listeCoordX, listeCoordY);

$(function () {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 2,
    adaptiveHeight: false,
    prevArrow: $(".arrowPrev"),
    nextArrow: $(".arrowNext"),
    pauseOnHover: true,
    pauseOnFocus: true,
    infinite: true,
    initialSlide: 1,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,

        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
    ],
  });
});

// ******************* Form contact *******************

function sendEmail(inputs) {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputs[0].value,
      email: inputs[1].value,
      message: inputs[2].value,
    }),
  };
  return fetch("/contact", options).then((res) => {
    console.log(res);
    form.reset();
  });
}

function validateEmail(email) {
  return email.value
    .trim()
    .match(
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
    );
}

function validate(input) {
  if (input.value.trim() == "") return false;
  else if (input.getAttribute("id") === "email" && !validateEmail(input)) {
    return false;
  } else return true;
}

const form = document.getElementById("contact-form");
const formInputs = [...form.getElementsByClassName("input")];
const validateDivs = document.getElementsByClassName("validate-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formIsValid = true;

  for (var i = 0; i < formInputs.length; i++) {
    if (validate(formInputs[i]) == false) {
      formInputs[i].parentElement.classList.add("alert-validate");
      formIsValid = false;
    }
  }
  if (formIsValid) {
    sendEmail(formInputs);
    form.reset();
  }
});

formInputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.preventDefault();
    input.parentElement.classList.remove("alert-validate");
  });
});

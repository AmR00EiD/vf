////////////////// //// //// ///////// dark mode ///// //// //// ////////////////////////////

let checkbox = document.querySelector("input");

// Get the body tag
let body = document.querySelector("body");

// This function swaps the data-theme attribute of the HTML tag
function swapTheme(theme) {
  body.setAttribute("data-theme", theme);
}

// This event handler listens for the checkbox to be checked or unchecked
// Then, it stores the data-theme value in the local storage
// And calls the swapTheme function with the appropriate value
checkbox.addEventListener("change", (event) => {
  localStorage.setItem("data-theme", event.target.checked ? "dark" : "light");
  swapTheme(event.target.checked ? "dark" : "light");
});

// This event handler listens for the page to be loaded
// Then, it gets the data-theme value from the local storage
// And calls the swapTheme function with the appropriate value
window.addEventListener("DOMContentLoaded", (event) => {
  let theme = localStorage.getItem("data-theme") || "light";
  swapTheme(theme);
  checkbox.checked = theme === "dark";
});

// //// //// //// //// //// ///// password hide and show password //// //// //// //// //// ////

const input = document.querySelector(".input__field");
const inputIcon = document.querySelector(".input__icon");

inputIcon.addEventListener("click", (e) => {
  e.preventDefault();

  inputIcon.setAttribute(
    "src",
    input.getAttribute("type") === "password"
      ? "img/eye-off.svg"
      : "img/eye.svg"
  );

  input.setAttribute(
    "type",
    input.getAttribute("type") === "password" ? "text" : "password"
  );
});

/// //// //// //// //// //// //// //// slide in choose //// //// //// //// //// //// //// //// ////

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
window.onload = function () {
  setInterval(function () {
    plusSlides(1);
  }, 3000);
};

function frbtn() {
  document.getElementsByClassName("content").style.backgroundColor = "red";
}

/// //// //// //// //// //// //// ////  loader  //// //// //// //// //// //// //// //// ////

// Get the loader element
let loader = document.getElementById("spinner");

// This event handler listens for the page to be fully loaded
// Then, it hides the loader element
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// This event handler listens for the user to leave the page
// Then, it shows the loader element
window.addEventListener("beforeunload", function () {
  loader.style.display = "block";
});

/// //// //// //// //// //// //// ////  signup slider  //// //// //// //// //// //// //// //// ////

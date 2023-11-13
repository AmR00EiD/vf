/////////////////////// dark mode /////////////////////////////
window.addEventListener("DOMContentLoaded", (event) => {
  // Get the checkbox element
  let checkbox = document.querySelector("input");

  // Get the body tag
  let body = document.querySelector("body");

  // This event handler listens for the checkbox to be checked or unchecked
  // Then, if the checkbox is checked (event.target.checked == true)
  // Then apply `data-theme="dark"` to the body tag
  // Otherwise, remove the attribute
  checkbox.addEventListener("change", (event) => {
    event.target.checked
      ? body.setAttribute("data-theme", "dark")
      : body.removeAttribute("data-theme");
  });
});

/// password hide and show password ////

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

/// slide in choose ////

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

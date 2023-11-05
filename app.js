/// password hide and show password ////
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

    togglePassword.addEventListener('click', () => {
            // Toggle the type attribute using
            // getAttribure() method
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            // Toggle the eye and bi-eye icon
            this.classList.toggle('bi bi-eye');
            
        });





// const togglePassword = document.querySelector('#togglePassword');
// togglePassword.addEventListener('click', () => {
//     const input = document.querySelector('#password');
//     input.getAttribute('type') === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password');

//    if (input.getAttribute('type') === 'text'){
//      togglePassword.innerHTML = '<i class="bi-eye-slash  " id="togglePassword"></i>';
//   } else{
//      togglePassword.innerHTML = '<i class="bi-eye" aria-hidden="true" id="togglePassword"></i>';
//   }

// });














// document.onreadystatechange = function () {
//             if (document.readyState !== "complete") {
//                 document.querySelector(
//                     "body").style.visibility = "hidden";
//                 document.querySelector(
//                     ".loader").style.visibility = "visible";
//             } else {
//                 document.querySelector(
//                     ".loader").style.display = "none";
//                 document.querySelector(
//                     "body").style.visibility = "visible";
//             }
//         };


// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }        

//Text slider//

var slideIndexis = 1; 
showSlideses(slideIndexis);

function plusSlides(n) {
  showSlideses(slideIndexis += n);
}

function currentSlide(n) {
  showSlideses(slideIndexis = n);
}

function showSlideses(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexis = 1}    
  if (n < 1) {slideIndexis = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexis-1].style.display = "block";  
  dots[slideIndexis-1].className += " active";
}


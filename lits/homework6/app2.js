//Slide1//


function ready1() {
    let slideIndex1 = 0;
    let slides = document.querySelectorAll('.slide');
  
    document.querySelector('.prev1').addEventListener('click', () => plusSlides1(-1));
    document.querySelector('.next1 ').addEventListener('click', () => plusSlides1(1));
  
    showSlides1(slideIndex1);
  
    function plusSlides1(n) {
      showSlides1(slideIndex1 += n);
    }
  
    function calcSlideNumber(num) {
      if (num < 0) {
        if (num % slides.length === 0) return 0;
  
        return slides.length + (num % slides.length);
      }
  
      return num % slides.length;
    }
    
    function switchSlide1(n, order) {
      slides[n].style.display = "block";
      slides[n].style.order = order;
    }
  
    function showSlides1(n) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      switchSlide1(calcSlideNumber(n), 1);
      switchSlide1(calcSlideNumber(n+1), 2);
      switchSlide1(calcSlideNumber(n+2), 3);
      switchSlide1(calcSlideNumber(n+3), 4);
    }
  }
  
  document.addEventListener("DOMContentLoaded", ready1);


  //Slide2//

  function ready2() {
    let slideIndex2 = 0;
    let slides = document.querySelectorAll('.slide1');
  
    document.querySelector('.prev2').addEventListener('click', () => plusSlides2(-1));
    document.querySelector('.next2 ').addEventListener('click', () => plusSlides2(1));
  
    showSlides2(slideIndex2);
  
    function plusSlides2(n) {
      showSlides2(slideIndex2 += n);
    }
  
    function calcSlideNumber(num) {
      if (num < 0) {
        if (num % slides.length === 0) return 0;
  
        return slides.length + (num % slides.length);
      }
  
      return num % slides.length;   
    }
    
    function switchSlide2(n, order, ) {
      slides[n].style.display = "block";
      slides[n].style.order = order;
    }
  
    function showSlides2(n) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      switchSlide2(calcSlideNumber(n), 1);
      switchSlide2(calcSlideNumber(n+1), 2);
      switchSlide2(calcSlideNumber(n+2), 3);
      switchSlide2(calcSlideNumber(n+3), 4);
      switchSlide2(calcSlideNumber(n+4), 5);
  
    }
  }
  
  document.addEventListener("DOMContentLoaded", ready2);
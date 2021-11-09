'use strict';

/* Testimonial carousel */

$(document).ready(function(){
    $('.testimonial-slide').owlCarousel({
		navigation : true,
		navText: [$('.text-prev'), $('.text-next')],
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		items : 1, 
		center:true,
		loop:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true
	});
});



/* Multi step form */

let currentTab = 0;

renderCircle();
showTab(currentTab);

function showTab(n) {
  
  const x = document.getElementsByClassName("tab");
        x[n].classList.add("tabs-active");
  
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "flex";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Start";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  
  fixStepIndicator(n);
}

function renderCircle() {
  let tabs = document.querySelectorAll('.tab'),
      circleWrap = document.querySelector('.circle-row'),
      i = 0;

  for (i = 0; i < tabs.length; i++) {
    const circle = document.createElement('div');
          circle.classList.add('step');

    circleWrap.prepend(circle);
  }
}

function nextPrev(n) {
  
  const x = document.querySelectorAll(".tab");

  
  if (n == 1 && !validateForm()) return false;
  
  x[currentTab].classList.remove("tabs-active");
  
  currentTab = currentTab + n;
  
  if (currentTab >= x.length) {
    
    document.getElementById("regForm").submit();
    return false;
  }
  
  showTab(currentTab);
}

function validateForm() {
  
  let valid = true,
      x = document.querySelectorAll(".tab"),
      textInput = x[currentTab].querySelectorAll("input[type='text']"),
      numberInput = x[currentTab].querySelectorAll("input[type='number']"),
      passwordInput = x[currentTab].querySelectorAll("input[type='password']"),
      y = x[currentTab].querySelectorAll("input[type='text']"),
      i = 0;
  
      for (i = 0; i < textInput.length; i++) {
        
        if (textInput[i].value == "" || textInput[i].value.length <= 2 || textInput[i].value.length >= 30) {
        
          textInput[i].className += " invalid";
          textInput[i].value = '';
          
          valid = false;
        }
      }

      for (i = 0; i < numberInput.length; i++) {
        
        if (numberInput[i].value == "" || numberInput[i].value.length <= 1 || numberInput[i].value.length >= 9) {
        
          numberInput[i].className += " invalid";
          numberInput[i].value = '';
          
          valid = false;
        }
      }

      for (i = 0; i < passwordInput.length; i++) {
        
        if (passwordInput[0].value != passwordInput[1].value  ) {
        
          textInput[i].className += " invalid";
          textInput[i].value = '';
          
          valid = false;
        }
      }
 
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  
  let x = document.querySelectorAll(".step"),
      i = 0;
  
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
 
  x[n].className += " active";
}

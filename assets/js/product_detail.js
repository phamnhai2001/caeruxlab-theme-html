// slide gallery
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("image");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" show", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " show";
}

// btn quantity 
document.querySelector(".minus_btn").setAttribute("disabled","disable");
var valueCount;

document.querySelector(".plus_btn").addEventListener("click", function(){
    valueCount = document.getElementById("quantity").value;
    valueCount++;
    document.getElementById("quantity").value = valueCount;
    if(valueCount > 1) {
        document.querySelector(".minus_btn").removeAttribute("disabled");
        document.querySelector(".minus_btn").classList.remove("disabled");
    }
});

document.querySelector(".minus_btn").addEventListener("click", function(){
    valueCount = document.getElementById("quantity").value;
    valueCount--;
    document.getElementById("quantity").value = valueCount;
    if(valueCount == 1) {
        document.querySelector(".minus_btn").setAttribute("disabled","disable");
    }
});

//add cart
const open = document.getElementById('cart_view');
const cart_notify = document.getElementById('cart');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    cart_notify.classList.add('active');
});

close.addEventListener('click', () => {
    cart_notify.classList.remove('active');
});


// change tabs
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent =document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});

function openTabs(el) {
   var btn = el.currentTarget; 
   var electronic = btn.dataset.electronic; 
 
   tabContent.forEach(function(el) {
      el.classList.remove("show");
   }); 

   tabLinks.forEach(function(el) {
      el.classList.remove("show");
   }); 

   document.querySelector("#" + electronic).classList.add("show");
   
   
   btn.classList.add("show");
   
}
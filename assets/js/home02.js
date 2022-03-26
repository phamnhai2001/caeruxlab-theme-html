// SLider Main Top
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider_item");
    var dots = document.getElementsByClassName("dot_");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// silder product and collection
function next(t) {
    let elm = t.parentElement.parentElement.children[0];
    let slide = elm.getElementsByClassName("item");
    elm.append(slide[0]);
}
function prev(t) {
    let elm = t.parentElement.parentElement.children[0];
    let slide = elm.getElementsByClassName("item");
    elm.prepend(slide[slide.length - 1]);
}

// slider top televisions
var slide = 1;
show(slide);

function plus(n) {
    show(slide += n);
}

function show(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    if (n > slides.length) { slide = 1 }
    if (n < 1) { slide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
    }
    slides[slide - 1].style.display = "none";
}

// show more
var work = document.querySelector("#show");
var items = Array.from(work.querySelectorAll(".item"));
var loadMore = document.getElementById("loadMore");
maxItems = 6;
loadItems = 2;
hiddenClass = "hiddenStyle";
hiddenItems = Array.from(document.querySelectorAll(".hiddenStyle"));

items.forEach(function (item, index) {
  if (index > maxItems - 1) {
    item.classList.add(hiddenClass);
  }
});

loadMore.addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll("." + hiddenClass), function (
    item,
    index
  ) {
    if (index < loadItems) {
      item.classList.remove(hiddenClass);
    }

    if (document.querySelectorAll("." + hiddenClass).length === 0) {
      loadMore.style.display = "none";
    }
  });
});

// open nav menu
document.getElementById("nav_toggle").onclick = function () { openFunction() };
function openFunction() {
    document.getElementById("menuToggle").classList.toggle("open");
}
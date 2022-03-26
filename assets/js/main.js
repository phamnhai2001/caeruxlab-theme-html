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
        dots[i].className = dots[i].className.replace(" show", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " show";
}

// input search
document.getElementById("btn").onclick = function () { searchFunction() };
function searchFunction() {
    document.getElementById("header_upper_search_form").classList.toggle("show");
}

// open nav menu
document.getElementById("nav_toggle").onclick = function () { openFunction() };
function openFunction() {
    document.querySelector("nav").classList.toggle("open");
}

// slider arrival and recommend
function prev(t) {
    let elm = t.parentElement.parentElement.children[0];
    let slide = elm.getElementsByClassName("slide");
    elm.append(slide[0]);
    console.log(slide);
}
function next(t) {
    let elm = t.parentElement.parentElement.children[0];
    let slide = elm.getElementsByClassName("slide");
    elm.prepend(slide[slide.length - 1]);
}
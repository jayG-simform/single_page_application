
location.href = "#";

function home(){
    location.href = "#home";
}
function about(){
    location.href = "#about";
}
function Service(){
    location.href = "#service";
}
function gallery(){
    location.href = "#gallery";
}

function discover(){
    location.href = "https://redolencehotels.com/";
}

let slideIndex = 1;
showSlides(slideIndex);
gallerySlid(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function plusSlides1(n){
    gallerySlid(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    gallerySlid(slideIndex = n);
}

// home slider 
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides1");

    console.log(slides.length)
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
}

// Gallery slider 
function gallerySlid(n){
    let i;
    let Slides1 = document.querySelectorAll(".mySlides2");

    console.log(Slides1.length)
    if (n > Slides1.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = Slides1.length;
    }

    for (i = 0; i < Slides1.length; i++) {
        Slides1[i].style.display = "none";
    }
    if (slideIndex > Slides1.length) {
        slideIndex = 1
    }

    Slides1[slideIndex - 1].style.display = "block";
    setTimeout(gallerySlid, 3000);
}


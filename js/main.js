
var slideIndex = 1;
var htmlBuilder = "";

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    //console.log("inside showSlides with a value of " + n);

    var slides = document.getElementsByClassName("my-slides");
    var dots = document.getElementsByClassName("dot");
    var dotsContainer = document.getElementById("dots-container");

    //resets if end node
    if (n < 1){
      slideIndex = slides.length;
    }

    if (n > slides.length){
      slideIndex = 1;
    }


    //hides the slides
    for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
    }

    //Build the dots
    htmlBuilder = '<div style="text-align:center">';

    for (i = 0; i < slides.length; i++){
      htmlBuilder += '<span class="dot"></span>';
      //onclick="currentSlide(i)"
    }

    htmlBuilder += '</div>';
    dotsContainer.innerHTML = htmlBuilder;


    //changes the dots
    for (i=0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    console.log(dots[1]);
}

showSlides(slideIndex);

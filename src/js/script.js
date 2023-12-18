// JavaScript for the image slideshow

let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000);
}


window.onload = function () {
    showSlides();
};


//toggle effect on the about page

document.addEventListener("DOMContentLoaded", function () {
    const skillsList = document.getElementById("skillsList");
    const inspirationsContent = document.getElementById("inspirationsContent");

    skillsList.style.display = "none";
    inspirationsContent.style.display = "none";

    function toggleVisibility(element) {
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    document.getElementById("toggleSkills").addEventListener("click", function () {
        toggleVisibility(skillsList);
    });

    document.getElementById("toggleInspirations").addEventListener("click", function () {
        toggleVisibility(inspirationsContent);
    });
});


//scoll to top feature

var scrollToTopBtn = document.getElementById("scrollToTopBtn");


window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


scrollToTopBtn.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

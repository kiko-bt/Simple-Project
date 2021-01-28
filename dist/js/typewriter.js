const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');


accordionItemHeaders.forEach(accordionHeader => {
  accordionHeader.addEventListener('click', () => {
    accordionHeader.classList.toggle('active'); 
    const accordionBody = accordionHeader.nextElementSibling;
    if(accordionHeader.classList.contains('active')) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
    }
    else {
      accordionBody.style.maxHeight = 0;
    }
  });
});


//Get current year
document.getElementById('year').appendChild(document.createTextNode(new Date().getFullYear()));


// Smooth Scroll
var scroll = new SmoothScroll('#main-nav a[href*="#"]', {
  speed: 800
});


// Gallery-slider
let i = 0;
const images = [];
const time = 3000;

images[0] = 'img/slide1.jpg';
images[1] = 'img/slide2.jpg';
images[2] = 'img/slide3.jpg';
images[3] = 'img/slide4.jpg';

function changeImg() {
  document.slide.src = images[i];

  if(i < images.length -1) {
    i++;
  }
  else {
    i = 0;
  }

  setTimeout('changeImg()', time);
}

window.onload = changeImg;

// Transparency menu background
window.addEventListener('scroll', function() {
  if(window.scrollY > 50) {
    document.querySelector('#main-nav').style.opacity = 0.8;
  }
  else {
    document.querySelector('#main-nav').style.opacity = 1;
  }
});




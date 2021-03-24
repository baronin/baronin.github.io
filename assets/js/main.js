'use stict';
let socialNetworksClass = document.querySelector('.social-networks');
if (socialNetworksClass) {
  let socials = document.querySelectorAll("[class*=social_lnk]");
  let i = socials.length;
  let cls = "-clicked";
  while (i--) {
    socials[i].addEventListener(
      "click",
      function (e) {
        let target = e.target;
        let lnk = target.classList.contains("social_lnk")
          ? target
          : target.parentElement;
        lnk.classList.add(cls);

        // Allow time for animation to complete then remove
        // Simpler, but less reliable, than testing for animation-end cross-browser
        setTimeout(function () {
          lnk.classList.remove(cls);
        }, 300);
      },
      false
    );
  }
}

function Circle(el, color) {
  $(el)
    .circleProgress({
      fill: { color: color },
    })
    .on("circle-animation-progress", function (event, process, stepValue) {
      $(this)
        .find("strong")
        .text(Math.round(100 * stepValue) + "%");
    });
}

let serviceSection = document.querySelector('.service');
if (serviceSection) {
  Circle(".progress-bar-round", "#4acaa8");
}

// hamburgerId menu
let body = document.querySelector('body')
let sectionNav = document.querySelector('.nav');
let hamburgerId = document.querySelector('#hamburger');
let overlay = document.querySelector('.overlay');
if (hamburgerId) {
  function toggleMenu () {
    sectionNav.classList.toggle('section-nav--active');
    body.classList.toggle('scroll-lock');
    overlay.classList.toggle('overlay--visibly');
  }
  hamburgerId.addEventListener('click', toggleMenu);
}

let outsideClick = (e) => {
  if (e.target.classList.contains('overlay--visibly')) {
    overlay.classList.remove('overlay--visibly');
    body.classList.remove('scroll-lock');
    sectionNav.classList.remove('section-nav--active');
  }
}

document.addEventListener('click', outsideClick);
let date = new Date().getFullYear();
let dateClass = document.querySelector('.date');
if (dateClass) {
  dateClass.querySelector('span').innerHTML = date;
}

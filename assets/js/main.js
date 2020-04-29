(function () {
  // add click animation to social links
  var socials = document.querySelectorAll("[class*=social_lnk]");
  var i = socials.length;
  var cls = "-clicked";
  while (i--) {
    socials[i].addEventListener(
      "click",
      function (e) {
        var target = e.target;
        var lnk = target.classList.contains("social_lnk")
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
})();

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

Circle(".progress-bar-round", "#4acaa8");

(function() {
  var mail = document.getElementById("email");
  var sayHi = document.querySelector(".say-hi");

  if (isMobile.phone) {
    sayHi.classList.add("hi");
  } else {
    mail.addEventListener("mouseenter", function() {
      sayHi.classList.add("hi");
    });
    mail.addEventListener("mouseleave", function() {
      sayHi.classList.remove("hi");
    });
  }
})();

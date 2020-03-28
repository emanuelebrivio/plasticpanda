(function() {
  var mail = document.getElementById("email");
  var sayHi = document.querySelector(".say-hi");

  mail.addEventListener("mouseenter", function() {
    sayHi.classList.add("hi");
  });
  mail.addEventListener("mouseleave", function() {
    sayHi.classList.remove("hi");
  });
})();

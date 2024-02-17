window.onload = function () {
  cambiocolore();
};

function cambiocolore() {
  window.addEventListener("scroll", function () {
    let targetElement = document.getElementById("box1");
    let targetElementButton = document.getElementById("btn");
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 440) {
      targetElement.classList.add("cambiocolore");
      targetElementButton.classList.add("cambiocoloreBottone");
    } else {
      targetElement.classList.remove("cambiocolore");
      targetElementButton.classList.remove("cambiocoloreBottone");
    }
  });
}

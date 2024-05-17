let boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", apraser);

function apraser() {
  const triggerButton = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect.top;

    if (boxTop < triggerButton) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

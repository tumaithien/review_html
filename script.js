let allBtns = document.querySelectorAll(".btn-style");
allBtns.forEach((elem) => {
  elem.addEventListener("click", function () {
    allBtns.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

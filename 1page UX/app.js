const readMoreBtn = document.querySelector(".readmore-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("showMore");
});

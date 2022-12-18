const panel = document.querySelectorAll(".panel");

panel.forEach((i) => {
   i.addEventListener("click", (e) => {
      e.preventDefault();
      removeActiveClass();
      i.classList.add("active");
   });
});

function removeActiveClass() {
   panel.forEach((i) => {
      i.classList.remove("active");
   });
}

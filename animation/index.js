let openBtn = document.querySelector("#open-btn");
let modalContainer = document.querySelector(".modal-container");
let closeBtn = document.querySelector("#close-btn"); // Fixed selector

console.log(openBtn);

openBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modalContainer) modalContainer.style.display = "none";
});

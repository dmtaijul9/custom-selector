const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

console.log(selected, optionsContainer, optionsList);

selected?.addEventListener("click", () => {
  optionsContainer?.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected?.innerHTML = o.querySelector("label")?.innerText;
    optionsContainer?.classList.toggle("active");
  });
});

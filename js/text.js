const formSubmit = document.querySelector(".form-btn");
const sSection = document.querySelector(".success-section");

formSubmit.addEventListener("click", () => {
  sSection.classList.add("open-success");
});

alert("ok");

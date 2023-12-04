const hamburger = document.querySelector(".hamburger");
const aside = document.querySelector(".side-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  aside.classList.toggle("open-side-bar");
});

// FAQ Section

const buttons = document.querySelectorAll(".faq-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faq = button.nextElementSibling;
    const icon = button.children[1];

    faq.classList.toggle("show");
    icon.classList.toggle("rotate");
  });
});

//Scroll interation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("m-blur");
    } else {
      entry.target.classList.remove("m-blur");
    }
  });
});
const hiddenElement = document.querySelectorAll(".m-hidden");
const jagoElement = document.querySelectorAll(".ogah");
hiddenElement.forEach((el) => observer.observe(el));
jagoElement.forEach((el) => observer.observe(el));

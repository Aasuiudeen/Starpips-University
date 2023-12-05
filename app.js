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

// Client scroll

const carousel = document.querySelector(".client-card-holder");
// arrowIcon = document.querySelector(".client-title-icon i");
firstCard = document.querySelectorAll(".client-card")[0];
const leftIcon = document.getElementById("right");
const rightIcon = document.getElementById("left");

leftIcon.addEventListener("click", () => {
  carousel.scrollLeft += 900;
  carousel.style.scrollBehavior = "smooth";
});

rightIcon.addEventListener("click", () => {
  carousel.style.scrollBehavior = "smooth";
  carousel.scrollLeft -= 900;
});

let isDragstart = false,
  prevPageX,
  prevScrollLeft;
let firstCardWidth = firstCard.clientWidth + 14;

// arrowIcon.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
//   });
// });

const dragStart = (e) => {
  isDragstart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
  carousel.style.scrollBehavior = "smooth";
};
const dragging = (e) => {
  if (!isDragstart) {
    return;
  }
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  carousel.style.scrollBehavior = "smooth";
};
const dragStop = () => {
  isDragstart = false;
  carousel.style.scrollBehavior = "smooth";
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

//Scroll interation
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("m-blur");
//     } else {
//       entry.target.classList.remove("m-blur");
//     }
//   });
// });
// const hiddenElement = document.querySelectorAll(".m-hidden");
// const jagoElement = document.querySelectorAll(".ogah");
// hiddenElement.forEach((el) => observer.observe(el));
// jagoElement.forEach((el) => observer.observe(el));

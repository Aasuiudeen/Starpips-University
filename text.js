const formSubmit = document.querySelector(".form-btn");
const sSection = document.querySelector(".success-section");

formSubmit.addEventListener("click", () => {
  sSection.classList.add("open-success");
});

// Send Email

const form = document.getElementById("form");
form.addEventListener("click", () => {
  sendEmail();
  reset();
  return false;
});

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "aasuiudeen@gmail.com",
    Password: "Khadija018",
    To: "cwetheinerbdoulerhe@gmail.com",
    From: document.getElementById("user-email").value,
    Subject: "A New User Registered",
    Body:
      "Name: " +
      document.getElementById("user-name").value +
      "<br> Email: " +
      document.getElementById("user-email").value +
      "<br> Phone Number: " +
      document.getElementById("user-phone").value +
      "<br> Services: " +
      document.getElementById("user-select").value,
  }).then((message) => setTimeout(removeClassAfterTimeout, 3000));
}

function removeClassAfterTimeout() {
  sSection.classList.remove("open-success");
}

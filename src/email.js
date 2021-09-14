const form = document.querySelector("form");
const email = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");
 
form.addEventListener("submit", e => {
  e.preventDefault();

  checkInput();
});

function checkInput() {

  const emailValue = email.value.trim();

  if (emailValue === "") {
    errorMessage.className = "error-message error";
    errorMessage.innerText ="Whoops! It looks like you forgot to add your email";
  } else if (!isItEmail(emailValue)) {
    errorMessage.className = "error-message error";
    errorMessage.innerText = "Looks like this is not an email";
  } else {
    alert("Yay! Subscribed successfully!");
  };
};

//checking email input validity
function isItEmail (email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
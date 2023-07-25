const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Hide the mobile menu when clicking outside the menu
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !mobileMenuButton.contains(event.target)
  ) {
    mobileMenu.classList.add("hidden");
  }
});

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Fetch the form data
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    // Perform login API request with email and password data
    // Implement AJAX or Fetch API here to send data to the backend
    // Handle the backend response and display appropriate messages to the user
  });

// Function to handle signup form submission
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Fetch the form data
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    // Perform signup API request with name, email, and password data
    // Implement AJAX or Fetch API here to send data to the backend
    // Handle the backend response and display appropriate messages to the user
  });

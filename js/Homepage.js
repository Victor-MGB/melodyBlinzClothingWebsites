const slides = document.querySelectorAll("#heroSlider > div");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.remove("hidden");
    } else {
      slide.classList.add("hidden");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);


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

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData);

  // Perform AJAX request to backend
  // Replace 'your-backend-url' with the actual endpoint URL on your server
  fetch("your-backend-url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataObject),
  })
    .then((response) => {
      if (response.ok) {
        // Display success message or perform additional actions
        console.log("Form submitted successfully.");
      } else {
        // Handle error, display error message, or perform other actions
        console.error("Form submission failed.");
      }
    })
    .catch((error) => {
      // Handle any network or server-related errors
      console.error("Error occurred while submitting the form:", error);
    });
};

// Event listener for form submission
const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener("submit", handleSubmit);
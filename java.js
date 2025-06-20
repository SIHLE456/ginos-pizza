const toggleButton = document.getElementById("toggle-dark-mode");

// Dark mode toggle logic
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Light Mode";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ Light Mode";
    localStorage.setItem("dark-mode", "enabled");
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
    localStorage.setItem("dark-mode", "disabled");
  }
});

// Form validation for contact form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const response = document.createElement("p");
  response.id = "contact-response";
  response.style.fontWeight = "bold";
  form.parentNode.appendChild(response);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || message.length < 10) {
      response.textContent = "Please complete all fields correctly. Message must be at least 10 characters.";
      response.style.color = "red";
      return;
    }

    // You could add AJAX or form submission here if you have a backend

    response.textContent = "Thank you for contacting us! We'll respond shortly.";
    response.style.color = "green";
    form.reset();
  });
});

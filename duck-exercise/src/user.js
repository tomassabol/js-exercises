// @ts-check
const form = document.getElementById("userForm");
if (!form) {
  throw new Error("Element not found");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // @ts-expect-error
  const formData = new FormData(form);
  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!username) throw new Error("Username is required");
  if (!email) throw new Error("Email is required");
  if (!password) throw new Error("Password is required");

  let isValid = true;

  // Username validation
  if (username.length < 4 || username.length > 15) {
    isValid = false;
    // @ts-expect-error
    showError(form.username, "Username must be between 4 and 15 characters");
  } else {
    // @ts-expect-error
    hideError(form.username);
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    // @ts-expect-error
    showError(form.email, "Please enter a valid email address");
  } else {
    // @ts-expect-error
    hideError(form.email);
  }

  // Password validation
  if (password.length > 8 || password.length === 0) {
    isValid = false;
    // @ts-expect-error
    showError(form.password, "Password must be 8 characters or less");
  } else {
    // @ts-expect-error
    hideError(form.password);
  }

  if (!isValid) {
    throw new Error("Form is invalid");
  }

  // @ts-expect-error
  console.log("Form Data:", Object.fromEntries(formData.entries()));

  alert("Form submitted successfully");
});

/**
 *
 * @param {HTMLElement} input
 * @param {string} message
 */
function showError(input, message) {
  const errorElement = input.nextElementSibling;
  if (!errorElement) {
    throw new Error("Error element not found");
  }
  errorElement.textContent = message;
  // @ts-expect-error
  errorElement.style.display = "block";
}

/**
 *
 * @param {HTMLElement} input
 */
function hideError(input) {
  const errorElement = input.nextElementSibling;
  if (!errorElement) {
    throw new Error("Error element not found");
  }
  // @ts-expect-error
  errorElement.style.display = "none";
}

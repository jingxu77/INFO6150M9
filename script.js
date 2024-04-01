document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        handleFormSubmit();
    });
});

// Function to handle form submission
function handleFormSubmit() {
    const name = document.getElementById("name");
    const yearOfBirth = document.getElementById("yearOfBirth");
    const usResident = document.getElementById("liveInUS"); 
    const zipcode = document.getElementById("zipcode");
    const password = document.getElementById("password");
    const pizzaType = document.getElementById("pizzaPreference");

    // Clear previous success and error messages
    clearSuccessAndErrors();

    let valid = true;

    // Validation logic
    if (name.value.length < 3) {
        displayError("nameError", "Name must be at least 3 characters long.");
        valid = false;
    }
    if (yearOfBirth.value < 1901 || yearOfBirth.value > 2099) {
        displayError("yearOfBirthError", "Year of Birth must be between 1901 and 2099.");
        valid = false;
    }
    if (usResident.checked && zipcode.value.length !== 5) {
        displayError("zipcodeError", "Zipcode must be 5 digits long.");
        valid = false;
    }
    if (password.value.length < 8) {
        displayError("passwordError", "Password must be at least 8 characters long.");
        valid = false;
    }
    if (pizzaType.value === "") {
        displayError("pizzaTypeError", "Please select a pizza type.");
        valid = false;
    }

    if (valid) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("successMessage").textContent = "Accepted";
        document.getElementById("successMessage").classList.add('accepted-message');
    }
}

// Function to display error messages
function displayError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.display = "block";
    }
}

// Function to clear success and error messages
function clearSuccessAndErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.style.display = "none";
    });

    const successMessage = document.getElementById("successMessage");
    if (successMessage) {
        successMessage.style.display = "none"; 
        successMessage.classList.remove('accepted-message');
    }
}

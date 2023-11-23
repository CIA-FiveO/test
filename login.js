// login.js
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const loginForm = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Array of predefined user information for testing
    const predefinedUsers = [
        { email: 'M.Kreivic@cia.com', password: 'CIAPass' },
        { email: 'L.Hayes@cia.com', password: 'CIAPass' },
        { email: 'D.King@cia.com', password: 'CIAPass' },
        { email: 'K.Waters@cia.com', password: 'CIAPass' },
        // Add more users as needed
    ];

    loginForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the values entered by the user
        const email = emailInput.value;
        const password = passwordInput.value;

        // Log the entered values (for debugging purposes)
        console.log("Entered Email:", email);
        console.log("Entered Password:", password);

        // Check if entered credentials match any of the predefined user information
        const userMatch = predefinedUsers.find(user => user.email === email && user.password === password);

        if (userMatch) {
            // Log a message to indicate successful authentication (for debugging purposes)
            console.log("Authentication successful for user:", userMatch.email);

            // Log a message to indicate the attempt to navigate (for debugging purposes)
            console.log("Navigating to activitypage.html");

            // Navigate to the next page or perform the desired action
            window.location.href = 'activitypage.html'; // Fix the path here
        } else {
            // Log a message to indicate authentication failure (for debugging purposes)
            console.log("Authentication failed. Please check your email and password.");

            // Show an error message
            alert("Authentication failed. Please check your email and password sent to you by the Central Intelligence Agency.");
        }
    });
});
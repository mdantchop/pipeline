// Welcome message based on the current time
function getWelcomeMessage() {
    const hour = new Date().getHours();

    if (hour < 12) {
        return "Good Morning! ☀️";
    } else if (hour < 18) {
        return "Good Afternoon! 🌤️";
    } else {
        return "Good Evening! 🌙";
    }
}

// Display the message
console.log(getWelcomeMessage());

// Example: Show in a web page
// document.getElementById("welcome").textContent = getWelcomeMessage();
// Set the date we're counting down to
const countdownDate = new Date("August 24, 2025 23:59:59").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the "countdown" div
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "It's time!";
    }
}, 1000);

const popupImage = document.getElementById("popup-image");
let popupVisible = false; // Flag to track visibility
let popupTimeout; // Variable to store the timeout
let intervalTimeout; // Variable to store the interval timeout

function showPopupImage() {
    if (!popupVisible) { // Check if the popup is already visible
        popupImage.classList.add("show");
        popupVisible = true; // Set the flag to true

        // Set a timeout to hide the popup after a specified duration
        popupTimeout = setTimeout(() => {
            popupImage.classList.remove("show");
            popupVisible = false; // Reset the flag
        }, 4000); // Change this value to adjust how long the popup is visible (e.g., 5000 ms = 5 seconds)
    }
}

// This function controls when the popup can be shown again
function resetPopupVisibility() {
    if (!popupVisible) { // Only show the popup if it's not currently visible
        showPopupImage(); // Show the popup again
    }
}

// Listen for the scroll event
window.addEventListener("scroll", () => {
    if (!popupVisible && !intervalTimeout) { // Ensure the popup is not visible and the interval is not set
        showPopupImage();
        // Start the interval to prevent immediate re-showing
        intervalTimeout = setTimeout(() => {
            intervalTimeout = null; // Reset the interval timeout after the popup has shown
        }, 50000); // Adjust this value as needed
    }
});

// Set a longer timeout to control when the popup can show again after hiding
setInterval(() => {
    if (!popupVisible) {
        showPopupImage(); // Show the popup again if it's hidden
    }
}, 10000); // Adjust this value as needed 

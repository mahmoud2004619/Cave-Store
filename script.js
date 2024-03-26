function nav() {
    // search-box open close js code
    let navbar = document.querySelector(".navbar");
    let searchBox = document.querySelector(".search-box .bx-search");
    // let searchBoxCancel = document.querySelector(".search-box .bx-x");

    searchBox.addEventListener("click", () => {
        navbar.classList.toggle("showInput");
        if (navbar.classList.contains("showInput")) {
            searchBox.classList.replace("bx-search", "bx-x");
        } else {
            searchBox.classList.replace("bx-x", "bx-search");
        }
    });

    // sidebar open close js code
    let navLinks = document.querySelector(".nav-links");
    let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    menuOpenBtn.onclick = function () {
        navLinks.style.left = "0";
    }
    menuCloseBtn.onclick = function () {
        navLinks.style.left = "-100%";
    }
}
nav()
// =========================================== //

function sale() {
    // Set the countdown date (year, month - 1, day, hour, minute, second)
    const countdownDate = new Date(2024, 11, 31, 23, 59, 59).getTime();

    // Update the countdown every second
    const countdown = setInterval(() => {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time remaining
        const timeRemaining = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 1000));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("days").textContent = padZero(days);
        document.getElementById("hours").textContent = padZero(hours);
        document.getElementById("minutes").textContent = padZero(minutes);
        document.getElementById("seconds").textContent = padZero(seconds);

        // If the countdown is finished, display a message
        if (timeRemaining < 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = "Countdown Finished";
        }
    }, 1000);

    // Function to add leading zero to numbers less than 10
    function padZero(number) {
        return number < 10 ? "0" + number : number;
    }
}

sale()

document.getElementById("year").textContent = new Date().getFullYear();

function sayHello() {
    alert("Thanks for visiting!");
}

function visibility() {
    document.querySelector(".contact").classList.toggle("hidden");
}

function calculateExperience(startYear) {
    return new Date().getFullYear() - startYear;
}

document.getElementById("expYears").textContent = calculateExperience(2026);

function timeLeft(targetDate) {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((targetDate - new Date()) / millisecondsPerDay);
}

const daysLeft = timeLeft(new Date("2028-03-01T00:07:30"));
document.getElementById("timeLeft").textContent =
    daysLeft > 0 ? `${daysLeft} days` : "No License";

function updateProjectAmount() {
    document.getElementById("projectAmount").textContent =
        document.querySelectorAll(".project-card").length;
}

updateProjectAmount();

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

function validateForm(form) {
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all fields");
        return false;
    }

    alert("Message sent!");
    return false;
}
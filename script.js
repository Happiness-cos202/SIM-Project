const form = document.getElementById("incidentForm");
const successSection = document.getElementById("success");
const reportSection = document.getElementById("report");
const referenceNumber = document.getElementById("referenceNumber");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    referenceNumber.textContent = `SIM-2026-${randomNumber}`;

    reportSection.style.display = "none";
    successSection.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
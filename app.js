document.addEventListener("DOMContentLoaded", function () {
    // Toggle Sidebar
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Close sidebar when clicking outside (on small screens)
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });

    // Functionality for all buttons
    document.querySelector(".hire-me").addEventListener("click", function () {
        alert("Thank you for your interest! Please contact me via email.");
    });

    document.querySelector(".portfolio-btn").addEventListener("click", function () {
        window.location.href = "#portfolio"; // Change to actual portfolio section
    });

    document.querySelector(".resume-btn").addEventListener("click", function () {
        window.location.href = "resume.pdf"; // Change to actual resume file
    });

    document.querySelector(".services-btn").addEventListener("click", function () {
        window.location.href = "#services"; // Change to actual services section
    });

    document.querySelector(".blog-btn").addEventListener("click", function () {
        window.location.href = "#blog"; // Change to actual blog section
    });
});


// Toggle hamburger menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Smooth scroll bounce effect (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        const targetPosition = target.offsetTop - 60; // Adjust for fixed navbar
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Navbar dropdown functionality
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", function() {
            this.querySelector(".dropdown-content").style.display = "block";
        });
        dropdown.addEventListener("mouseleave", function() {
            this.querySelector(".dropdown-content").style.display = "none";
        });
    });

    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Highlight active link in navbar
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(navLink => {
                navLink.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    // Add more cool interactions here
});

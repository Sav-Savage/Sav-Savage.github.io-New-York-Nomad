document.addEventListener("DOMContentLoaded", function() {
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

    // Link buttons to sections
    const buttons = document.querySelectorAll(".btn-outline");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const target = document.querySelector(targetId);
            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

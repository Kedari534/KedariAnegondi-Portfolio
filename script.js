document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();  // Prevent the default anchor link behavior
            
            // Get the target section's ID from the href attribute
            const targetId = link.getAttribute("href");
            
            // Ensure targetId is not null or undefined before using it
            if (targetId) {
                const sectionId = targetId.substring(1);  // Remove the leading '#'
                const targetSection = document.getElementById(sectionId);

                if (targetSection) {
                    // Scroll to the target section smoothly
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: "smooth"
                    });
                } else {
                    console.warn(`Section with ID ${sectionId} not found.`);
                }
            }
        });
    });
});

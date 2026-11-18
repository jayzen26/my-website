document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById("cta-btn");
    
    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            alert("Hello! Thanks for clicking. Your website folder is ready to customize.");
        });
    }
});
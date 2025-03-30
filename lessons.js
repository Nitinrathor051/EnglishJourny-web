// JavaScript for dynamic category filtering

document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");
    const materialCards = document.querySelectorAll(".material-card");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            // Remove 'active' class from all categories
            categories.forEach(cat => cat.classList.remove("active"));
            
            // Add 'active' class to the clicked category
            category.classList.add("active");

            // Get the selected category
            const selectedCategory = category.getAttribute("data-category");

            // Show/hide material cards based on the selected category
            materialCards.forEach(card => {
                if (card.getAttribute("data-category") === selectedCategory) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Trigger click on the first category by default
    if (categories.length > 0) {
        categories[0].click();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".merch-filter");
    const products = document.querySelectorAll(".product-card[data-category]");

    filters.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filters.forEach(item => item.classList.remove("active"));
            button.classList.add("active");

            products.forEach(product => {
                const show =
                    filter === "all" ||
                    product.dataset.category === filter;

                product.classList.toggle("merch-hidden", !show);
            });
        });
    });
});

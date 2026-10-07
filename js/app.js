const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

function closeMenu() {
    nav.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.setAttribute("aria-expanded", "false");
}

function openMenu() {
    nav.classList.add("open");
    menuButton.textContent = "✕";
    menuButton.setAttribute("aria-label", "Close navigation");
    menuButton.setAttribute("aria-expanded", "true");
}

menuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (nav.classList.contains("open")) {
        closeMenu();
    } else {
        openMenu();
    }
});

nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
    if (
        nav.classList.contains("open") &&
        !nav.contains(event.target) &&
        event.target !== menuButton
    ) {
        closeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

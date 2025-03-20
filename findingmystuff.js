const container = document.querySelector('.Room');

// Scroll on arrow keys
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        container.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    }
});
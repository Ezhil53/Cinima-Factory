document.querySelectorAll(".carousel a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.querySelectorAll(".carousel-item").forEach(item => {
            item.classList.add("hidden");
        });
        document.getElementById(targetId).classList.remove("hidden");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    btn.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => menu.classList.add("hidden"));
    });
});
/* =========================
   Games Dropdown
========================= */

function setupGamesDropdown() {

    const button = document.querySelector(".nav-category > a");
    const menu = document.querySelector(".submenu");

    if (!button || !menu) return;

    button.addEventListener("click", function (e) {

        e.preventDefault();

        menu.style.display =
            menu.style.display === "flex"
                ? "none"
                : "flex";

        menu.style.flexDirection = "column";

    });

    document.addEventListener("click", function (e) {

        if (!e.target.closest(".nav-category")) {
            menu.style.display = "none";
        }

    });

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            menu.style.display = "none";

        });

    });

}

/* =========================
   Games Dropdown
========================= */

function setupGamesDropdown() {

    const button =
        document.querySelector(".nav-category > a");

    const menu =
        document.querySelector(".submenu");


    if (!button || !menu) return;


    button.addEventListener("click", e => {

        e.preventDefault();

        menu.style.display =
            menu.style.display === "flex"
            ? "none"
            : "flex";

    });


    document.addEventListener("click", e => {

        if (!e.target.closest(".nav-category")) {

            menu.style.display = "none";

        }

    });

}

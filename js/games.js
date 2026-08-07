/* =========================
   Games Dropdown
========================= */

function setupGamesDropdown() {

    const category = document.querySelector(".nav-category");

    if (!category) return;


    const button = category.querySelector(":scope > a");

    const menu = category.querySelector(".submenu");


    if (!button || !menu) return;


    button.addEventListener("click", function(e) {

        e.preventDefault();

        menu.classList.toggle("open");

    });


    document.addEventListener("click", function(e) {

        if (!category.contains(e.target)) {

            menu.classList.remove("open");

        }

    });

}

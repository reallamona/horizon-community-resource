/* =========================
   Games Dropdown
========================= */

function setupGamesDropdown() {

    const category = document.querySelector(".nav-category");

    const button = category.querySelector(":scope > a");

    const menu = category.querySelector(".submenu");


    if (!category || !button || !menu) return;


    button.addEventListener("click", function(e) {

        e.preventDefault();

        e.stopPropagation();

        menu.classList.toggle("open");

    });


    menu.addEventListener("click", function(e) {

        e.stopPropagation();

    });


    document.addEventListener("click", function() {

        menu.classList.remove("open");

    });

}

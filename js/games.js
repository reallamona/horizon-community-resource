/* =========================
   Games Dropdown
========================= */

function setupGamesDropdown() {

    const button = document.querySelector(".nav-category > a");

    const menu = document.querySelector(".submenu");


    if (!button || !menu) return;


    button.addEventListener("click", function(e) {

        e.preventDefault();

        e.stopPropagation();

        menu.classList.toggle("open");

    });


    document.addEventListener("click", function(e) {

        if (!e.target.closest(".nav-category")) {

            menu.classList.remove("open");

        }

    });


    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function() {

            menu.classList.remove("open");

        });

    });

}

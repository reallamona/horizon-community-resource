/* =========================
   Games Dropdown
========================= */

function setupGamesDropdown() {

    const category = document.querySelector(".nav-category");

    const button = document.querySelector(".nav-category > a");

    const menu = document.querySelector(".submenu");


    if (!category || !button || !menu) {

        console.error("Games dropdown elements missing");

        return;

    }


    button.onclick = function(e) {

        e.preventDefault();

        e.stopPropagation();


        menu.classList.toggle("open");

    };


    menu.onclick = function(e) {

        e.stopPropagation();

    };


    document.onclick = function() {

        menu.classList.remove("open");

    };

}

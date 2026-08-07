/* =========================
   Games Dropdown
========================= */

function setupGamesDropdown() {

    const button = document.querySelector(".nav-category > a");

    const menu = document.querySelector(".submenu");


    if (!button || !menu) return;


    button.addEventListener("click", (e) => {

        e.preventDefault();

        menu.classList.toggle("open");

    });


    document.addEventListener("click", (e) => {

        if (!e.target.closest(".nav-category")) {

            menu.classList.remove("open");

        }

    });


    menu.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("open");

            });

        });

}

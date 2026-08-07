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


        if (menu.style.display === "flex") {

            menu.style.display = "none";

        } else {

            menu.style.display = "flex";

            menu.style.flexDirection = "column";

        }

    });


    menu.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", function() {

                menu.style.display = "none";

            });

        });


    document.addEventListener("click", function(e) {

        if (!e.target.closest(".nav-category")) {

            menu.style.display = "none";

        }

    });

}

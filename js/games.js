/* =========================
   Games Dropdown
========================= */

function setupGamesDropdown() {

    const button =
        document.querySelector(".nav-category > a");

    const menu =
        document.querySelector(".submenu");


    if (!button || !menu) return;


    button.addEventListener("click", (e) => {

        e.preventDefault();

        const open =
            menu.style.display === "flex";


        menu.style.display =
            open ? "none" : "flex";

        menu.style.flexDirection = "column";

    });


    document.addEventListener("click", (e) => {

        if (!e.target.closest(".nav-category")) {

            menu.style.display = "none";

        }

    });


    menu.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    menu.style.display = "none";

                }
            );

        });

}

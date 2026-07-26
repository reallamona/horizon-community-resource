/* Page Loader */

async function loadPage(page) {

    const content = document.getElementById("content");

    try {

        const response = await fetch(page);

        if (!response.ok) {
            throw new Error(page + " failed to load");
        }

        const html = await response.text();

        content.innerHTML = html;

        setupNavigation();

    } catch (error) {

        console.error(error);

    }

}


/* Navigation */

function setupNavigation() {

    const links = document.querySelectorAll("[data-page]");

    links.forEach(link => {

        link.onclick = function(e) {

            e.preventDefault();

            loadPage(this.dataset.page);

        };

    });

}


/* Search */

function setupSearch() {

    const search = document.getElementById("search");

    if (!search) return;


    search.addEventListener("input", function() {

        const filter = search.value.toLowerCase();

        const items = document.querySelectorAll(".resource-card");


        items.forEach(item => {

            const text = item.textContent.toLowerCase();

            item.style.display =
                text.includes(filter) ? "" : "none";

        });

    });

}


/* Games Dropdown */

function setupGamesDropdown() {

    const gamesToggle = document.querySelector(".nav-category > a");
    const gamesMenu = document.querySelector(".submenu");


    if (!gamesToggle || !gamesMenu) return;


    gamesToggle.addEventListener("click", function(e) {

        e.preventDefault();

        gamesMenu.style.display =
            gamesMenu.style.display === "flex"
            ? "none"
            : "flex";

        gamesMenu.style.flexDirection = "column";

    });

}


/* Start */

setupNavigation();
setupSearch();
setupGamesDropdown();
loadPage("pages/home.html");

/* Load Pages */

async function loadPage(page) {

    const content = document.getElementById("content");

    try {
        const response = await fetch("pages/" + page);

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

            const page = this.dataset.page;

            loadPage(page);

        };

    });

}


setupNavigation();



/* Search */

function setupSearch() {

    const search = document.getElementById("search");

    if (!search) return;

    search.addEventListener("input", function () {

        const filter = search.value.toLowerCase();

        const cards = document.querySelectorAll(".resource-card");

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            card.style.display =
                text.includes(filter) ? "" : "none";

        });

    });

}


setupSearch();



/* Game Dropdown */

const gamesToggle = document.getElementById("games-toggle");
const gamesMenu = document.getElementById("games-menu");

if (gamesToggle && gamesMenu) {

    gamesToggle.addEventListener("click", function(e) {

        e.preventDefault();

        gamesMenu.style.display =
            gamesMenu.style.display === "flex"
            ? "none"
            : "flex";

        gamesMenu.style.flexDirection = "column";

    });

}

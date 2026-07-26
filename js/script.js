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

            const page = this.dataset.page;

            loadPage(page);


            // Remove active from all links

            links.forEach(link => {
                link.classList.remove("active");
            });


            // Add active to clicked link

            this.classList.add("active");

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

document
    .querySelector('[data-page="pages/home.html"]')
    .classList.add("active");


/* Sidebar Toggle */

const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const layout = document.querySelector(".layout");


if (sidebarToggle) {

    sidebarToggle.addEventListener("click", function() {

        sidebar.classList.toggle("collapsed");

        layout.classList.toggle("sidebar-collapsed");

    });

}

/* Copy Link Buttons */

document.addEventListener("click", function(e) {

    if (e.target.classList.contains("copy-link")) {

        navigator.clipboard.writeText(
            e.target.dataset.url
        );

        e.target.textContent = "✓";

        setTimeout(() => {
            e.target.textContent = "Copy";
        }, 1000);
    }

});

function addCopyButtons() {

    const links = document.querySelectorAll(".resource-card a");

    links.forEach(link => {

        const button = document.createElement("button");

        button.textContent = "Copy";
        button.className = "copy-link";

        button.dataset.url = link.href;

        link.parentElement.appendChild(button);

    });

}

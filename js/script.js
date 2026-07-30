/* =========================
   Page Loader
========================= */

async function loadPage(page) {

    const content = document.getElementById("content");

    try {

        const response = await fetch(page);

        if (!response.ok) {
            throw new Error(page + " failed to load");
        }

        const text = await response.text();

        if (page.endsWith(".md")) {

            content.innerHTML = marked.parse(text);

        } else {

            content.innerHTML = text;

            loadPageScript(page);

        }

        addCopyButtons();
        addLastUpdated(page);

    } catch (error) {

        console.error(error);

    }

}


/* =========================
   Page Scripts
========================= */

function loadPageScript(page) {

    if (page.includes("home.html") && typeof home === "function") {
        home();
    }

    if (page.includes("games/") && typeof games === "function") {
        games();
    }

    if (page.includes("community.html") && typeof community === "function") {
        community();
    }

    if (page.includes("research.html") && typeof research === "function") {
        research();
    }

    if (page.includes("speedrunning.html") && typeof speedrunning === "function") {
        speedrunning();
    }

}


/* =========================
   Copy Buttons
========================= */

function addCopyButtons() {

    document.querySelectorAll(".resource-card a")
        .forEach(link => {

            if (link.parentElement.querySelector(".copy-link")) {
                return;
            }

            const button = document.createElement("button");

            button.innerHTML = `<img src="assets/copy.png" alt="Copy">`;

            button.title = "Copy";

            button.className = "copy-link";

            button.dataset.url = link.href;

            link.parentElement.appendChild(button);

        });

}


document.addEventListener("click", function(e) {

    const button = e.target.closest(".copy-link");

    if (!button) return;

    navigator.clipboard.writeText(button.dataset.url)
        .then(() => {

            button.title = "Copied!";

            setTimeout(() => {
                button.title = "Copy";
            }, 1000);

        });

});


/* =========================
   Navigation
========================= */

function setupNavigation() {

    document.querySelectorAll("[data-page]")
        .forEach(link => {

            link.onclick = function(e) {

                e.preventDefault();

                const page = this.dataset.page;

                loadPage(page);

                document.querySelectorAll("[data-page]")
                    .forEach(link => {
                        link.classList.remove("active");
                    });

                this.classList.add("active");

            };

        });

}


/* =========================
   Search
========================= */

function setupSearch() {

    const search = document.getElementById("search");

    if (!search) return;

    search.addEventListener("input", function() {

        const filter = search.value.toLowerCase();

        document.querySelectorAll(".resource-card")
            .forEach(card => {

                const text = card.textContent.toLowerCase();

                card.style.display =
                    text.includes(filter)
                    ? ""
                    : "none";

            });

    });

}


/* =========================
   Dropdown
========================= */

function setupGamesDropdown() {

    const button = document.querySelector(".nav-category > a");

    const menu = document.querySelector(".submenu");

    if (!button || !menu) return;

    button.onclick = function(e) {

        e.preventDefault();

        menu.style.display =
            menu.style.display === "flex"
            ? "none"
            : "flex";

        menu.style.flexDirection = "column";

    };

}


/* =========================
   Updates
========================= */

function addLastUpdated(page) {

    const updated = document.querySelector(".updated");

    if (!updated) return;

    const fileName = page.split("/").pop();

    if (pageUpdates[fileName]) {

        updated.textContent =
            "Last updated: " + pageUpdates[fileName];

    }

}


/* =========================
   Sidebar
========================= */

function setupSidebar() {

    const button = document.getElementById("sidebar-toggle");

    const sidebar = document.getElementById("sidebar");

    const layout = document.querySelector(".layout");

    if (!button) return;

    button.onclick = function() {

        sidebar.classList.toggle("collapsed");

        layout.classList.toggle("sidebar-collapsed");

    };

}


/* =========================
   Initialize
========================= */

function init() {

    setupNavigation();

    setupSearch();

    setupGamesDropdown();

    setupSidebar();

    loadPage("pages/home.html");

    document
        .querySelector('[data-page="pages/home.html"]')
        .classList.add("active");

}


init();

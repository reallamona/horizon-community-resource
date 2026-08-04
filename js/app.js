/* =========================
   Configuration
========================= */

const CONFIG = {
    homePage: "pages/home.html",

    pages: {
        home: "pages/home.html",
        games: "pages/games.html",
        research: "pages/research.html",
        speedrunning: "pages/speedrunning.html",
        community: "pages/community.html"
    },

    copyTimeout: 1000
};


/* =========================
   Page Loader
========================= */

async function loadPage(page) {

    const content = document.getElementById("content");

    content.innerHTML = `
        <p>Loading...</p>
    `;

    try {

        const response = await fetch(page);

        if (!response.ok) {
            throw new Error(`${page} failed to load`);
        }

        content.innerHTML = await response.text();
       
       initializePage(page);

    } catch (error) {


        console.error(error);

    }

}


/* =========================
   Navigation
========================= */

function setActiveLink(link) {

    document.querySelectorAll("[data-page]")
        .forEach(item => {
            item.classList.remove("active");
        });

    if (link) {
        link.classList.add("active");
    }

}

function setupNavigation() {

    document.querySelectorAll("[data-page]").forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const page = this.dataset.page;

            loadPage(page);
            setActiveLink(this);

        });

    });

}


/* =========================
   Copy Buttons
========================= */

function addCopyButtons() {

    document.querySelectorAll(".resource-card a").forEach(link => {

        if (link.parentElement.querySelector(".copy-link")) return;

        const button = document.createElement("button");

        button.className = "copy-link";
        button.title = "Copy";
        button.dataset.url = link.href;
        button.innerHTML = `<img src="assets/copy.png" alt="Copy">`;

        link.parentElement.appendChild(button);

    });

}


function copyLink(url, button) {

    navigator.clipboard.writeText(url).then(() => {

        button.title = "Copied!";

        setTimeout(() => {

            button.title = "Copy";

        }, CONFIG.copyTimeout);

    });

}


document.addEventListener("click", function (e) {

    const button = e.target.closest(".copy-link");

    if (!button) return;

    copyLink(button.dataset.url, button);

});


/* =========================
   Last Updated
========================= */

function addLastUpdated(page) {

    const updated = document.querySelector(".updated");

    if (!updated) return;

    const update =
        pageUpdates[page] ||
        pageUpdates[page.split("/").pop()];

    updated.textContent = update
        ? `Last updated: ${update}`
        : "";

}


/* =========================
   Initialize
========================= */

function init() {

    setupNavigation();
    setupGamesDropdown();

    loadPage(CONFIG.homePage);

    document
        .querySelector(`[data-page="${CONFIG.homePage}"]`)
        .classList.add("active");

}


document.addEventListener("DOMContentLoaded", init);

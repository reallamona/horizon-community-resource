/* =========================
   Configuration
========================= */

const CONFIG = {
    homePage: "pages/home.html",
    copyTimeout: 1000
};


/* =========================
   Page Loader
========================= */

async function loadPage(page) {

    const content = document.getElementById("content");

    try {

        const response = await fetch(page);

        if (!response.ok) {
            throw new Error(`${page} failed to load`);
        }

        content.innerHTML = await response.text();

        addCopyButtons();
        addLastUpdated(page);

    } catch (error) {

        console.error(error);

    }

}


/* =========================
   Navigation
========================= */

function setActiveLink(link) {

    document.querySelectorAll("[data-page]").forEach(item => {
        item.classList.remove("active");
    });

    link.classList.add("active");

}


function setupNavigation() {

    document.querySelectorAll("[data-page]").forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            loadPage(this.dataset.page);
            setActiveLink(this);

        });

    });

}


/* =========================
   Games Dropdown
========================= */

function setupGamesDropdown() {

    const button = document.querySelector(".nav-category > a");
    const menu = document.querySelector(".submenu");

    if (!button || !menu) return;

    button.addEventListener("click", function (e) {

        e.preventDefault();

        menu.style.display =
            menu.style.display === "flex"
                ? "none"
                : "flex";

        menu.style.flexDirection = "column";

    });

    document.addEventListener("click", function (e) {

        if (!e.target.closest(".nav-category")) {
            menu.style.display = "none";
        }

    });

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            menu.style.display = "none";

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

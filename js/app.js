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
   Application State
========================= */

const STATE = {
    currentPage: null
};


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

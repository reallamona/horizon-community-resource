/* =========================
   Configuration
========================= */

const CONFIG = {

    homePage: "pages/home.json",

    pages: {
        home: "pages/home.json",
        games: "pages/games.json",
        community: "pages/community.json",
        speedrunning: "pages/speedrunning.json"
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
   Initialize
========================= */

function init() {

    setupNavigation();

    setupGamesDropdown();


    loadPage(CONFIG.homePage);


    const homeLink = document.querySelector(
        `[data-page="${CONFIG.homePage}"]`
    );


    if (homeLink) {

        homeLink.classList.add("active");

    }

}


document.addEventListener("DOMContentLoaded", init);

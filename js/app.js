/* =========================
   Configuration
========================= */

const CONFIG = {

    homePage: "data/pages/home.json",

    pages: {

        home: "data/pages/home.json",
        games: "data/pages/games.json",
        community: "data/pages/community.json",
        speedrunning: "data/pages/speedrunning.json"

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

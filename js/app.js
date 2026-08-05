/* =========================
   Imports
========================= */

import { setupNavigation } from "./navigation.js";
import { setupGamesDropdown } from "./games.js";
import { loadPage } from "./page-loader.js";


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
   Initialize
========================= */

function init() {

    setupNavigation();
    setupGamesDropdown();

    loadPage(CONFIG.homePage);


    const homeLink =
        document.querySelector(
            `[data-page="${CONFIG.homePage}"]`
        );


    if (homeLink) {

        homeLink.classList.add("active");

    }

}


document.addEventListener(
    "DOMContentLoaded",
    init
);

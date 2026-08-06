/* =========================
   Page Updates
========================= */

const pageUpdates = {

    // Main Pages
    "pages/home.json": "August 4, 2026",
    "pages/speedrunning.json": "August 2, 2026",
    "pages/community.json": "August 2, 2026",
    "pages/games.json": "August 2, 2026",


    // Games
    "games/horizon-zero-dawn.json": "August 2, 2026",
    "games/frozen-wilds.json": "August 2, 2026",
    "games/zero-dawn-remastered.json": "August 2, 2026",
    "games/horizon-forbidden-west.json": "August 2, 2026",
    "games/burning-shores.json": "August 2, 2026",
    "games/call-of-the-mountain.json": "August 2, 2026",
    "games/lego-horizon-adventures.json": "August 2, 2026",
    "games/hunters-gathering.json": "August 2, 2026",
    "games/steel-frontiers.json": "August 2, 2026"

};


/* =========================
   Last Updated
========================= */

function addLastUpdated(page) {

    const updated = document.querySelector(".updated");

    if (!updated) return;


    const update = pageUpdates[page];


    if (update) {

        updated.textContent = `Last Updated: ${update}`;

    }

}

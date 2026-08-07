/* =========================
   Page Updates
========================= */

const pageUpdates = {

    "data/pages/home.json": "August 4, 2026",
    "data/pages/speedrunning.json": "August 2, 2026",
    "data/pages/community.json": "August 2, 2026",
    "data/pages/games.json": "August 2, 2026",

    "data/games/horizon-zero-dawn.json": "August 2, 2026",
    "data/games/frozen-wilds.json": "August 2, 2026",
    "data/games/zero-dawn-remastered.json": "August 2, 2026",
    "data/games/horizon-forbidden-west.json": "August 2, 2026",
    "data/games/burning-shores.json": "August 2, 2026",
    "data/games/call-of-the-mountain.json": "August 2, 2026",
    "data/games/lego-horizon-adventures.json": "August 2, 2026",
    "data/games/hunters-gathering.json": "August 2, 2026",
    "data/games/steel-frontiers.json": "August 2, 2026"

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

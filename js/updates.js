/* =========================
   Page Updates
========================= */

const pageUpdates = {

    // Main Pages
    "home.html": "August 4, 2026",
    "speedrunning.html": "August 2, 2026",
    "community.html": "August 2, 2026",

    // Games
    "games/horizon-zero-dawn.html": "August 2, 2026",
    "games/frozen-wilds.html": "August 2, 2026",
    "games/zero-dawn-remastered.html": "August 2, 2026",
    "games/horizon-forbidden-west.html": "August 2, 2026",
    "games/burning-shores.html": "August 2, 2026",
    "games/call-of-the-mountain.html": "August 2, 2026",
    "games/lego-horizon-adventures.html": "August 2, 2026",
    "games/hunters-gathering.html": "August 2, 2026",
    "games/steel-frontiers.html": "August 2, 2026"

};


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

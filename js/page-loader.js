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
   Page Initialization
========================= */

function initializePage(page) {

    addCopyButtons();
    addLastUpdated(page);
    setupGamesDropdown();

}

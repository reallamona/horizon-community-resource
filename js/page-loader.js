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

        STATE.currentPage = page;

        initializePage(page);

    } catch(error) {

        console.error(error);

        content.innerHTML = `
            <h2>Page failed to load</h2>
            <p>${error.message}</p>
        `;

    }

}


/* =========================
   Page Initialization
========================= */

function initializePage(page) {

    if (typeof addCopyButtons === "function") {
        addCopyButtons();
    }

    if (typeof addLastUpdated === "function") {
        addLastUpdated(page);
    }

}

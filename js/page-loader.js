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

}

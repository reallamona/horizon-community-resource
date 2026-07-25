async function loadSection(id, file) {
    try {
        const response = await fetch("sections/" + file);

        if (!response.ok) {
            throw new Error(file + " failed to load");
        }

        const content = await response.text();
        document.getElementById(id).innerHTML = content;

    } catch (error) {
        console.error(error);
    }
}


/* Load Sections */
async function init() {
    await Promise.all([
        loadSection("featured", "featured.html"),
        loadSection("games", "games.html"),
        loadSection("speedrun-resources", "speedrun-resources.html"),
    ]);

    setupSearch();
}

init();

/* Expand / Collapse Buttons */
function setupToggleButtons() {
    document.querySelectorAll(".section-header").forEach(header => {

        const button = header.querySelector(".toggleAll");

        if (!button) return;

        button.addEventListener("click", () => {

            const section = header.parentElement;

            const folders = section.querySelectorAll(".game-folder");

            const expand = button.textContent === "Expand All";

            folders.forEach(folder => {
                folder.open = expand;
            });

            button.textContent = expand ? "Collapse All" : "Expand All";
        });

    });
}

/* Search */

function setupSearch() {

    const search = document.getElementById("search");
    const noResults = document.getElementById("no-results");

    search.addEventListener("input", function () {

        const filter = search.value.toLowerCase();

        const folders = document.querySelectorAll(".game-folder");

        let found = false;

        folders.forEach(folder => {

            const text = folder.textContent.toLowerCase();

            if (text.includes(filter)) {
                folder.style.display = "";
                found = true;
            } else {
                folder.style.display = "none";
            }

            if (filter === "") {
                folder.open = false;
            }

        });

        noResults.style.display = found || filter === "" ? "none" : "block";

    });

}

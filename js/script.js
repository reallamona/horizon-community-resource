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

/* Search */
function setupSearch() {

    const search = document.getElementById("search");
    const noResults = document.getElementById("no-results");

    search.addEventListener("input", function () {

        const filter = search.value.toLowerCase();

        const cards = document.querySelectorAll(".resource-card");

        let found = false;

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(filter)) {
                card.style.display = "";
                found = true;
            } else {
                card.style.display = "none";
            }

        });

        noResults.style.display = found || filter === "" ? "none" : "block";

    });

}

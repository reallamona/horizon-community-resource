/* =========================
   Navigation
========================= */

function setActiveLink(link) {

    document.querySelectorAll("[data-page]")
        .forEach(item => {
            item.classList.remove("active");
        });

    if (link) {
        link.classList.add("active");
    }

}

function setupNavigation() {

    document.querySelectorAll("[data-page]").forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const page = this.dataset.page;

            loadPage(page);
            setActiveLink(this);

        });

    });

}

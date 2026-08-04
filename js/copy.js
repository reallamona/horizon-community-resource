/* =========================
   Copy Buttons
========================= */

function addCopyButtons() {

    document.querySelectorAll(".resource-card a").forEach(link => {

        if (link.parentElement.querySelector(".copy-link")) return;

        const button = document.createElement("button");

        button.className = "copy-link";
        button.title = "Copy";
        button.dataset.url = link.href;
        button.innerHTML = `<img src="assets/copy.png" alt="Copy">`;

        link.parentElement.appendChild(button);

    });

}


function copyLink(url, button) {

    navigator.clipboard.writeText(url).then(() => {

        button.title = "Copied!";

        setTimeout(() => {

            button.title = "Copy";

        }, CONFIG.copyTimeout);

    });

}


document.addEventListener("click", function (e) {

    const button = e.target.closest(".copy-link");

    if (!button) return;

    copyLink(button.dataset.url, button);

});

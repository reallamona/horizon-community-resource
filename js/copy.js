/* =========================
   Copy Buttons
========================= */

function addCopyButtons() {

    document
        .querySelectorAll(".resource-card a")
        .forEach(link => {

            if (link.parentElement.querySelector(".copy-link")) {
                return;
            }


            const button =
                document.createElement("button");


            button.className = "copy-link";
            button.title = "Copy";
            button.dataset.url = link.href;

            button.innerHTML =
                `<img src="assets/copy.png" alt="Copy">`;


            button.addEventListener(
                "click",
                () => copyLink(button.dataset.url, button)
            );


            link.parentElement.appendChild(button);

        });

}


function copyLink(url, button) {

    navigator.clipboard.writeText(url)
        .then(() => {

            button.title = "Copied!";


            setTimeout(() => {

                button.title = "Copy";

            }, 1000);

        });

}

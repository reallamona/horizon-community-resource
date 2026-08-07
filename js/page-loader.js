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


        const data = await response.json();


        content.innerHTML = `

            <div class="section-header">
                <h2>${data.title}</h2>
            </div>

            <p class="updated"></p>


            <div class="resource-grid">

                ${(data.sections || []).map(section => `

                    <div class="resource-card">

                        <h3>${section.title}</h3>


                        ${
                            section.items && section.items.length
                            ?
                            `
                            <ul>

                                ${section.items.map(item => `

                                    <li>
                                        <a href="${item.url}" target="_blank" rel="noopener">
                                            ${item.title}
                                        </a>
                                    </li>

                                `).join("")}

                            </ul>
                            `
                            :
                            ""
                        }


                    </div>

                `).join("")}

            </div>

        `;


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

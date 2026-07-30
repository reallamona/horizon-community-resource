fetch("../data/home.json")
    .then(response => response.json())
    .then(data => {

        const container = document.getElementById("home-content");

        data.forEach(item => {

            if (item.description) {
                container.innerHTML += `
                    <div class="resource-card">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;
            }

            if (item.links) {

                let links = "";

                item.links.forEach(link => {
                    links += `
                        <li>
                            <a href="${link.url}" target="_blank" rel="noopener">
                                ${link.name}
                            </a>
                        </li>
                    `;
                });

                container.innerHTML += `
                    <div class="resource-card">
                        <h3>${item.title}</h3>
                        <ul>
                            ${links}
                        </ul>
                    </div>
                `;
            }

        });

    });

fetch("../data/speedrunning.json")
    .then(response => response.json())
    .then(data => {

        const grid = document.getElementById("speedrun-grid");

        data.forEach(item => {

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

            grid.innerHTML += `
                <div class="resource-card">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <ul>
                        ${links}
                    </ul>
                </div>
            `;

        });

    });

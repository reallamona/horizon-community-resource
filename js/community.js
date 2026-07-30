function community() {

    fetch("data/community.json")

        .then(response => response.json())

        .then(data => {

            const content = document.getElementById("content");

            const grid = document.createElement("div");

            grid.className = "resource-grid";


            data.forEach(item => {


                const card = document.createElement("div");

                card.className = "resource-card";


                if (item.title) {

                    card.innerHTML = `

                        <h3>${item.title}</h3>

                        <p>${item.description}</p>

                    `;

                }


                if (item.category) {

                    card.innerHTML = `

                        <h4>${item.category}</h4>

                        <ul>

                            ${item.links.map(link => `

                                <li>

                                    <a href="${link.url}" target="_blank" rel="noopener">
                                        ${link.name}
                                    </a>

                                </li>

                            `).join("")}

                        </ul>

                    `;

                }


                grid.appendChild(card);


            });


            content.appendChild(grid);


        })

        .catch(error => {

            console.error("Community failed:", error);

        });

}

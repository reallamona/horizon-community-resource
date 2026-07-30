function community() {

    fetch("data/community.json")
        .then(response => response.json())
        .then(data => {

            const content = document.getElementById("content");

            const container = document.createElement("div");

            container.className = "resource-grid";

            data.forEach(item => {

                container.innerHTML += `

                    <div class="resource-card">

                        <h3>${item.title}</h3>

                        <p>${item.description}</p>

                    </div>

                `;

            });

            content.appendChild(container);

        })
        .catch(error => console.error(error));

}

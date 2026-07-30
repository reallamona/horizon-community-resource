fetch("../data/research.json")
    .then(response => response.json())
    .then(research => {

        const content = document.getElementById("research-content");

        if (research.length === 0) {
            content.innerHTML = "No research available";
            return;
        }

        research.forEach(item => {
            content.innerHTML += `
                <div class="resource-card">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
        });

    });

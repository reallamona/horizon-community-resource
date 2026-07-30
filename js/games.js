fetch("../data/games.json")
    .then(response => response.json())
    .then(games => {

        const grid = document.getElementById("game-grid");

        games.forEach(game => {
            grid.innerHTML += `
                <div class="resource-card">
                    <h3>${game.title}</h3>
                    <a href="../games/${game.page}">
                        View
                    </a>
                </div>
            `;
        });

    });

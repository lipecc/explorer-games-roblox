document.addEventListener('DOMContentLoaded', function() {
    const games = [
        { name: "DOORS", description: "Embark on a thrilling adventure through a series of eerie doors. Solve puzzles and face terrifying challenges as you try to escape each room!<br>🗝️ Unlock secrets and uncover the mysteries behind the doors.<br>🔦 Watch out for the lurking dangers in the dark!", thumbnail: "https://tr.rbxcdn.com/2c993df62e2303f8c4c761477bd4a872/512/512/Image/Webp", url: "https://www.roblox.com/pt/games/6516141723/DOORS", category: ["Quebra-Cabeça", "Terror"] },
        { name: "Michaels-Zombies", description: "Prepare yourself for a zombie apocalypse! Fight against hordes of undead and survive in this intense first-person shooter.<br>💣 Utilize a wide range of weapons and equipment.<br>🔫 Team up with friends for cooperative gameplay and complete various missions.", thumbnail: "https://tr.rbxcdn.com/54f357448b3a00aed08beafc804fbf15/150/150/Image/Webp", url: "https://www.roblox.com/pt/games/8054462345/Michaels-Zombies", category: ["FPS", "Ação"] },
        { name: "Residence-Massacre", description: "Experience the horror in Residence-Massacre, a chilling game set in a creepy mansion.<br>👻 Face off against supernatural threats.<br>🔎 Explore the dark corners and uncover hidden secrets as you try to survive.", thumbnail: "https://tr.rbxcdn.com/52214b0406dc01f45aca04110005da8b/150/150/Image/Webp", url: "https://www.roblox.com/pt/games/14437001043/EVENT-Residence-Massacre", category: ["Terror"] },
        { name: "MUSEUM-Interliminality", description: "Venture into the Museum of Interliminality where reality twists and turns.<br>🧩 Solve intricate puzzles and navigate through ever-changing environments.<br>🌀 Experience an immersive world with unsettling and mysterious elements.", thumbnail: "https://tr.rbxcdn.com/b318a200ce3453d9c942232abf265857/150/150/Image/Webp", url: "https://www.roblox.com/pt/games/14237585680/MUSEUM-Interliminality-ALPHA-1-2-6", category: ["Quebra-Cabeça", "Terror"] },
        { name: "Jujutsu-Shenanigans", description: "Participe de intensos combates com personagens de Jujutsu!<br>💥 Enfrente adversários em um mapa dinâmico e cheio de ação.<br>⚔️ Use habilidades e técnicas especiais para vencer seus oponentes.", thumbnail: "https://tr.rbxcdn.com/7bf1cef8a98d367540d8dfd57c09e6f0/512/512/Image/Webp", url: "https://www.roblox.com/pt/games/9391468976/TEN-SHADOWS-Jujutsu-Shenanigans", category: ["Ação", "Competitivo"] },
        { name: "Beyond-Liminal", description: "Se você não for cuidadoso e não sair da realidade nas áreas erradas, você vai acabar nos Backrooms, onde não é nada além do cheiro de um tapete úmido, a insanidade do mono-amarelo, o barulho de fundo infinito de luzes fluorescentes no máximo de zumbido. Deus te livre se você ouvir algo vagando por perto, porque com certeza ele te ouviu.<br>As músicas que podem ser ouvidas neste jogo são de The Caretaker, K Pixels e JORDANN.", thumbnail: "https://tr.rbxcdn.com/0fd9d596d9c8ae0aef61af4d6ce3d3f5/150/150/Image/Webp", url: "https://www.roblox.com/pt/games/13744617615/Beyond-Liminal-Early-Access", category: ["Exploração", "Terror"] },
        { name: "WARFRONTS", description: "Mergulhe na batalha de WARFRONTS e viva a experiência da Segunda Guerra Mundial.<br>⚔️ Participe de intensos combates e estratégias.<br>🌍 Explore diferentes cenários de guerra e enfrente adversários em batalhas épicas.", thumbnail: "https://tr.rbxcdn.com/1bea92efb9da09d676a7830c289045a9/512/512/Image/Webp", url: "https://www.roblox.com/pt/games/5387947232/WARFRONTS-WWII", category: ["Ação", "Tiro", "Guerra"] },
        { name: "Bad-Business", description: "💪 Prove que você é o melhor através de combates FPS habilidosos<br>🔫 Faça sua própria arma através de personalização única e profunda<br>👕 Personalize seu personagem com novas roupas sendo lançadas regularmente<br>🙌 Atualiza a cada duas semanas! Confira a guia de eventos abaixo para ver o que está por vir!<br>🤑 Fique no jogo por 15 minutos para ganhar 15% a mais de créditos!", thumbnail: "https://tr.rbxcdn.com/218d50fb943dff841de363a9e06acba9/512/512/Image/Webp", url: "https://www.roblox.com/pt/games/3233893879/Bad-Business", category: ["FPS", "Ação"] },
        { name: "Phantom-Forces", description: "Participe de batalhas intensas em Phantom Forces, um dos jogos de FPS mais populares.<br>💣 Jogue com uma ampla gama de armas e equipamentos.<br>🌐 Enfrente outros jogadores em diversas missões e mapas.<br>🎮 Disponível tanto para PC quanto para consoles.", thumbnail: "https://tr.rbxcdn.com/52636c668a60c95c88c0a0117df6a525/150/150/Image/Webp", url: "https://www.roblox.com/pt/games/292439477/Phantom-Forces", category: ["FPS", "Ação"] },
        { name: "Phantom-Forces Console", description: "A versão para console de Phantom Forces com a mesma ação e jogabilidade intensa.<br>💣 Jogue com uma ampla gama de armas e equipamentos.<br>🌐 Enfrente outros jogadores em diversas missões e mapas.<br>🎮 Disponível para consoles.", thumbnail: "https://tr.rbxcdn.com/52636c668a60c95c88c0a0117df6a525/150/150/Image/Webp", url: "https://www.roblox.com/pt/games/254965063/Phantom-Forces-Console", category: ["FPS", "Ação"] },
        { name: "RIVAIS", description: "🔫 Desafie alguém pisando em uma plataforma de duelo!<br>🔑 Ganhe chaves para desbloquear novas armas e skins!<br>📜 Complete contratos para desbloquear recompensas exclusivas!<br>🏆 Mostre sua sequência de vitórias e suba nas classificações!<br>🎮 Disponível em desktops, telefones, tablets, XBOX e PlayStation 5<br>💜 Dê like e junte-se ao grupo para uma recompensa exclusiva!", thumbnail: "https://tr.rbxcdn.com/69f0f01affb44d761c7e950cedc90788/512/512/Image/Webp", url: "https://www.roblox.com/pt/games/17625359962/UPD-RIVALS", category: ["Competitivo", "Ação"] }
    ];

    const gameList = document.getElementById('game-list');
    const searchInput = document.getElementById('search-title');
    const categoryButtons = document.querySelectorAll('.category-btn');

    function displayGames(filteredGames) {
        gameList.innerHTML = '';
        filteredGames.sort((a, b) => a.name.localeCompare(b.name)).forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';

            gameCard.innerHTML = `
                <a href="${game.url}" target="_blank">
                    <img src="${game.thumbnail}" alt="${game.name}">
                    <h3>${game.name}</h3>
                    <p>${game.description}</p>
                </a>
            `;

            gameList.appendChild(gameCard);
        });
    }

    function filterGames() {
        const searchText = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;

        const filteredGames = games.filter(game => {
            const matchesSearch = game.name.toLowerCase().includes(searchText);
            const matchesCategory = activeCategory === 'All' || game.category.includes(activeCategory);
            return matchesSearch && matchesCategory;
        });

        displayGames(filteredGames);
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterGames();
        });
    });

    searchInput.addEventListener('input', filterGames);

    displayGames(games); // Display all games initially
});

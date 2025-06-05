// Função para criar corações
function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');

    // Cria 20 corações
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Posiciona os corações aleatoriamente na tela
        heart.style.left = `${Math.random() * 100}vw`; /* Posição horizontal */
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; /* Duração da animação */
        heart.style.opacity = Math.random(); /* Opacidade aleatória */

        heartsContainer.appendChild(heart);
    }
}

// Chama a função para criar os corações
createHearts();// Função para criar corações
function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');

    // Cria 20 corações
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Posiciona os corações aleatoriamente na tela
        heart.style.left = `${Math.random() * 100}vw`; /* Posição horizontal */
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; /* Duração da animação */
        heart.style.opacity = Math.random(); /* Opacidade aleatória */

        heartsContainer.appendChild(heart);
    }
}

// Chama a função para criar os corações
createHearts();
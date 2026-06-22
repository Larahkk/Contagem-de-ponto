let pontosLara = parseInt(localStorage.getItem('pontosLara')) || 0;
let pontosFilipi = parseInt(localStorage.getItem('pontosFilipi')) || 0;

document.querySelector('.lara-score h1').textContent = pontosLara;
document.querySelector('.filipi-score h1').textContent = pontosFilipi;

function incrementScore(player) {
    if (player === 'lara') {
        pontosLara++;
        document.querySelector('.lara-score h1').textContent = pontosLara;
        localStorage.setItem('pontosLara', pontosLara);

    }   

    if (player === 'filipi') {
        pontosFilipi++;
        document.querySelector('.filipi-score h1').textContent = pontosFilipi;
        localStorage.setItem('pontosFilipi', pontosFilipi);
    }
}

function decrementScore(player){
    if (player === 'lara' && pontosLara > 0) {
        pontosLara--;
        document.querySelector('.lara-score h1').textContent = pontosLara;
        localStorage.setItem('pontosLara', pontosLara);
    }
     if (player === 'filipi' && pontosFilipi > 0) {
        pontosFilipi--;
        document.querySelector('.filipi-score h1').textContent = pontosFilipi;
        localStorage.setItem('pontosFilipi', pontosFilipi);
    }
}
function resetScore() {
    const confirmar = confirm("Tem certeza que deseja zerar o placar?");
    if (confirmar) {
        pontosLara = 0;
        pontosFilipi = 0;
        document.querySelector('.lara-score h1').textContent = pontosLara;
        document.querySelector('.filipi-score h1').textContent = pontosFilipi;
        localStorage.setItem('pontosLara', pontosLara);
        localStorage.setItem('pontosFilipi', pontosFilipi);
    }
}
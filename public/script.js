// Selecionando os elementos
const displayNumero = document.getElementById('numero');
const btnIncrementar = document.getElementById('btn-incrementar');

let contador = 0;

// Adicionando o evento de clique
btnIncrementar.addEventListener('click', () => {
    contador++;
    displayNumero.textContent = contador;
    
    // Um log no console para você ver no F12 do navegador
    console.log(`O contador agora é: ${contador}`);
});
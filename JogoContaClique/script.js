let contador = 0;
const elementoContador = document.getElementById('contador');
const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
    contador++;
    elementoContador.textContent = contador;
    
    // Muda a cor do número aleatoriamente (opcional)
    const cores = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    elementoContador.style.color = corAleatoria;
});
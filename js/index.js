const botaoTema = document.querySelector('.btn-tema');
const html = document.documentElement;

botaoTema.addEventListener('click', () => {
    const temaAtual = html.getAttribute('data-theme');

    if (temaAtual === 'light') {
        html.setAttribute('data-theme', 'dark');
        botaoTema.textContent = '☀️';
    } else {
        html.setAttribute('data-theme', 'light');
        botaoTema.textContent = '🌙';
    }
});
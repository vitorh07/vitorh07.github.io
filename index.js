const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let lastScrollTop = 0; // Guarda a posição de rolagem anterior
const menuNav = document.getElementById('menu-nav'); // Referência ao menu de navegação
const menuHam = document.getElementById('menu-bar');

window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Se rolando para baixo
  if (currentScroll > lastScrollTop) {
    // Esconde o menu
    menuNav.style.top = "-80px";  // Ajuste conforme a altura do seu menu
  } else {
    // Se rolando para cima
    menuNav.style.top = "0";  // O menu aparece
  }

  // Atualiza a posição da rolagem
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita números negativos
});


// Seleciona a barra de progresso
const progressBar = document.getElementById('progress-bar');

// Função que atualiza a barra de progresso
function updateProgressBar() {
  // Obtemos a altura total do documento e a altura visível da janela
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Obtém a quantidade que foi rolada
  const scrollPosition = window.scrollY;

  // Calcula a porcentagem de rolagem
  const scrollPercentage = (scrollPosition / scrollHeight) * 100;

  // Atualiza a largura da barra de progressos
  progressBar.style.width = scrollPercentage + '%';
}

// Adiciona o evento de rolagem para atualizar a barra
window.addEventListener('scroll', updateProgressBar);

// Chama a função uma vez no carregamento para garantir que a barra de progresso esteja correta desde o início
updateProgressBar();

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(
  ".btn-plataforma .plataformas"
);

botao.addEventListener("click", () => {
  elementoPlataformas.classList.toggle("ativo");
});

import Barra from "./barra.js";

const tela = document.getElementById("tela");
// Detectar o pixel ratio do dispositivo
const pixelRatio = window.devicePixelRatio || 1;

tela.width = innerWidth * pixelRatio;
tela.height = 200 * pixelRatio;
const meta = 30;
const dados = [12, 14, 3, 28, 24, 22, 21, 14, 18, 20, 12, 4, 8];
// 30 / 100 * 12

const ctx = tela.getContext("2d");

const barras = dados.map(() => new Barra(ctx, tela.width, tela.height));

const cores = [
    "#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F3",
    "#33FFF3", "#F333FF", "#33F3FF", "#FF3333", "#33FF33",
    "#5733FF", "#FFC300", "#DAF7A6", "#900C3F", "#581845",
    "#C70039", "#FF5733", "#6C33FF", "#33FF99", "#FF9933"
  ];

const drawBarra = () => {
  barras.forEach((barra, index) => {
    const valor = dados[index];
    const altura = (valor / meta) * tela.height; // Altura proporcional
    const x = index * (tela.width / dados.length); // Espaçamento entre as barras
    let cor = cores[index]; // Cores

    barra.draw(ctx, cor, tela.width / dados.length, x, altura);
  });
};

function loop() {
  ctx.clearRect(0, 0, tela.width, tela.height);
  drawBarra();
  requestAnimationFrame(loop);
}

loop();

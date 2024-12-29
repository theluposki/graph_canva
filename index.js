import GraphBarra from "./graph_barra.js";
import { gerarArrayAleatorio } from "./util.js";

const range = document.getElementById("range");
const value_range = document.querySelector(".value_range");

value_range.innerHTML = range.value;

const meta = 30;
let dados = gerarArrayAleatorio(100, meta);

const graf = new GraphBarra("tela", dados, 30);

graf.draw();

range.addEventListener("input", (event) => {
  value_range.innerHTML = event.target.value;
  dados = gerarArrayAleatorio(event.target.value, meta);
  const graf = new GraphBarra("tela", dados, 30);
  graf.draw();
});

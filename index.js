import GraphBarra from "./graph_barra.js";
import { gerarArrayAleatorio } from "./util.js";

const meta = 30;
const dados = gerarArrayAleatorio(100, meta)

const graf = new GraphBarra('tela', dados, 30);

graf.loop()




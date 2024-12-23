import Barra from "./barra.js";
import { gerarCoresAleatorias, delay } from "./util.js";

class GraphBarra {
  constructor(htmlId, dados, meta, cores = []) {
    this.id = htmlId;
    this.dados = dados;

    this.tela = document.getElementById("tela");
    this.ctx = this.tela.getContext("2d");

    const pixelRatio = window.devicePixelRatio || 1;

    this.tela.width = innerWidth * pixelRatio;
    this.tela.height = 200 * pixelRatio;

    this.barras = dados.map(
      () => new Barra(this.ctx, this.tela.width, this.tela.height)
    );
    this.cores = cores;

    if (this.cores.length === 0) {
      this.cores = gerarCoresAleatorias(this.dados.length);
    }
    this.meta = meta;

    this.loop = this.loop.bind(this);
  }

  draw() {
    this.barras.forEach((barra, index) => {
      const valor = this.dados[index];
      const altura = (valor / this.meta) * this.tela.height; // Altura proporcional
      const x = index * (this.tela.width / this.dados.length); // Espaçamento entre as barras
      let cor = this.cores[index]; // Cores

      barra.draw(this.ctx, cor, this.tela.width / this.dados.length, x, altura);
    });
  }



  async drawComAtraso() {
    for (let index = 0; index < this.barras.length; index++) {
      const barra = this.barras[index];
      const valor = this.dados[index];
      const altura = (valor / this.meta) * this.tela.height; // Altura proporcional
      const x = index * (this.tela.width / this.dados.length); // Espaçamento entre as barras
      let cor = this.cores[index]; // Cores

      barra.draw(this.ctx, cor, this.tela.width / this.dados.length, x, altura);

      delay(200);
    }
  }

  update() {
    this.drawComAtraso()
  }

  loop() {
    this.ctx.clearRect(0, 0, this.tela.width, this.tela.height);
    this.update();
    requestAnimationFrame(this.loop);
  }
}

export default GraphBarra;

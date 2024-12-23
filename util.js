export const gerarCoresAleatorias = (quantidade) => {
  const cores = [];
  for (let i = 0; i < quantidade; i++) {
    const cor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    cores.push(cor);
  }
  return cores;
};

export const gerarArrayAleatorio = (quantidade, meta) => {
  return Array.from({ length: quantidade }, () => Math.random() * meta);
};

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

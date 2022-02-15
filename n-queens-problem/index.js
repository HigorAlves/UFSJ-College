const createChess = n => {
  let matriz = [];

  for (let i = 0; i < n * n; i++) {
    matriz[i] = [];

    for (let j = 0; j < n * n; j++) {
      matriz[i][j] = 0;

      if (i != j) {
        let x_i = i % n,
          y_i = parseInt(i / n);
        let x_j = j % n,
          y_j = parseInt(j / n);
        if (x_i == x_j) matriz[i][j] = 1;
        if (y_i == y_j) matriz[i][j] = 1;
        if (Math.abs(x_i - x_j) == Math.abs(y_i - y_j)) matriz[i][j] = 1;
      }
    }
  }

  return matriz;
};

const conjIndependente = (matriz, tam) => {
  let solution = [];
  for (let i = 0; i < matriz.length; i++) {
    let aux = tentativaConjunto([], matriz, i, tam);
    if (!aux === false) {
      solution.push(aux);
    }
  }
  return solution;
};

const tentativaConjunto = (estado_atual, arestas, inserir_tentativa, tam) => {
  let tentativa = [...estado_atual, inserir_tentativa];

  for (let i of tentativa)
    for (let j = 0; j < arestas.length; j++)
      if (i != j && estado_atual.indexOf(j) != -1 && arestas[i][j] == 1)
        return false;

  if (tentativa.length == tam) return tentativa;

  for (let i = 0; i < arestas.length; i++)
    if (tentativa.indexOf(i) == -1) {
      let solution = tentativaConjunto(tentativa, arestas, i, tam);
      if (solution) return solution;
    }

  return false;
};

const N = parseInt(process.argv[2]);
const tabuleiro = createChess(N);
const conj = conjIndependente(tabuleiro, N - 1);
let solucao = [];

conj.map(([], index) => {
  for (let i = 0; i < N; i++) {
    solucao[i] = [];
    for (let j = 0; j < N; j++) {
      solucao[i][j] = conj[index].indexOf(i + j * N) == -1 ? " " : "♛";
    }
  }
  console.table(solucao);
});

//Pra rodar node index.js N
// console.table(tabuleiro);

let despesas = [
  { id: 1, descricao: "Salário", valor: 3000, tipo: "entrada" },
  { id: 2, descricao: "Bonus", valor: 300, tipo: "entrada" },
  { id: 3, descricao: "Aluguel", valor: 600, tipo: "saida" },
];

let entradas = despesas.filter((entrada) => entrada.tipo === "entrada");
let dezPorcento = entradas.map((entrada) => entrada.valor * 1.1);
let total = dezPorcento.reduce((total, valorAtual) => {
  return total + valorAtual;
});

console.log(entradas);

console.log(dezPorcento);

console.log(total);

/*
Sugestão do GEMINI

const despesas = [
  { id: 1, descricao: "Salário", valor: 3000, tipo: "entrada" },
  { id: 2, descricao: "Bónus", valor: 300, tipo: "entrada" },
  { id: 3, descricao: "Aluguel", valor: 600, tipo: "saida" },
];

const totalEntradasRendidas = despesas
  .filter(item => item.tipo === 'entrada')
  .map(item => item.valor * 1.1)
  .reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); // O ", 0" de segurança aqui

console.log(totalEntradasRendidas); // 3630

envolve um cleancode
*/

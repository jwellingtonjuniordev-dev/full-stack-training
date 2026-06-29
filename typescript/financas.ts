interface Transacao {
  id: number;
  descricao: string;
  valor: number;
  tipo: "entrada" | "saida";
}

const listaDeDespesas: Transacao[] = [
  { id: 1, descricao: "Salário", valor: 1500, tipo: "entrada" },
  { id: 2, descricao: "Bônus", valor: 275, tipo: "entrada" },
  { id: 3, descricao: "Aluguel", valor: 483.25, tipo: "saida" },
];

async function obterTransacoes(): Promise<Transacao[]> {
  const response = await listaDeDespesas;
  return response;
}

async function executarDashboard() {
  const transacoes = await obterTransacoes();
  // Processar as transações para o dashboard
  const calculoDeRendimento = transacoes
    .filter((item) => item.tipo === "entrada")
    .map((item) => item.valor * 1.1)
    .reduce((acc, valorAtual) => acc + valorAtual, 0);
  console.log("Rendimento total: ", calculoDeRendimento);
}

executarDashboard();

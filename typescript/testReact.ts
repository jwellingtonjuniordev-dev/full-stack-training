import { useState } from 'react'; // 1. Importação necessária

interface Transacao {
  id: number;
  descricao: string;
  valor: number;
  tipo: "entrada" | "saida";
}

// Nossa lista base para inicializar o estado
const listaDeDespesas: Transacao[] = [
  { id: 1, descricao: "Salário", valor: 1500, tipo: "entrada" },
  { id: 2, descricao: "Bônus", valor: 275, tipo: "entrada" },
  { id: 3, descricao: "Aluguel", valor: 483.25, tipo: "saida" },
];

function Dashboard() {
  // 2. Inicializado com a lista de despesas para exibir dados na tela
  const [transacoes, setTransacoes] = useState<Transacao[]>(listaDeDespesas);

  // 3. Cálculo feito diretamente. Só roda quando o componente renderizar,
  // mas de forma limpa e sem criar funções desnecessárias a cada render.
  const calculoDeRendimento = transacoes
    .filter((item) => item.tipo === "entrada")
    .map((item) => item.valor * 1.1)
    .reduce((acc, valorAtual) => acc + valorAtual, 0);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Exibindo a variável diretamente */}
      <p>Rendimento total: {calculoDeRendimento}</p>
    </div>
  );
}

export default Dashboard;
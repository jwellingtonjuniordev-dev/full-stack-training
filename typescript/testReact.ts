import { useState } from 'react';

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

function Dashboard() {
  const [transacoes, setTransacoes] = useState<Transacao[]>(listaDeDespesas);

  // Mover a lógica para dentro do componente facilita a manutenção
  function lidarComAdicao() {
    // Tipamos o objeto explicitamente para garantir segurança
    const novaTransacao: Transacao = { 
      id: transacoes.length + 1, // ID dinâmico simples
      descricao: "Freelance", 
      valor: 500, 
      tipo: "entrada" 
    };

    // Atualiza o estado usando a imutabilidade
    setTransacoes([...transacoes, novaTransacao]);
  }

  const calculoDeRendimento = transacoes
    .filter((item) => item.tipo === "entrada")
    .map((item) => item.valor * 1.1)
    .reduce((acc, valorAtual) => acc + valorAtual, 0);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Rendimento total: {calculoDeRendimento}</p>
      
      {/* Passamos apenas a referência da função, deixando o HTML muito mais limpo */}
      <button onClick={lidarComAdicao}>
        Adicionar Transação
      </button>
    </div>
  );
}

export default Dashboard;
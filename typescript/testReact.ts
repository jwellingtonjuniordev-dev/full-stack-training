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
  const [novaDescricao, setNovaDescricao] = useState<string>("");
  const [tipo, novoTipo] = useState<"entrada" | "saida">("entrada");
  const [valor, novoValor] = useState<number>(0);

  function lidarComAdicao() {
    const novaTransacao: Transacao = { 
      id: transacoes.length + 1,
      descricao: novaDescricao, 
      valor: valor, 
      tipo: tipo 
    };
    setTransacoes([...transacoes, novaTransacao]);
    setNovaDescricao(""); // Limpa o campo de descrição após adicionar a transação
    novoTipo("entrada"); // Reseta o tipo para "entrada"
    novoValor(0); // Reseta o valor para 0
  }

  const calculoDeRendimento = transacoes
    .filter((item) => item.tipo === "entrada")
    .map((item) => item.valor * 1.1)
    .reduce((acc, valorAtual) => acc + valorAtual, 0);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Rendimento total: {calculoDeRendimento.toFixed(2)}€</p>
      
      <ul>
        {transacoes.map((item) => (
          <li key={item.id} style={{ color: item.tipo === "entrada" ? "green" : "red" }}>
            {item.descricao} - {item.valor}€
          </li>
        ))}
      </ul>

      <input 
        type="text" 
        placeholder="Descrição da transação" 
        value={novaDescricao} 
        onChange={(e) => setNovaDescricao(e.target.value)} 
      />

      <select value={tipo} onChange={(e) => novoTipo(e.target.value as "entrada" | "saida")}>
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>

      <input 
        type="number" 
        placeholder="Valor da transação" 
        value={valor} 
        onChange={(e) => novoValor(parseFloat(e.target.value))} 
      />
      
      <button onClick={lidarComAdicao}>
        Adicionar Transação
      </button>
    </div>
  );
}

export default Dashboard;
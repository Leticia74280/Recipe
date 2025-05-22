let receitas = [
  { id: 1, nome: "Bolo de Chocolate" },
  { id: 2, nome: "Torta de Frango" },
  { id: 3, nome: "Macarrão à Bolonhesa" },
  { id: 4, nome: "Panqueca Recheada" },
  { id: 5, nome: "Bolo de Chocolate" },
  { id: 6, nome: "Torta de Frango" },
  { id: 7, nome: "Macarrão à Bolonhesa" },
  { id: 8, nome: "Panqueca Recheada" }
];

const tabela = document.getElementById("tabela-receitas");
const filtro = document.getElementById("filtro");

function renderTabela(lista) {
  tabela.innerHTML = "";

  if (lista.length === 0) {
    tabela.innerHTML = `<tr><td colspan="3">Nenhuma receita encontrada.</td></tr>`;
    return;
  }

  lista.forEach((receita, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${receita.id}</td>
      <td>${receita.nome}</td>
      <td>
        <button class="editar" onclick="editar(${index})">Editar</button>
        <button class="excluir" onclick="excluir(${index})">Excluir</button>
      </td>
    `;

    tabela.appendChild(tr);
  });
}

function editar(index) {
  const novaReceita = prompt("Editar nome da receita:", receitas[index].nome);
  if (novaReceita && novaReceita.trim() !== "") {
    receitas[index].nome = novaReceita.trim();
    aplicarFiltro();
  }
}

function excluir(index) {
  if (confirm("Deseja excluir esta receita?")) {
    receitas.splice(index, 1);
    aplicarFiltro();
  }
}

function aplicarFiltro() {
  const termo = filtro.value.toLowerCase();
  const receitasFiltradas = receitas.filter(r => r.nome.toLowerCase().includes(termo));
  renderTabela(receitasFiltradas);
}

filtro.addEventListener("input", aplicarFiltro);

renderTabela(receitas);
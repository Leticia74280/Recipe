const tabela = document.getElementById("tabela-receitas");
const filtro = document.getElementById("filtro");
const btnAdicionar = document.getElementById("adicionar-receita");

let receitas = JSON.parse(localStorage.getItem("receitas")) || [];

function salvarNoLocalStorage() {
  localStorage.setItem("receitas", JSON.stringify(receitas));
}

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
    salvarNoLocalStorage();
    aplicarFiltro();
  }
}

function excluir(index) {
  if (confirm("Deseja excluir esta receita?")) {
    receitas.splice(index, 1);
    salvarNoLocalStorage();
    aplicarFiltro();
  }
}

function aplicarFiltro() {
  const termo = filtro.value.toLowerCase();
  const receitasFiltradas = receitas.filter(r => r.nome.toLowerCase().includes(termo));
  renderTabela(receitasFiltradas);
}

function adicionarReceita() {
  const nome = prompt("Nova receita:");
  if (nome && nome.trim() !== "") {
    const novoId = receitas.length > 0 ? Math.max(...receitas.map(r => r.id)) + 1 : 1;
    const novaReceita = {
      id: novoId,
      nome: nome.trim()
    };
    receitas.push(novaReceita);
    salvarNoLocalStorage();
    aplicarFiltro();
  }
}

filtro.addEventListener("input", aplicarFiltro);
btnAdicionar.addEventListener("click", adicionarReceita);

aplicarFiltro();

function funcaoHome() {
   window.location.href = "../pages/Home.html";
}

// Função para listar os usuários na tabela
function listarUsuarios(filtro = "") {
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const tabela = document.getElementById("tabela-usuarios");
  
  // Filtra os usuários pelo nome ou email (case insensitive)
  const usuariosFiltrados = usuarios.filter(u => 
    u.nome.toLowerCase().includes(filtro.toLowerCase()) ||
    u.email.toLowerCase().includes(filtro.toLowerCase())
  );
  
  // Limpa a tabela
  tabela.innerHTML = "";

  if (usuariosFiltrados.length === 0) {
    tabela.innerHTML = `
      <tr><td colspan="3" style="text-align:center; font-style: italic;">
        Nenhum usuário encontrado.
      </td></tr>
    `;
    return;
  }

  usuariosFiltrados.forEach((user, index) => {
    tabela.innerHTML += `
      <tr>
        <td>${user.nome}</td>
        <td>${user.email}</td>
        <td>
          <button onclick="editarUsuario(${index})">Editar</button>
          <button onclick="removerUsuario(${index})">Excluir</button>
        </td>
      </tr>
    `;
  });
}

// Função para remover usuário
function removerUsuario(index) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  if (!confirm(`Deseja realmente excluir o usuário: ${usuarios[index].nome}?`)) return;
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  listarUsuarios(document.getElementById("filtro").value);
}

// Função para editar usuário
function editarUsuario(index) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const user = usuarios[index];

  // Salvar índice para edição
  localStorage.setItem("editarIndex", index);

  // Salvar dados do usuário para preencher no formulário
  localStorage.setItem("usuarioEditar", JSON.stringify(user));

  // Redireciona para a página de cadastro (ajuste o caminho se necessário)
  window.location.href = "../pages/telaCadastro.html"; 
}

// Evento para filtrar enquanto o usuário digita
document.getElementById("filtro").addEventListener("input", (e) => {
  listarUsuarios(e.target.value);
});

// Listar usuários ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  listarUsuarios();
});

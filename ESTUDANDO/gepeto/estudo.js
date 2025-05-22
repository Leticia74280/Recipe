let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function criarUsuario(nome, email) {
  const novoUsuario = { id: Date.now(), nome, email };
  usuarios.push(novoUsuario);
  salvarDados();
  renderizarUsuarios();
}

function salvarDados() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function renderizarUsuarios() {
  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";

  usuarios.forEach(usuario => {
    const li = document.createElement("li");
    li.textContent = `${usuario.nome} (${usuario.email})`;
    lista.appendChild(li);
  });
}

// Captura o envio do formulário
document.getElementById("formUsuario").addEventListener("submit", function(e) {
  e.preventDefault(); // Impede recarregamento da página

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  criarUsuario(nome, email);

  // Limpa os campos do formulário
  document.getElementById("formUsuario").reset();
});

renderizarUsuarios(); // exibe os usuários salvos ao carregar a página

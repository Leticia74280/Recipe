function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function senhaForte(senha) {
  const tem8Caracteres = senha.length >= 8;
  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temSimbolo = /[\W_]/.test(senha); 

  return tem8Caracteres && temMaiuscula && temMinuscula && temSimbolo;
}

function telaCadastro() {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("e-mail").value.trim(); 
  const senha = document.getElementById("senha").value;

  let mensagem = document.getElementById("mensagem");
  if (!mensagem) {
    mensagem = document.createElement("div");
    mensagem.id = "mensagem";
    mensagem.style.margin = "10px 0";
    mensagem.style.fontWeight = "bold";
    document.querySelector("form").appendChild(mensagem);
  }

  mensagem.style.color = "red";
  mensagem.textContent = "";

  if (nome === "") {
    mensagem.textContent = "Por favor, preencha o nome.";
    return;
  }

  if (!validarEmail(email)) {
    mensagem.textContent = "E-mail inválido.";
    return;
  }

  if (!senhaForte(senha)) {
    mensagem.textContent = "Senha fraca. A senha deve conter:\n" +
      "- Mínimo 8 caracteres\n" +
      "- Pelo menos 1 letra maiúscula\n" +
      "- Pelo menos 1 letra minúscula\n" +
      "- Pelo menos 1 símbolo";
    return;
  }

  const usuario = { nome, email, senha };
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mensagem.style.color = "green";
  mensagem.textContent = "Cadastro realizado com sucesso!";
  document.querySelector("form").reset();
}

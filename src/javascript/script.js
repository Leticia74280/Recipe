function salvarlogin(event) {
  event.preventDefault()

  const emailInput = document.getElementById("usuário").value.trim();
  const senhaInput = document.getElementById("senha").value.trim();

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  const usuarioValido = usuarios.find(user => user.email === emailInput && user.senha === senhaInput);

  let mensagem = document.getElementById("mensagemLogin");
  if (!mensagem) {
    mensagem = document.createElement("div");
    mensagem.id = "mensagemLogin";
    mensagem.style.marginTop = "10px";
    mensagem.style.fontWeight = "bold";
    document.querySelector("form").appendChild(mensagem);
  }

  if (usuarioValido) {
    mensagem.style.color = "green";
    mensagem.textContent = "Login realizado com sucesso! Redirecionando...";


    setTimeout(() => {
      window.location.href = "../pages/Home.html"
    }, 1000);
  } else {
    mensagem.style.color = "red";
    mensagem.textContent = "E-mail ou senha incorretos.";
}
}

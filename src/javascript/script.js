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
   
    localStorage.setItem('nickname', usuarioValido.nome);

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


function togglePassword() {
    var passwordField = document.getElementById("senha");
    var eyeIcon = document.getElementById("eye-icon");

   
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash"); 
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye"); 
    }
}

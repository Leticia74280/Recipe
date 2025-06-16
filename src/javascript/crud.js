//opção de ver senha
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
//fim 

//verificação de email valido
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

//ferificação de senha forte
function senhaForte(senha) {
  const tem8Caracteres = senha.length >= 8;
  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temSimbolo = /[\W_]/.test(senha); 

  return tem8Caracteres && temMaiuscula && temMinuscula && temSimbolo;
}


function telaCadastro(event) {
  event.preventDefault();

  //coleta os dados 
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

//parte do local storage
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const indice = usuarios.findIndex(u => u.email === email);

  if (indice >= 0) {

    usuarios[indice] = { nome, email, senha };
  } else {

    usuarios.push({ nome, email, senha });
  }


  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  // Salva o nome do usuário recém cadastrado
  localStorage.setItem('nickname', nome);



  mensagem.style.color = "green";
  mensagem.textContent = "Cadastro realizado com sucesso!";


  window.location.href = "index.html"; 

  listarUsuarios();


  document.querySelector("form").reset();
}

document.addEventListener("DOMContentLoaded", listarUsuarios);

const editando = JSON.parse(localStorage.getItem("usuarioEditando"));
if (editando) {
  // Atualiza o usuário no índice correto
  usuarios[editando.index] = { nome, email, senha };
  localStorage.removeItem("usuarioEditando");
} else {
  // Cadastro normal
  usuarios.push({ nome, email, senha });
}

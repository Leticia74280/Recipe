function telaCadastro(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("e-mail").value;
    const senha = document.getElementById("senha").value;

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    
    const indice = usuarios.findIndex(u => u.email === email);

    if (indice >= 0) {
        
        usuarios[indice] = { nome, email, senha };
    } else {
        
        usuarios.push({ nome, email, senha });
    }

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    listarUsuarios();
    document.querySelector("form").reset();
}


function listarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const lista = document.getElementById("listaUsuarios");

    if (!lista) return;

    lista.innerHTML = "<h2>Usuários Cadastrados</h2>";

    usuarios.forEach((user, index) => {
        lista.innerHTML += `
            <div>
                <strong>${user.nome}</strong> - ${user.email}
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="removerUsuario(${index})">Remover</button>
            </div>
            <hr>
        `;
    });
}


function editarUsuario(index) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const user = usuarios[index];

    document.getElementById("nome").value = user.nome;
    document.getElementById("e-mail").value = user.email;
    document.getElementById("senha").value = user.senha;
}


function removerUsuario(index) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    listarUsuarios();
}


document.addEventListener("DOMContentLoaded", listarUsuarios);


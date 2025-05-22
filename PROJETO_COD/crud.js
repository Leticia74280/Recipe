let selectedEmail = null;

document.addEventListener("DOMContentLoaded", renderTable);

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const userData = readFormData();
  const users = getUsers();

  if (selectedEmail === null) {
    if (users.some(u => u.email === userData.email)) {
      alert("Este e-mail já está cadastrado.");
      return;
    }
    users.push(userData);
  } else {
    const index = users.findIndex(u => u.email === selectedEmail);
    if (userData.email !== selectedEmail && users.some(u => u.email === userData.email)) {
      alert("E-mail em uso por outro cadastro.");
      return;
    }
    users[index] = userData;
  }

  saveUsers(users);
  renderTable();
  resetForm();
});

function readFormData() {
  return {
    nome: document.getElementById("nome").value.trim(),
    email: document.getElementById("email").value.trim(),
    senha: document.getElementById("senha").value
  };
}

function resetForm() {
  document.getElementById("userForm").reset();
  selectedEmail = null;
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function renderTable() {
  const users = getUsers();
  const tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = "";

  users.forEach(user => {
    const row = tbody.insertRow();
    row.insertCell(0).innerText = user.nome;
    row.insertCell(1).innerText = user.email;
    row.insertCell(2).innerText = user.senha;
    row.insertCell(3).innerHTML = `
      <button onclick="editUser('${user.email}')">Editar</button>
      <button onclick="deleteUser('${user.email}')">Excluir</button>
    `;
  });
}

function editUser(email) {
  const users = getUsers();
  const user = users.find(u => u.email === email);
  if (!user) return;

  document.getElementById("nome").value = user.nome;
  document.getElementById("email").value = user.email;
  document.getElementById("senha").value = user.senha;
  selectedEmail = user.email;
}

function deleteUser(email) {
  if (!confirm("Tem certeza que deseja excluir este usuário?")) return;
  let users = getUsers();
  users = users.filter(u => u.email !== email);
  saveUsers(users);
  renderTable();
  resetForm();
}
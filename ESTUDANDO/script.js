let selectedRow = null;
    let users = [];

    document.getElementById("userForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const userData = readFormData();

      if (selectedRow === null) {
        users.push(userData);
      } else {
        const index = selectedRow.rowIndex - 1;
        users[index] = userData;
      }

      renderTable();
      resetForm();
    });

    function readFormData() {
      return {
        login: document.getElementById("login").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
      };
    }

    function renderTable() {
      const table = document.querySelector("#userTable tbody");
      table.innerHTML = "";
      users.forEach((user, index) => {
        const row = table.insertRow();
        row.insertCell(0).innerText = user.login;
        row.insertCell(1).innerText = user.email;
        row.insertCell(2).innerText = user.senha;
        row.insertCell(3).innerHTML = `
          <button onclick="onEdit(this)">Editar</button>
          <button onclick="onDelete(${index})">Excluir</button>
        `;
      });
    }

    function resetForm() {
      document.getElementById("login").value = "";
      document.getElementById("email").value = "";
      document.getElementById("senha").value = "";
      selectedRow = null;
    }

    function onEdit(td) {
      selectedRow = td.parentElement.parentElement;
      document.getElementById("login").value = selectedRow.cells[0].innerText;
      document.getElementById("email").value = selectedRow.cells[1].innerText;
      document.getElementById("senha").value = selectedRow.cells[2].innerText;
    }

    function onDelete(index) {
      users.splice(index, 1);
      renderTable();
      resetForm();
    }

    function clearAll() {
      users = [];
      renderTable();
      resetForm();
    }
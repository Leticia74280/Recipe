document.addEventListener('DOMContentLoaded', () => {
// Botão de editar perfil
  const editBtn = document.querySelector('.edit-profile-btn');
// Explorador de arquivos para selecionar a imagem de perfil
  const fileInput = document.getElementById('profilePicInput');
// Seleciona o elemento da imagem de perfil
  const profilePic = document.querySelector('.profile-pic');

// Verifica se já existe uma imagem de perfil salva no localStorage
  const savedPic = localStorage.getItem('profilePic');
  if (savedPic) {
// Caso tenha, define a imagem como a atual
    profilePic.src = savedPic;
  }

// Quando o botão de editar perfil for clicado, abre o explorador de arquivos
  editBtn.addEventListener('click', () => {
    fileInput.click();
  });

// Quando o usuário seleciona uma nova imagem
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];   // Pega o primeiro arquivo selecionado
    if (!file) return;  // Se nenhum arquivo for selecionado, pode-se fechar a tela

    const reader = new FileReader();  // Cria um leitor de arquivos
    reader.onload = () => {
      const dataURL = reader.result;  // Converte o arquivo em uma URL
      profilePic.src = dataURL;   // Atualiza a imagem de perfil selecionada
      localStorage.setItem('profilePic', dataURL);  // Salva a imagem no localStorage
    };
    reader.readAsDataURL(file);  // Inicia a leitura do arquivo como Data URL
  });
});

document.addEventListener('DOMContentLoaded', () => {
// Mapeia os campos de dados pessoais do perfil com seus respectivos IDs
  const fields = {
    firstName: document.getElementById('first-name'),
    lastName:  document.getElementById('last_name'),
    nickname:  document.getElementById('nickname'),
    email:     document.getElementById('email'),
    phone:     document.getElementById('phone'),
    bio:       document.getElementById('bio-input'),
  };

// Seleciona o elemento que exibe o nome de usuário
  const usernameDisplay = document.querySelector('.username');

// Para cada campo, verifica se há um dado salvo no localStorage e preenche o campo
  for (let key in fields) {
    const saved = localStorage.getItem(key);
    if (saved) fields[key].value = saved;
  }

// Se tiver um nome salvo, exibe ele como nome de usuário
  if (localStorage.getItem('nickname')) {
    usernameDisplay.textContent = localStorage.getItem('nickname');
  }

// Botão de salvar os dados
  const saveBtn = document.querySelector('button[type="submit"]');
  saveBtn.addEventListener('click', (e) => {
    e.preventDefault();

// Salva no localStorage o valor para cada campo
    for (let key in fields) {
      localStorage.setItem(key, fields[key].value);
    }

// Atualiza o nome de usuário exibido com um novo nome
    usernameDisplay.textContent = fields.nickname.value;

    alert('Dados salvos com sucesso!');
  });
});
document.addEventListener('DOMContentLoaded', () => {
// Seleciona a imagem do usuário e Recupera a imagem do usuário salva no localStorage   
  const profilePicHome = document.querySelector('img.profile-pic');
  const savedPic = localStorage.getItem('profilePic');
// Caso exista uma imagem salva, define ela como a imagem atual
  if (savedPic) {
    profilePicHome.src = savedPic;
  }
});

document.addEventListener('DOMContentLoaded', () => {
// Recupera o nome e a bio salvos no localStorage
  const username = localStorage.getItem('nickname');
  const bio = localStorage.getItem('bio');
// Seleciona onde o nome e a bio serão exibidos
  const usernameDisplay = document.querySelector('.username');
  const bioDisplay = document.querySelector('.bio');
// Se houver um nome salvo, exibe uma mensagem de boas-vindas
  if (username) usernameDisplay.textContent = `Bem-vindo, ${username}!`;
// Se houver uma bio salva, exibe a bio
  if (bio) bioDisplay.textContent = bio;
});

// iniciando API

fetch("https://api-receitas-pi.vercel.app/receitas/todas")
    .then((response) => response.json())
    .then((data) => console.log(data))

document.addEventListener('DOMContentLoaded', () => {
  const profilePicHome = document.querySelector('img.profile-pic');
  const savedPic = localStorage.getItem('profilePic');
  if (savedPic) {
    profilePicHome.src = savedPic;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('nickname');
  const bio = localStorage.getItem('bio');

  const usernameDisplay = document.querySelector('.username');
  const bioDisplay = document.querySelector('.bio');

  if (username) usernameDisplay.textContent = `Bem-vindo, ${username}!`;
  if (bio) bioDisplay.textContent = bio;
});


//iniciando API

fetch("https://api-receitas-pi.vercel.app/receitas/todas")
    .then((response) => response.json())
    .then((data) => console.log(data))

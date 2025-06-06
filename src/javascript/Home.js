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

  if (username) usernameDisplay.textContent = username;
  if (bio) bioDisplay.textContent = bio;
});
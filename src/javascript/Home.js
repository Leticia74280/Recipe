document.addEventListener('DOMContentLoaded', () => {
  const profilePicHome = document.querySelector('img.profile-pic');
  const savedPic = localStorage.getItem('profilePic');
  if (savedPic) {
    profilePicHome.src = savedPic;
  }
});
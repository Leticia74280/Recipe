document.addEventListener('DOMContentLoaded', () => {
  const editBtn = document.querySelector('.edit-profile-btn');
  const fileInput = document.getElementById('profilePicInput');
  const profilePic = document.querySelector('.profile-pic');

  const savedPic = localStorage.getItem('profilePic');
  if (savedPic) {
    profilePic.src = savedPic;
  }

  editBtn.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      profilePic.src = dataURL;
      localStorage.setItem('profilePic', dataURL);
    };
    reader.readAsDataURL(file);
  });
});
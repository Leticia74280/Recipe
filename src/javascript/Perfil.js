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

document.addEventListener('DOMContentLoaded', () => {
  const fields = {
    firstName: document.getElementById('first-name'),
    lastName:  document.getElementById('last_name'),
    nickname:  document.getElementById('nickname'),
    email:     document.getElementById('email'),
    phone:     document.getElementById('phone'),
    bio:       document.getElementById('bio-input'),
  };

  const usernameDisplay = document.querySelector('.username');
  for (let key in fields) {
    const saved = localStorage.getItem(key);
    if (saved) fields[key].value = saved;
  }

  if (localStorage.getItem('nickname')) {
    usernameDisplay.textContent = localStorage.getItem('nickname');
  }

  const saveBtn = document.querySelector('button[type="submit"]');
  saveBtn.addEventListener('click', (e) => {
    e.preventDefault();

    for (let key in fields) {
      localStorage.setItem(key, fields[key].value);
    }

    usernameDisplay.textContent = fields.nickname.value;

    alert('Dados salvos com sucesso!');
  });
});
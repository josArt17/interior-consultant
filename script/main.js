const menuBtn = document.getElementById('btnMenu');
const navMenu = document.querySelector('.nav-menu');
const closeBtn = document.getElementById('closeBtn');
const menuIcon = document.getElementById('menuBtn');
const menuItems = document.querySelectorAll('.nav-menu li');
const profileCard = document.getElementById('profileCard');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  closeBtn.classList.toggle('active');

  if (closeBtn.classList.contains('active')) {
        menuIcon.style.display = 'none';
        profileCard.style.display = 'none';

  } else {
        menuIcon.style.display = 'block';
        profileCard.style.display = 'block';
  }
});

function removeActiveClassExceptCurrent(currentItem) {
    menuItems.forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('active');
      }
    });
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // Si el elemento ya tiene la clase .active, al hacer clic nuevamente, se quitará el estilo
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        // Si el elemento no tiene la clase .active, se agregará, y se quitará de los demás elementos
        item.classList.add('active');
        removeActiveClassExceptCurrent(item);
      }
    });
});
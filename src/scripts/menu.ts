const menu = document.querySelector('.hamburger')
const navigation = document.querySelector('.nav-links')

if (menu && navigation) {
  menu.addEventListener('click', () => {
    navigation.classList.toggle('expanded');
  });
}

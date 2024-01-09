const menuBTN = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');

function toggleBtn() {
    menuBTN.classList.toggle("checked");
    menuItems.classList.toggle("active");
}

menuBTN.addEventListener('click', toggleBtn);

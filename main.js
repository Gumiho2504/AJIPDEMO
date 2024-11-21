const menuButton = document.getElementById('menu-button');
const menuMobile = document.getElementById('menu-mobile');
let isOpen = false;  // Use `let` since we need to modify the value

function MenuBox() {
    isOpen = !isOpen;  // Toggle the isOpen state
    console.log(isOpen);  // Log the state to check

    if (isOpen) {
        menuMobile.classList.add('active');  // Add the 'active' class when the menu is open
    } else {
        menuMobile.classList.remove('active');  // Remove the 'active' class when the menu is closed
    }
}

if (menuButton) {
    menuButton.addEventListener('click', MenuBox);  // Pass the function reference without calling it
}

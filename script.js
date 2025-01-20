const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-150%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';
    errorMessage.style.color = 'red';

    if (!name || !email || !message) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    errorMessage.textContent = 'Form submitted successfully!';
    errorMessage.style.color = 'green';


    document.getElementById('contactForm').reset();
});

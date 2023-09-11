const openModalBtn = document.getElementById('openModalBtn');
const loginModal = document.getElementById('loginModal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

});
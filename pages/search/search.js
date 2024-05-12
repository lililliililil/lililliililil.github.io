const toggleBtn = document.querySelector('.navbar__toogleBtn')
const menu = document.querySelector('.navbar__menu')
const icons = document.querySelector('.navbar__icons')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

function search() {
    const query = document.getElementById('search-input').value;
    const googleSearchUrl = `https://www.google.com/search?q=${query}`;
    window.location.href = googleSearchUrl;
}
const query = document.querySelector('.query');
const searchBtn = document.querySelector('.searchBtn');


searchBtn.addEventListener('click', () => {
    let url = `https://www.google.com/search?q=${query.value}`;
    window.open(url, '_self');
});
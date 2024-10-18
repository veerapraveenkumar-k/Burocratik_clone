document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById('menu');
    const home = document.getElementById('home');
    const brand = document.getElementById('brand');
    const menuSection = document.getElementById('menuSection');
    const close = document.getElementById('close')
    menu.onclick = function(){
        home.classList.toggle('display-none');
        brand.classList.toggle('black')
        menuSection.classList.toggle('display-none')
        close.classList.toggle('display-none')
    }
})
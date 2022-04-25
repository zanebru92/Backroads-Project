// Atribuir variáveis aos elementos do html.

let navBtn = document.getElementById('nav-toggle');
let navLinks = document.getElementById('nav-links');

// Add event listener ao botão.

navBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('showMenu');
})

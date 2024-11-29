// Modal para exibir imagens com zoom
const photos = document.querySelectorAll('.photos img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close-btn');

// Exibe a imagem no modal
photos.forEach(photo => {
    photo.addEventListener('click', () => {
        modalImg.src = photo.src;
        modal.classList.add('active');
    });
});

// Fecha o modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Navbar com rolagem mais tranquila
const navbarLinks = document.querySelectorAll('nav ul li a');
navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajuste para compensar a altura da navbar fixa
                behavior: 'smooth'
            });
        }
    });
});

// Botão "Contate-me" adicionando o redirecionamento
const contactButton = document.querySelector('button[onclick]');
contactButton.addEventListener('click', () => {
    window.location.href = '../chat/chat.html';
});

// Exibe alertas ao clicar em seções
const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`Você clicou na seção: ${item.innerText}`);
    });
});

window.addEventListener('load', function () {

// Recupera os dados do usuário armazenados no sessionStorage
const clickedUser = JSON.parse(sessionStorage.getItem('clickedUser'));
  
if (clickedUser) {
    // Preenche os dados do perfil com as informações do usuário
    document.getElementById('profilePic').src = clickedUser.profilePicLink;
    document.getElementById('name').textContent = clickedUser.name;
    document.getElementById('badges').textContent = clickedUser.badges.join(' / ');
    document.getElementById('email').textContent = clickedUser.email;
    document.getElementById('phone').textContent = clickedUser.phone;
    document.getElementById('role').textContent = clickedUser.role;
    document.getElementById('location').textContent = `${clickedUser.city}/${clickedUser.state}`;
    document.getElementById('genres').textContent = clickedUser.genres.join(', ');
    document.getElementById('bannerImg').src = clickedUser.bannerPicLink;
    document.getElementById('songLink').src = "https://www.youtube.com/embed/" + clickedUser.songLink.split('/').pop();
    document.getElementById('img1').src = clickedUser.userPicsLinks[0];
    document.getElementById('img2').src = clickedUser.userPicsLinks[1];
    document.getElementById('img3').src = clickedUser.userPicsLinks[2];
    document.getElementById('img4').src = clickedUser.userPicsLinks[3];
    document.getElementById('img5').src = clickedUser.userPicsLinks[4];
    document.getElementById('img6').src = clickedUser.userPicsLinks[5];

    document.body.classList.add('loaded')
} else {
     alert('Usuário não encontrado!');
}
});

// Seleciona as imagens e o modal
const photos = document.querySelectorAll('.photos img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close-btn');

// Exibe a imagem ampliada no modal
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

// Fecha o modal se clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
         modal.classList.remove('active');
    }
});
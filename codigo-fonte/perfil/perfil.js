window.addEventListener('load', function () {

    // Recupera os dados do usuário armazenados no sessionStorage
    const user = JSON.parse(sessionStorage.getItem('clickedUser'));
  
    if (user) {
      // Preenche os dados do perfil com as informações do usuário
      document.getElementById('profilePic').src = user.profilePicLink;
      document.getElementById('name').textContent = user.name;
      document.getElementById('badges').textContent = user.badges.join(' / ');
      document.getElementById('email').textContent = user.email;
      document.getElementById('phone').textContent = user.phone;
      document.getElementById('role').textContent = user.role;
      document.getElementById('location').textContent = `${user.city}/${user.state}`;
      document.getElementById('genres').textContent = user.genres.join(', ');
      document.getElementById('bannerImg').src = user.bannerPicLink;
      document.getElementById('img1').src = user.userPicsLinks[0];
      document.getElementById('img2').src = user.userPicsLinks[1];
      document.getElementById('img3').src = user.userPicsLinks[2];
      document.getElementById('img4').src = user.userPicsLinks[3];
      document.getElementById('img5').src = user.userPicsLinks[4];
      document.getElementById('img6').src = user.userPicsLinks[5];

      document.body.classList.add('loaded')

      // Outros campos que você deseja exibir no perfil
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
  
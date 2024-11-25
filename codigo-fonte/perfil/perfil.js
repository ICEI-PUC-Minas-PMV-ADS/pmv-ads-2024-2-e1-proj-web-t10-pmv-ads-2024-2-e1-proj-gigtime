window.addEventListener('load', function () {

    // Recupera os dados do usuário armazenados no sessionStorage
    const user = JSON.parse(sessionStorage.getItem('clickedUser'));
  
    if (user) {
      // Preenche os dados do perfil com as informações do usuário
      document.getElementById('profilePic').src = user.profilePicLink;
      document.getElementById('name').textContent = user.name;
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
  
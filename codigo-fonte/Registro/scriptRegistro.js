document.getElementById('sendImgLink').addEventListener('click', function () {
  // Recupera o valor do campo de input
  const profilePicLink = document.getElementById('profilePicLink').value.trim();
  
  // Verifica se o link da imagem não está vazio
  if (profilePicLink) {
    // Altera o 'src' da imagem para o link fornecido
    profilePic.src = profilePicLink;
  
  } else {
    //Carrega a imagem padrão
    profilePic.src = '../userImages/defaultUser.jpg';
  }
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const role = document.getElementById('role').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value.trim();
    const genres = Array.from(document.querySelectorAll('#genres input[type="checkbox"]:checked'))
                                .map(checkbox => checkbox.value);
    const profilePicLink = document.getElementById('profilePicLink').value.trim() || '/userImages/defaultUser.jpg';
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();


  
    // Validação básica
    if (!username || !name || !email || !phone || !role || !state || !city || !genres || !password || !confirmPassword) {
      this.classList.add('was-validated');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    // Recupera ou inicializa os usuários no sessionStorage
    const users = JSON.parse(sessionStorage.getItem('users')) || [];
    
      // Variável para controlar se há erro
    let hasError = false;
  
    // Verifica duplicatas
    if (users.some(user => user.username === username)) {
        document.getElementById('username').classList.add('is-invalid');
        hasError = true;
    } else {
        document.getElementById('username').classList.remove('is-invalid');
    }
    
    if (users.some(user => user.email === email)) {
        // Adiciona a classe 'is-invalid' ao campo de e-mail
        document.getElementById('email').classList.add('is-invalid');
        hasError = true;
      } else {
        // Remove a classe 'is-invalid' se o e-mail for único
        document.getElementById('email').classList.remove('is-invalid');
      }
      
    if (users.some(user => user.phone === phone)) {
        document.getElementById('phone').classList.add('is-invalid');
        hasError = true;
    } else {
        document.getElementById('phone').classList.remove('is-invalid');
    }

    if (hasError) {
        this.classList.add('was-validated');
        return;
    }
  
    // Adiciona novo usuário
    users.push({ 
      username,
      name,
      email,
      phone,
      role,
      state,
      city,
      genres,
      rating: 0,
      badges: ["Novato"],
      profilePicLink,
      bannerPicLink: 'https://picsum.photos/2000/1000?x=1',
      userPicsLinks: [
        "https://picsum.photos/600/1000?x=1",
        "https://picsum.photos/600/1000?x=2",
        "https://picsum.photos/600/1000?x=3",
        "https://picsum.photos/600/1000?x=4",
        "https://picsum.photos/600/1000?x=5",
        "https://picsum.photos/600/1000?x=6",
    ],
      password
    });
    
    sessionStorage.setItem('users', JSON.stringify(users));
  
    alert('Registro realizado com sucesso!');
    window.location.href = '../Login/login.html'; // Ajuste o caminho conforme necessário
  });  
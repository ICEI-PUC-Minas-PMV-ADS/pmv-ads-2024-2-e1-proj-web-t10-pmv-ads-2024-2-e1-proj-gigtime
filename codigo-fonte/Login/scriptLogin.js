// Adiciona evento ao formulário
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Previne envio padrão do formulário

  // Obtém os valores dos campos
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Verifica se o usuário está registrado na memória local
  const registeredUsers = JSON.parse(sessionStorage.getItem('users')) || [];
  const user = registeredUsers.find(user => user.username === username && user.password === password);

  if (!username || !password) {
      this.classList.add('was-validated'); // Marca os campos para validação
  } else if (user) {
      // Armazena o nome de usuário no sessionStorage
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));

      // Redireciona para a página de anúncios
      const redirectionPath = '../Anúncios/anuncios.html';
      window.location.href = redirectionPath;
  } else {
      alert('Usuário ou senha inválidos!');
  }
});

  
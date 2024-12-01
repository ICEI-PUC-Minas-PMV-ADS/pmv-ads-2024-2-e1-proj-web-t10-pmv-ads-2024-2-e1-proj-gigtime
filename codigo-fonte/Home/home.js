  // Armazena a escolha no sessionStorage ao clicar nos botões
  document.getElementById('btnMusicians').addEventListener('click', () => {
    sessionStorage.setItem('selectedRole', 'Músico');
  });

  document.getElementById('btnContractors').addEventListener('click', () => {
    sessionStorage.setItem('selectedRole', 'Contratante');
  });
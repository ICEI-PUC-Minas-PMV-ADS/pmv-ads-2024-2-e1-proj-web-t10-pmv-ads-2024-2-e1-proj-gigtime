  // Armazena a escolha no sessionStorage ao clicar nos botões
  document.getElementById('btnMusicians').addEventListener('click', () => {
    sessionStorage.setItem('selectedRole', 'Músico');
  });

  document.getElementById('btnContractors').addEventListener('click', () => {
    sessionStorage.setItem('selectedRole', 'Contratante');
  });

  // Seleciona o container onde os cards serão inseridos
const anunciosMusic = document.getElementById('anunciosMusic');
const anunciosContrat = document.getElementById('anunciosContrat');

// Recupera os usuários do sessionStorage
const users = JSON.parse(sessionStorage.getItem('users')) || [];



// Gera os cards para cada usuário
users.forEach(user => {
  const card = `
        <div class="col col-card d-flex">
          <div class="card flex-fill">
            <a href="#" id="${user.username}">
              <img src="${user.profilePicLink}" class="card-img-top" alt="Imagem de ${user.name}">
            </a>
            <div class="card-body">
              <h5 class="card-title">${user.name}
                <i class="fa-solid fa-star mt-2 ms-1 float-end">
                  <span> ${user.rating || 'N/A'}</span>
                </i>
              </h5>
              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fa-solid fa-location-dot me-1"></i> ${user.city}/${user.state}
              </li>
              <li class="list-group-item">
                <i class="fa-solid fa-guitar me-1"></i> ${user.genres.join(', ')}
              </li>
            </ul>
          </div>
        </div>       
      </div>
  `;

  // Adiciona o card ao container sem sobrescrever os elementos existentes
  if (user.role === 'Músico') {
  anunciosMusic.insertAdjacentHTML('beforeend', card);
  } else if (user.role === 'Contratante') {
  anunciosContrat.insertAdjacentHTML('beforeend', card);
  }

  const link = document.getElementById(user.username);
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita redirecionamento imediato
    sessionStorage.setItem('clickedUser', JSON.stringify(user)); // Armazena os dados do usuário
    window.location.href = '../Perfil/perfil.html'; // Redireciona para a página de perfil
  });
});
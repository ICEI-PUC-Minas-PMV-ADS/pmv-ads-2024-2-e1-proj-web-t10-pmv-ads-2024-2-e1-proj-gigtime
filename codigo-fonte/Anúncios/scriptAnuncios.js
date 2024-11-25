// Seleciona o container onde os cards serão inseridos
const anuncios = document.getElementById('anuncios');

// Recupera os usuários do sessionStorage
const users = JSON.parse(sessionStorage.getItem('users')) || [];



// Gera os cards para cada usuário
users.forEach(user => {
  const card = `
    <div class="col d-flex">
      <div class="card flex-fill">
        <a href="#" id="${user.username}">
          <img src="${user.profilePicLink}" class="card-img-top" alt="Imagem de ${user.name}">
        </a>
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <i class="fa-solid fa-star ms-1 float-end">${user.rating || 'N/A'}</i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fa-solid fa-location-dot me-1"></i> ${user.city}/${user.state}
          </li>
          <li class="list-group-item">
            <i class="fa-solid fa-guitar me-1"></i> ${user.genres.join(', ')}
          </li>
          <li class="list-group-item d-flex">
            <div class="d-flex flex-wrap">
              ${user.badges.map(badge => `<div class="badge bg-primary me-2 mb-1">${badge}</div>`).join('')}
            </div>
          </li>
        </ul>
      </div>
    </div>
  `;

  // Adiciona o card ao container sem sobrescrever os elementos existentes
  anuncios.insertAdjacentHTML('beforeend', card);
});

users.forEach(user => {
  const link = document.getElementById(user.username);
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita redirecionamento imediato
    sessionStorage.setItem('clickedUser', JSON.stringify(user)); // Armazena os dados do usuário
    window.location.href = '/Perfil/perfil.html'; // Redireciona para a página de perfil
  });
});

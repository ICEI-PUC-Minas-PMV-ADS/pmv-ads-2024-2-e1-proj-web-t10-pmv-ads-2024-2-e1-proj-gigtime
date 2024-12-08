// Seleciona o container onde os cards serão inseridos
const anuncios = document.getElementById('anuncios');

// Recupera os usuários do sessionStorage
const users = JSON.parse(sessionStorage.getItem('users')) || [];



// Gera os cards para cada usuário
users.forEach(user => {
  const card = `
    <div class="col d-flex NO ${user.role} ${user.state}">
      <div class="card flex-fill">
        <a href="#" id="${user.username}">
          <img src="${user.profilePicLink}" class="card-img-top" alt="Imagem de ${user.name}">
        </a>
        <div class="card-body">
          <h5 class="card-title">${user.name}
            <i class="fa-solid fa-star fs-6 ms-1 float-end">
              <span>${user.rating || 'N/A'}</span>
            </i>
          </h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fa-solid fa-person me-1"></i> ${user.role}
          </li>
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

document.addEventListener('DOMContentLoaded', () => {
  const selectedRole = sessionStorage.getItem('selectedRole'); // Recupera a escolha do usuário
  const radioMusician = document.getElementById('radioMusician');
  const radioContractor = document.getElementById('radioContractor');
  const selectedState = document.getElementById('state');

  // Supondo que você tenha os estados e as funções correspondentes
const stateActions = {
    'AC': () => filtrarCards('AC'),
    'AL': () => filtrarCards('AL'),
    'AP': () => filtrarCards('AP'),
    'AM': () => filtrarCards('AM'),
    'BA': () => filtrarCards('BA'),
    'CE': () => filtrarCards('CE'),
    'DF': () => filtrarCards('DF'),
    'ES': () => filtrarCards('ES'),
    'GO': () => filtrarCards('GO'),
    'MA': () => filtrarCards('MA'),
    'MT': () => filtrarCards('MT'),
    'MS': () => filtrarCards('MS'),
    'MG': () => filtrarCards('MG'),
    'PA': () => filtrarCards('PA'),
    'PB': () => filtrarCards('PB'),
    'PR': () => filtrarCards('PR'),
    'PE': () => filtrarCards('PE'),
    'PI': () => filtrarCards('PI'),
    'RJ': () => filtrarCards('RJ'),
    'RN': () => filtrarCards('RN'),
    'RS': () => filtrarCards('RS'),
    'RO': () => filtrarCards('RO'),
    'RR': () => filtrarCards('RR'),
    'SC': () => filtrarCards('SC'),
    'SP': () => filtrarCards('SP'),
    'SE': () => filtrarCards('SE'),
    'TO': () => filtrarCards('TO')
  // Adicione mais estados aqui
};

document.getElementById('state').addEventListener('change', function() {
  const selectedState = this.value;
  const action = stateActions[selectedState];

  if (action) {
    action(); // Executa a função associada ao estado
  } else {
    // Caso o estado não seja válido ou não tenha uma ação associada
  }
});

  // Supondo que você tenha os gêneros e as funções correspondentes
  const genresActions = {
    'Sertanejo': () => filtrarCards('Sertanejo'),
    'Rock': () => filtrarCards('Rock'),
    'MPB': () => filtrarCards('MPB'),
    'Pop': () => filtrarCards('Pop'),
    'Forró': () => filtrarCards('Forró'),
    'Jazz': () => filtrarCards('Jazz'),
  // Adicione mais gêneros aqui
};

document.getElementById('genres').addEventListener('change', function() {
  const selectedGenres = this.value;
  const action = genresActions[selectedGenres];

  if (action) {
    action(); // Executa a função associada ao gênero musical
  } else {
    // Caso o gênero musical não seja válido ou não tenha uma ação associada
  }
});


  if (selectedRole === 'Músico') {
    radioMusician.checked = true; // Marca o botão de Músico
    filtrarCards('Músico'); // Aplica o filtro automaticamente
  } else if (selectedRole === 'Contratante') {
    radioContractor.checked = true; // Marca o botão de Contratante
    filtrarCards('Contratante'); // Aplica o filtro automaticamente
  }
});

// Seleciona os botões de rádio pelos IDs
const radioMusician = document.getElementById('radioMusician');
const radioContractor = document.getElementById('radioContractor');

// Função para exibir/ocultar os cards com base no papel (role)
function filtrarCards(param) {
  const cards = document.querySelectorAll('.col.d-flex'); // Seleciona todos os cards
  cards.forEach(card => {
    if (card.classList.contains(param)) {
      // Mostra o card do tipo selecionado
      card.style.setProperty('display', 'flex', 'important');
    } else {
      // Oculta o card de outro tipo
      card.style.setProperty('display', 'none', 'important');
    }
  });
}

// Adiciona eventos de clique aos botões de rádio
radioMusician.addEventListener('change', () => {
  if (radioMusician.checked) filtrarCards('Músico'); // Exibe músicos
});

radioContractor.addEventListener('change', () => {
  if (radioContractor.checked) filtrarCards('Contratante'); // Exibe contratantes
});

// Verifica o botão marcado ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  if (radioMusician.checked) {
    filtrarCards('Músico'); // Exibe músicos
  } else if (radioContractor.checked) {
    filtrarCards('Contratante'); // Exibe contratantes
  }
});


users.forEach(user => {
  const link = document.getElementById(user.username);
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita redirecionamento imediato
    sessionStorage.setItem('clickedUser', JSON.stringify(user)); // Armazena os dados do usuário
    window.location.href = '../Perfil/perfil.html'; // Redireciona para a página de perfil
  });
});

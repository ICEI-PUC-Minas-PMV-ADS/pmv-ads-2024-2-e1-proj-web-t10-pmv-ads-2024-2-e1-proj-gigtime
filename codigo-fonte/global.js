window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
    const navbar = document.querySelector('.navbar-nav');

    if(navbar){
    if (loggedInUser) {
        // Personaliza a navbar para o usuário logado

        navbar.innerHTML = `
        <a class="navbar-brand" href="/Perfil/perfil.html">
            <img src="${loggedInUser.profilePicLink}" alt="Foto de perfil" width="30" height="30" class="shadow object-fit-cover rounded-circle">
        </a>
        <span class="navbar-text text-white me-3">Bem-vindo, ${loggedInUser.username}!</span>
        <a class="nav-link me-3" href="#" id="profileLink">Perfil</a>
        <a class="nav-link me-3" href="#" id="logoutLink">Sair</a>
          `;

          document.getElementById('profileLink').addEventListener('click', function () {
            // Obtém o usuário logado
            const loggedInUser = sessionStorage.getItem('loggedInUser');

                // Adiciona o objeto do usuário logado à key 'clickedUser'
                sessionStorage.setItem('clickedUser', loggedInUser);
        
            // Redireciona para a página de perfil
            window.location.href = '/Perfil/perfil.html';
        });

        // Adiciona evento de logout
        document.getElementById('logoutLink').addEventListener('click', function () {
            sessionStorage.removeItem('loggedInUser'); // Remove o usuário logado
            window.location.href = '/Home/home.html'; // Redireciona para a página inicial
        });
    } else {
        // Exibe links padrão para visitantes
        navbar.innerHTML = `
      <a class="nav-link me-3" href="/Login/login.html">Entrar</a>
      <a class="nav-link me-3" href="/Registro/registro.html">Inscrever-se</a>
    `;
    }
}});

// Adiciona usuário padrão na memória local
if (!sessionStorage.getItem('users')) {
    sessionStorage.setItem('users', JSON.stringify([
        {
            username: 'admin',
            name: 'Administrador',
            email: 'admin@example.com',
            phone: '1234567890',
            role: 'Músico', // Ou 'contractor', dependendo do caso
            state: 'SP',
            city: 'Hortolândia',
            rating: 5,
            genres: ["Rock", "MPB", "Sertanejo"],
            badges: ["O Brabão"],
            profilePicLink: 'https://pt.quizur.com/_image?href=https://img.quizur.com/f/img6222bee36c5911.81739346.jpg?lastEdited=1646444263&w=600&h=600&f=webp',
            bannerPicLink: 'https://picsum.photos/2000/1000?x=1',
            userPicsLinks: [
                "https://picsum.photos/600/1000?x=1",
                "https://picsum.photos/600/1000?x=2",
                "https://picsum.photos/600/1000?x=3",
                "https://picsum.photos/600/1000?x=4",
                "https://picsum.photos/600/1000?x=5",
                "https://picsum.photos/600/1000?x=6",
            ],
            password: '1234'
        },
        {
            username: 'sonic',
            name: 'Sonic Hedgehog',
            email: 'sonic@example.com',
            phone: '1234567891',
            role: 'Músico', // Ou 'contractor', dependendo do caso
            state: 'RJ',
            city: 'Rio de Janeiro',
            rating: 5,
            genres: ["Rock", "MPB"],
            badges: ["Show Man"],
            profilePicLink: 'https://play-lh.googleusercontent.com/CvU2EiRbIpdQcGBqDinwf-J4Q4_B1M6g11P3o5ylTGsa8PGMzxdQTrSHXYjjzMOmNq4',
            bannerPicLink: 'https://picsum.photos/2000/1000?x=1',
            userPicsLinks: [
                "https://picsum.photos/600/1000?x=1",
                "https://picsum.photos/600/1000?x=2",
                "https://picsum.photos/600/1000?x=3",
                "https://picsum.photos/600/1000?x=4",
                "https://picsum.photos/600/1000?x=5",
                "https://picsum.photos/600/1000?x=6",
            ],
            password: 'sonic'
        },
        {
            username: 'maria123',
            name: 'Maria Oliveira',
            email: 'maria@example.com',
            phone: '9876543210',
            role: 'Contratante',
            state: 'MG',
            city: 'Belo Horizonte',
            rating: 4.5,
            genres: ["Sertanejo", "Pop"],
            badges: ["Top Contratante"],
            profilePicLink: 'https://images.pexels.com/photos/3054533/pexels-photo-3054533.jpeg?auto=compress&cs=tinysrgb&w=600',
            bannerPicLink: 'https://picsum.photos/2000/1000?x=1',
            userPicsLinks: [
                "https://picsum.photos/600/1000?x=1",
                "https://picsum.photos/600/1000?x=2",
                "https://picsum.photos/600/1000?x=3",
                "https://picsum.photos/600/1000?x=4",
                "https://picsum.photos/600/1000?x=5",
                "https://picsum.photos/600/1000?x=6",
            ],
            password: 'maria123'
        },
        {
            username: 'lucas98',
            name: 'Lucas Silva',
            email: 'lucas98@example.com',
            phone: '9988776655',
            role: 'Músico',
            state: 'SP',
            city: 'São Paulo',
            rating: 4.8,
            genres: ["Rock", "MPB"],
            badges: ["Estrela em Ascensão"],
            profilePicLink: 'https://images.pexels.com/photos/1498335/pexels-photo-1498335.jpeg?auto=compress&cs=tinysrgb&w=600',
            bannerPicLink: 'https://picsum.photos/2000/1000?x=1',
            userPicsLinks: [
                "https://picsum.photos/600/1000?x=1",
                "https://picsum.photos/600/1000?x=2",
                "https://picsum.photos/600/1000?x=3",
                "https://picsum.photos/600/1000?x=4",
                "https://picsum.photos/600/1000?x=5",
                "https://picsum.photos/600/1000?x=6",
            ],
            password: 'lucas98'
        },
        {
            username: 'ana.pereira',
            name: 'Ana Pereira',
            email: 'ana.pereira@example.com',
            phone: '1239874560',
            role: 'Músico',
            state: 'PR',
            city: 'Curitiba',
            rating: 4.2,
            genres: ["Jazz", "MPB"],
            badges: ["Jazz Lover"],
            profilePicLink: 'https://images.pexels.com/photos/8191522/pexels-photo-8191522.jpeg?auto=compress&cs=tinysrgb&w=600',
            bannerPicLink: 'https://picsum.photos/2000/1000?x=1',
            userPicsLinks: [
                "https://picsum.photos/600/1000?x=1",
                "https://picsum.photos/600/1000?x=2",
                "https://picsum.photos/600/1000?x=3",
                "https://picsum.photos/600/1000?x=4",
                "https://picsum.photos/600/1000?x=5",
                "https://picsum.photos/600/1000?x=6",
            ],
            password: 'ana.pereira'
        },
        {
            username: 'joao_souza',
            name: 'João Souza',
            email: 'joao.souza@example.com',
            phone: '5678901234',
            role: 'Contratante',
            state: 'RS',
            city: 'Porto Alegre',
            rating: 5,
            genres: ["Rock", "Pop"],
            badges: ["Melhor Produtor"],
            profilePicLink: 'https://images.pexels.com/photos/2531551/pexels-photo-2531551.jpeg?auto=compress&cs=tinysrgb&w=600',
            bannerPicLink: 'https://picsum.photos/2000/1000?x=1',
            userPicsLinks: [
                "https://picsum.photos/600/1000?x=1",
                "https://picsum.photos/600/1000?x=2",
                "https://picsum.photos/600/1000?x=3",
                "https://picsum.photos/600/1000?x=4",
                "https://picsum.photos/600/1000?x=5",
                "https://picsum.photos/600/1000?x=6",
            ],
            password: 'joao.souza'
        },
        {
            username: 'carol.martins',
            name: 'Carolina Martins',
            email: 'carol.martins@example.com',
            phone: '7894561230',
            role: 'Músico',
            state: 'BA',
            city: 'Salvador',
            rating: 4.7,
            genres: ["Forró", "MPB"],
            badges: ["MPB Queen"],
            profilePicLink: 'https://images.pexels.com/photos/17411646/pexels-photo-17411646/free-photo-of-cidade-meio-urbano-ensolarado-moda.jpeg?auto=compress&cs=tinysrgb&w=600',
            bannerPicLink: 'https://picsum.photos/2000/1000?x=1',
            userPicsLinks: [
                "https://picsum.photos/600/1000?x=1",
                "https://picsum.photos/600/1000?x=2",
                "https://picsum.photos/600/1000?x=3",
                "https://picsum.photos/600/1000?x=4",
                "https://picsum.photos/600/1000?x=5",
                "https://picsum.photos/600/1000?x=6",
            ],
            password: 'carol.martins'
        }
    ]));
}
    document.addEventListener('DOMContentLoaded', function () {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
        const navbar = document.querySelector('.navbar-nav');

        if (loggedInUser) {
            // Personaliza a navbar para o usuário logado
            navbar.innerHTML = `
                <span class="navbar-text text-white me-3">Bem-vindo, ${loggedInUser}!</span>
                <a class="nav-link me-3" href="/Perfil/perfil.html">Perfil</a>
                <a class="nav-link me-3" href="#" id="logoutLink">Sair</a>
            `;

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
    });
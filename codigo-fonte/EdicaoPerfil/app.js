// Função genérica para manipular upload de imagens
function handleImageUpload(inputSelector, displaySelector, placeholderText, imgClass) {
  const inputFile = document.querySelector(inputSelector);
  const displayElement = document.querySelector(displaySelector);

  displayElement.textContent = placeholderText; // Define o texto inicial

  inputFile.addEventListener("change", function (e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.classList.add(imgClass);

        displayElement.innerHTML = ""; // Limpa o texto ou conteúdo anterior
        displayElement.appendChild(img); // Adiciona a imagem
      });

      reader.readAsDataURL(file); // Lê o arquivo como Base64
    } else {
      displayElement.textContent = placeholderText; // Retorna o texto padrão
    }
  });
}

// Configura os uploads
handleImageUpload("#banner_input", ".bannerimg", "Escolher um Banner", "banner_input");
handleImageUpload("#icon_input", ".iconimg", "Escolher um perfil", "icon_input");

// Função para manipular upload de vídeos
function handleVideoUpload(inputSelector, displaySelector, placeholderText, videoClass) {
  const inputFile = document.querySelector(inputSelector);
  const displayElement = document.querySelector(displaySelector);

  displayElement.textContent = placeholderText; // Define o texto inicial

  inputFile.addEventListener("change", function (e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function (e) {
        const video = document.createElement("video");
        video.src = e.target.result;
        video.classList.add(videoClass);
        video.controls = true; // Adiciona controles ao vídeo

        displayElement.innerHTML = ""; // Limpa o texto ou conteúdo anterior
        displayElement.appendChild(video); // Adiciona o vídeo
      });

      reader.readAsDataURL(file); // Lê o arquivo como Base64
    } else {
      displayElement.textContent = placeholderText; // Retorna o texto padrão
    }
  });
}

// Configura o upload de vídeos
handleVideoUpload("#video_input", ".videomovie", "Escolher um vídeo destaque", "video_input");

// Função para limpar todos os campos do formulário
function limparFormulario() {
  // Limpar campos de texto
  document.querySelectorAll('input[type="text"], textarea').forEach(input => input.value = "");

  // Limpar os campos de seleção (dropdown)
  document.querySelectorAll('select').forEach(select => select.selectedIndex = 0);

  // Limpar os inputs de arquivo (para imagem e vídeo)
  document.getElementById("banner_input").value = "";
  document.getElementById("icon_input").value = "";
  document.getElementById("video_input").value = "";

  // Limpar o conteúdo de exibição das imagens e vídeos
  document.querySelector(".bannerimg").innerHTML = "";
  document.querySelector(".iconimg").innerHTML = "";
  document.querySelector(".videomovie").innerHTML = "";

  // Garantir que os vídeos e imagens sejam removidos após limpar
  const videoElement = document.querySelector(".videomovie video");
  if (videoElement) {
      videoElement.remove(); // Remove o vídeo se existir
  }

  const imgElements = document.querySelectorAll(".bannerimg img, .iconimg img");
  imgElements.forEach(img => img.remove()); // Remove todas as imagens dentro da área de banner e ícone
}

// Adicionar o evento de clique ao botão de limpar
document.getElementById("clear_button").addEventListener("click", limparFormulario);

// Função para salvar os dados no localStorage
function salvarFormulario() {
  const nome = document.querySelector('input[placeholder="Nome"]').value;
  const usuario = document.querySelector('input[placeholder="@Usuário"]').value;
  const estiloMusical = document.querySelectorAll('select')[0].value;
  const estado = document.querySelectorAll('select')[1].value;
  const numero = document.querySelector('input[placeholder="Número"]').value;
  const cidade = document.querySelector('input[placeholder="Cidade"]').value;
  const sobreVoce = document.querySelectorAll('textarea')[0].value;
  const habilidades = document.querySelectorAll('textarea')[1].value;

  // Coleta as imagens e vídeos (convertendo para Base64)
  const bannerInput = document.getElementById("banner_input").files[0];
  const iconInput = document.getElementById("icon_input").files[0];
  const videoInput = document.getElementById("video_input").files[0];

  const salvarDados = (bannerBase64, iconBase64, videoBase64) => {
    const formularioData = {
      nome,
      usuario,
      estiloMusical,
      estado,
      numero,
      cidade,
      sobreVoce,
      habilidades,
      banner: bannerBase64 || null,
      icon: iconBase64 || null,
      video: videoBase64 || null,
    };

    localStorage.setItem('formularioData', JSON.stringify(formularioData));
    alert("Formulário salvo com sucesso!");
  };

  // Função auxiliar para converter arquivos para Base64
  const toBase64 = (file) =>
    new Promise((resolve) => {
      if (!file) {
        resolve(null);
        return;
      }
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });

  // Processa os arquivos de forma assíncrona e salva os dados
  Promise.all([
    toBase64(bannerInput),
    toBase64(iconInput),
    toBase64(videoInput),
  ]).then(([bannerBase64, iconBase64, videoBase64]) => {
    salvarDados(bannerBase64, iconBase64, videoBase64);
  });
}

// Função para carregar os dados do localStorage
function carregarFormulario() {
  const dadosSalvos = localStorage.getItem('formularioData');

  if (dadosSalvos) {
    const formularioData = JSON.parse(dadosSalvos);

    document.querySelector('input[placeholder="Nome"]').value = formularioData.nome || "";
    document.querySelector('input[placeholder="@Usuário"]').value = formularioData.usuario || "";
    document.querySelectorAll('select')[0].value = formularioData.estiloMusical || "Estilo Musical";
    document.querySelectorAll('select')[1].value = formularioData.estado || "Estado";
    document.querySelector('input[placeholder="Número"]').value = formularioData.numero || "";
    document.querySelector('input[placeholder="Cidade"]').value = formularioData.cidade || "";
    document.querySelectorAll('textarea')[0].value = formularioData.sobreVoce || "";
    document.querySelectorAll('textarea')[1].value = formularioData.habilidades || "";

    // Restaura imagens e vídeos
    if (formularioData.banner) {
      const bannerImg = document.createElement("img");
      bannerImg.src = formularioData.banner;
      document.querySelector(".bannerimg").innerHTML = "";
      document.querySelector(".bannerimg").appendChild(bannerImg);
    }

    if (formularioData.icon) {
      const iconImg = document.createElement("img");
      iconImg.src = formularioData.icon;
      document.querySelector(".iconimg").innerHTML = "";
      document.querySelector(".iconimg").appendChild(iconImg);
    }

    if (formularioData.video) {
      const videoElement = document.createElement("video");
      videoElement.src = formularioData.video;
      videoElement.controls = true;
      document.querySelector(".videomovie").innerHTML = "";
      document.querySelector(".videomovie").appendChild(videoElement);
    }
  }
}

// Adiciona os eventos de clique nos botões
document.getElementById('salvar_button').addEventListener('click', salvarFormulario);

// Carrega os dados do formulário ao abrir a página
window.onload = carregarFormulario;

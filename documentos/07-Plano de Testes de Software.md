# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-001:	Os usuários deverão poder se cadastrar na plataforma.</li>
   <li>RF-005:	O sistema deve permitir login.</li>
   <li>RF-009:	O usuário deve poder visualizar o próprio perfil.</li>
   <li>RF-007: Os usuários poderão clicar no perfil do Artista/Contratante na página inicial e serem levados diretamente para o perfil escolhido.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home e ser redirecionado.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Jefferson</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento do filtro de pesquisa de gêneros musicais.</td>
  <td>
   <ul>
    <li>RF-002:	O site deve oferecer uma funcionalidade de filtro para permitir ao usuário localizar os artistas/estabelecimentos disponíveis.</li>
   </ul>
  </td>
  <td>Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo usuário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Músicos/Contratantes.</li>
    <li>Escolher no filtro o gênero/local na lista.</li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro de pesquisa devem mostrar o artista/estabelecimento onde há o dado informado.</td>
  <td>Jefferson</td>
 </tr>
</table>
<table>
  <td>CT-03: Verificar o funcionamento do filtro de pesquisa de gêneros musicais.</td>
  <td>
   <ul>
    <li>RF-003:	Os usuários deverão poder se comunicar por chat através da plataforma.</li>
    <li>RF-004:	Perfis de músicos/bandas devem exibir uma página detalhada com informações completas, incluindo vídeos, fotos e disponibilidade.</li>
   </ul>
  </td>
  <td>Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo usuário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no perfil do Artista/Estabelecimento.</li>
    <li>Clicar no Contate-me para se comunicar.</li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro de pesquisa devem mostrar o artista/estabelecimento onde há o dado informado.</td>
  <td>Jefferson</td>
 </tr>
</table>
 <tr>
  <table>
  <td>CT-04: Verificar o funcionamento dos perfis na página Home.</td>
  <td>
   <ul>
    <li>RF-006:	Os usuários deverão se cadastrar e aparecer na tela da categoria escolhida no cadastro de perfil (Artista/Contratante).</li>
   </ul>
  </td>
  <td>Verificar se após o cadastro o perfil aparece na página Home.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Se cadastrar.</li>
    <li>Voltar para a página Home.</li>
   </ol>
   </td>
  <td>O perfil deve aparecer logo após voltar para a página home e fazer o login.</td>
  <td>Jefferson</td>
 </tr>
</table>
</table>
 <tr>
  <td>CT-05: Verificar o funcionamento do filtro de localidade.</td>
  <td>
   <ul>
   <li>O site deve se encontrar totalmente responsivo nas principais das plataformas de uso (smartphones/tablets/notebooks/computadores).</li>
   </ul>
  </td>
  <td>Verificar se está funcionando em todas as plataformas.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>CTRL + Shift + I</li>
    <li>Testar todas as opções e se está funcional.</li>
   </ol>
   </td>
  <td>Todas as opções devem funcionar normalmente.</td>
  <td>Jefferson</td>
 </tr>
</table>






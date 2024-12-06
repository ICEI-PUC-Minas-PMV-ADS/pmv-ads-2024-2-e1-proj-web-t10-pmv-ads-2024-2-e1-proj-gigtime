# Especificação do Projeto

## Perfis de Usuários

<!-- [Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.] -->

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Músico </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Músico que já realizou apresentações ao vivo.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  1. Um sistema fácil para negociar e fechar contratos com segurança;</br> <!-- o Br ali é para quebrar linha :) -->
  2. Um ambiente que permite o acesso dos contratantes ao seu protifólio;</br>
  3. Acesso a eventos de gêneros musicais especificos;</br>
  4. Garantia de estrutura adequada para apresentação;</br>
  5. Um ambiente que possibilite a interação com outros músicos;</br>
  6. Um sistema que permite registrar avaliações sobre os contratantes.
</td>
</tr>
<tr align=center>
<th colspan="2">Perfil: Contratantes </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Estebelecimentos e eventos com música ao vivo.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  1. Encontrar músicos disponíveis para apresentações frequentes e de última hora;</br>
  2. Visualizar feedbacks de outros contratantes sobre os músicos;</br>
  3. Monitorar os custos com música ao vivo e negociações;</br>
  4. Encontrar músicos especializados em um determinado gênero;</br>
  5. Encontrar músicos qualificados.
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

<!-- [Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.] -->

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE`                                                                                             |PARA ... `PORQUE`                                           |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| Banda              | <div align=center>Quero conseguir mais</br>oportunidades de trabalho</br>em minha área.</div>                         | <div align=center>Para conseguir mais</br>experiencia</div>|
| Músico Solo        | <div align=center>Quero expandir meu networking</div>                                                                 | <div align=center>Para criar mais conexões</br>com donos de</br>estabelecimentos e</br>aumentar minha relevância</br>no mercado</div> |
| Casa de Shows      | <div align=center>Quero ter uma maior variedade</br>de músicos de estilos diversos</br>(jazz, Funk, Samba, etc).</div>| <div align=center>Para que meu</br>estabelecimento seja único</br>criando um diferencial dos</br>outros atraindo um público</br>maior ao meu</br>estabelecimento.</div>|
| Bar                | <div align=center>Quero contratar músicos para</br>shows ao vivo em meu</br>estabelecimento.</div>                    | <div align=center>Para atrair um público maior</br>ao meu estabelecimento e</br>aumentar as vendas</div>|
| Restaurante        | <div align=center>Quero contratar bandas para</br>shows ao vivo em meu</br>estabelecimento.</div>                     | <div align=center>Para criar uma experiencia</br>mais agradável e confortável</br>aos meus clientes a fim de</br>fidelizá-los.</div>|

## Requisitos do Projeto

<!-- [Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.] -->

### Requisitos Funcionais

<!-- [Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais] -->

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |<div align=center>Os usuários devem poder se cadastrar na plataforma</div>| Alta |  
| RF-02 | <div align=center>Os usuários deverão poder filtrar músicos/contratantes com base em gêneros musicais, localidade e avaliação média.</div>| Alta |
| RF-03 | <div align=center>Os usuários devem poder se comunicar por chat através da</br>plataforma.</div>| Baixa | 
| RF-04 | <div align=center>Perfis de usuários devem exibir avaliações e feedbacks de forma</br>pública.</div>| Alta | 
| RF-05 | <div align=center>Perfis de músicos/bandas devem exibir uma página detalhada</br>com informações completas, incluindo vídeos, áudios, fotos,</br>feedbacks e disponibilidade.</div>| Alta |
| RF-06 | <div align=center>O sistema deve permitir login tradicional.</div>| Alta | 

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

<!-- [Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais] -->

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | <div align=center>A aplicação deve carregar rapidamente, especialmente em</br>páginas críticas como a busca por bandas e perfis.</div>| Alta | 
| RNF-02 | <div align=center>A aplicação de ter resposta rápida nas interações com a</br>interface, como ao aplicar filtros de busca.</div>| Alta |
| RNF-03 | <div align=center>A arquitetura do sistema deve ser escalável para suportar um</br>número crescente de usuários (bandas e contratantes) sem</br>perda de desempenho.</div>| Alta | 
| RNF-04 | <div align=center>Possibilidade de integrar uma futura API para backend sem</br>reestruturar o frontend.</div>| Alta |
| RNF-05 | <div align=center>A interface deve ser simples e intuitiva.</div>| Alta | 
| RNF-06 | <div align=center>O design deve ser responsivo, adaptando-se bem a diferentes</br>tamanhos de tela, como dispositivos móveis e desktops.</div>| Alta |
| RNF-07 | <div align=center>Dados pessoais dos usuários devem ser armazenados de</br>maneira segura, protegendo-os contra acesso não</br>autorizado.</div>| Alta | 
| RNF-08 | <div align=center>O sistema deve funcionar nos principais navegadores</br>(Chrome, Firefox, Safari, Edge).</div>| Alta | 
| RNF-09 | <div align=center>O código deve ser organizado e documentado de forma que</br>futuras atualizações e correções possam ser feitas</br>facilmente.</div>| Média |
| RNF-10 | <div align=center>A arquitetura deve ser modular, permitindo que novos</br>recursos sejam adicionados sem impactar o sistema</br>existente.</div>| Alta | 

**Prioridade: Alta / Média / Baixa. 


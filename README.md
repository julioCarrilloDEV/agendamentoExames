# Sistema de agendamento de exames

#### Sistema desenvolvido para o Hospital Unimed de Lins, focado no agendamento de exames de imagem, visando otimizar e simplificar o processo de marcação de exames para os pacientes.

## Tecnologias Utilizadas

- **HTML, CSS, JavaScript** - Para a estrutura e estilo do front-end.
- **Node.js** - Plataforma para construir a aplicação server-side.
- **Express** - Framework web para Node.js, facilitando a construção das rotas e middlewares.
- **Bootstrap** - Framework CSS para uma interface responsiva e moderna.

## Arquitetura

O sistema foi construído utilizando o padrão MVC (Model-View-Controller), integrando as rotas do Node.js para gerenciar as solicitações e respostas da aplicação.

## Telas do projeto:
Nesta tela, você pode visualizar uma tabela contendo os dados dos pacientes. Há opções para filtrar os exames por data, permitindo que veja os exames agendados entre hoje e os próximos 10 dias. Além disso, é possível filtrar os resultados pelo nome do paciente, facilitando a busca específica.

<img src="https://github.com/user-attachments/assets/47a43239-cd66-4edd-8fc8-d83f5de3212c" alt="Tela do Sistema de Agendamento" width="500">

Esta tela exibe um exemplo de filtro aplicado pela data. Aqui, você também encontra os botões de ação do CRUD (Create, Read, Update, Delete). Ao lado desses botões, há um botão verde que permite alterar o status de um exame para "aguardando", indicando que o paciente está na espera para a realização do exame. No final da tabela, há botões para visualizar os exames finalizados e para adicionar um novo cadastro.

<img src="https://github.com/user-attachments/assets/b957fa66-3533-4216-a117-ef57bf578b57" alt="Tela do Sistema de Agendamento" width="500">

Esta tela exibe o formulário de cadastro de pacientes, que serve de base também para os formulários de visualização e edição. O design é consistente, garantindo uma experiência de usuário fluida em todo o sistema.

<img src="https://github.com/user-attachments/assets/31b16c58-6b48-4907-acc3-57ee713a6567" alt="Formulário do sistema" width="250">

Nesta tela, é possível visualizar os exames que foram concluídos. Existe a opção de reabrir um exame por meio do botão de visualização no CRUD, permitindo que qualquer correção ou atualização necessária seja feita de forma eficiente. 

<img src="https://github.com/user-attachments/assets/511f4899-57dc-49b9-9d76-8c9b354806c1" alt="Formulário do sistema" width="500">

##
O projeto foi avaliado e validado pela gestão dos setores envolvidos e já está em pleno funcionamento, contribuindo para a eficiência dos agendamentos de exames.

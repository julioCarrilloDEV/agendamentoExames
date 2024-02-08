// Lógica para criar a tabela e preencher os próximos 7 dias
const diasSemana = ['DOM','SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
const linhaDiasSemana = document.getElementById('linhaDiasSemana');

for (let i = 0; i < 10; i++) {
    const data = moment().add(i, 'days');
    const diaSemana = diasSemana[data.day()];

    const celula = document.createElement('td');
    celula.className = 'bg-secondary text-white text-center clicavel border-end';
    celula.innerHTML = `${diaSemana}<br>${data.format('DD/MM')}`;

    linhaDiasSemana.appendChild(celula);
}

// Declare uma variável para armazenar a célula clicada anteriormente
let celulaAnterior = null;
//Evento de clique nas células 
document.getElementById('tabelaDinamica').addEventListener('click', function (event) {
    const celulaClicada = event.target;
     // Verifique se a célula clicada é uma célula da tabela
     if (celulaClicada.tagName === 'TD') {
        // Remove a classe de destaque da célula anterior, se existir
        if (celulaAnterior) {
            celulaAnterior.classList.remove('bg-dark');
            celulaAnterior.classList.add('bg-secondary');
        }     
        // Adicione a classe de destaque à célula clicada
        celulaClicada.classList.remove('bg-secondary');
        celulaClicada.classList.add('bg-dark');
        // Armazene a referência para a célula clicada atualmente
        celulaAnterior = celulaClicada;
        // Obtenha a data correspondente à célula clicada
        const dataClicada = moment().add(celulaClicada.cellIndex, 'days');
        const timestampUnix = dataClicada.unix();  // Obtém o timestamp Unix        
        filtrarConsultasPorData(timestampUnix);
    }
});

//Filtrar a Lista de Consultas
function filtrarConsultasPorData(dataSelecionada) {
     // Limpa a tabela
     var tabela = document.getElementById('tabelaConsultas');
     tabela.innerHTML = '';

     // Faz uma requisição AJAX para obter as consultas por data
     fetch('/consultas/' + dataSelecionada)
         .then(response => response.json())
         .then(data => {
             // Obtém o tbody existente
             var tbody = document.getElementById('tabelaConsultas');
             data.forEach(consulta => {
                 var tr = document.createElement('tr'); 
                // Crie um botão de edição dinamicamente
                var botaoEdicao = document.createElement('button');
                botaoEdicao.setAttribute('type', 'button');
                botaoEdicao.setAttribute('class', 'btn btn-warning btn-sm icones');
                consultaString = JSON.stringify(consulta);
                 // Defina um atributo de dados com o JSON original
                botaoEdicao.setAttribute('data-json', consultaString);
                // Defina o evento onclick para chamar a função com o JSON armazenado no atributo de dados
                botaoEdicao.onclick = function() {
                    abrirModalEdicao2(JSON.parse(this.getAttribute('data-json')));
                };
                // Adicione o ícone ao botão
                botaoEdicao.innerHTML = '<i class="bi bi-pencil"></i>';
                
                // Preencha as células da linha conforme necessário
                tr.innerHTML = `
                <td>${consulta.id}</td>
                <td>${consulta.nomePaciente}</td>
                <!-- <td>${moment(consulta.dataAbertura).format('DD/MM/YYYY HH:mm')}</td> -->
                <td>${consulta.convenio}</td>
                <td>${consulta.tipoExame}</td>
                <td>${moment(consulta.dataExame).format('DD/MM/YYYY HH:mm')}</td>
                <td class="linha-status">${consulta.status}</td>
                <td id="botoes">
                    <button type="button" class="btn btn-success btn-sm check-in" onclick="checkIn(${consulta.id})">
                        <i class="bi bi-check2-square"></i>
                    </button>
                    <button type="button" class="btn btn-primary btn-sm icones" data-bs-toggle="modal" data-bs-target="#visualizarModal">
                    <i class="bi bi-eye"></i>
                    </button>
                    <button type="button" class="btn btn-danger btn-sm icones" data-bs-toggle="modal" data-bs-target="#confirmarExclusaoModal" onclick="prepararExclusao(${consulta.id})">
                    <i class="bi bi-trash"></i>
                    </button>
                
                </td>
                `;
                
                // Selecione a célula onde deseja inserir o botão de edição
                var botoesCell = tr.querySelector('#botoes');
                // Adicione o botão de edição à célula
                botoesCell.appendChild(botaoEdicao);
                tbody.appendChild(tr);            
             });
             // Após preencher a tabela, atualize as cores das linhas
                atualizarCoresLinhas();
         })
         .catch(error => {
             console.error('Erro na requisição:', error);
         });
 }

 function atualizarCoresLinhas() {
    // Seleciona todas as linhas da tabela
    var linhasStatus = document.querySelectorAll(".linha-status");
    // Itera sobre cada linha
    linhasStatus.forEach(function(linha) {
        var linhaGeral = linha.parentNode;
        // Verifica se o status da linha é "Aguardando"
        if (linha.innerText.includes("Aguardando")) { 
            // Adiciona a classe de cor de fundo
            linhaGeral.classList.add("table-success"); // Adicione a classe para a cor de fundo verde
        }else if(linha.innerText.includes("Finalizado")){
            linhaGeral.classList.add("table-secondary");
            linhaGeral.classList.add("opacity-50");
        }else {
            // Se não estiver aguardando, remova a classe de cor de fundo
            linhaGeral.classList.remove("table-success");
        }
    });
}
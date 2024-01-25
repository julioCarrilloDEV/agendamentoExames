// Lógica para criar a tabela e preencher os próximos 7 dias
const diasSemana = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'];
const linhaDiasSemana = document.getElementById('linhaDiasSemana');

for (let i = 0; i < 7; i++) {
    const data = moment().add(i, 'days');
    const diaSemana = diasSemana[data.day()];

    const celula = document.createElement('td');
    celula.className = 'bg-secondary text-white text-center';
    celula.innerHTML = `${diaSemana}<br>${data.format('DD/MM')}`;

    linhaDiasSemana.appendChild(celula);
}


//Evento de clique nas células 
document.getElementById('tabelaDinamica').addEventListener('click', function (event) {
    const celulaClicada = event.target;

    // Verifique se a célula clicada é uma célula da tabela
    if (celulaClicada.tagName === 'TD') {
        // Obtenha a data correspondente à célula clicada
        const dataClicada = moment().add(celulaClicada.cellIndex, 'days');
        const dataFormatada = dataClicada.format('DD/MM/YYYY')
        const timestampUnix = dataClicada.unix();  // Obtém o timestamp Unix
        console.log('Data formatada:', dataFormatada);
        console.log('Data em timestamp', timestampUnix)
        filtrarConsultasPorData(timestampUnix);
    }
});



//Filtrar a Lista de Consultas
function filtrarConsultasPorData(dataSelecionada) {
    console.log('Data selecionada:', dataSelecionada);
     // Limpa a tabela
     var tabela = document.getElementById('tabelaConsultas');
     tabela.innerHTML = '';

     // Faz uma requisição AJAX para obter as consultas por data
     fetch('/consultas/' + dataSelecionada)
         .then(response => response.json())
         .then(data => {
             // Preenche a tabela com as consultas obtidas
             var tbody = document.createElement('tbody');
             data.forEach(consulta => {
                 var tr = document.createElement('tr');
                 // Preencha as células da linha conforme necessário
                 // ...
                 tr.innerHTML = `
                                 <td>${consulta.id}</td>
                                 <td>${consulta.nomePaciente}</td>
                                 <td>${moment(consulta.dataAbertura).format('DD/MM/YYYY HH:mm')}</td>
                                 <td>${consulta.convenio}</td>
                                 <td>${consulta.tipoExame}</td>
                                 <td>${moment(consulta.dataExame).format('DD/MM/YYYY HH:mm')}</td>
                                 <td>${consulta.status}</td>
                                 `;
                 tbody.appendChild(tr);
             });
             tabela.appendChild(tbody);
         })
         .catch(error => {
             console.error('Erro na requisição:', error);
         });
 }



//Atualizar a Página com Resultados
function atualizarPaginaComResultados(consultasFiltradas) {
    // Implemente a lógica para atualizar a página com os resultados
    // Pode ser renderizando a tabela de consultas ou qualquer outra coisa
    console.log('Consultas filtradas:', consultasFiltradas);
}

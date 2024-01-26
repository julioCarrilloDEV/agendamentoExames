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
                
                 // Preencha as células da linha conforme necessário
                 tr.innerHTML = `
                                 <td>${consulta.id}</td>
                                 <td>${consulta.nomePaciente}</td>
                                 <td>${moment(consulta.dataAbertura).format('DD/MM/YYYY HH:mm')}</td>
                                 <td>${consulta.convenio}</td>
                                 <td>${consulta.tipoExame}</td>
                                 <td>${moment(consulta.dataExame).format('DD/MM/YYYY HH:mm')}</td>
                                 <td>${consulta.status}</td>
                                 <td>
                                    <button type="button" class="btn btn-primary btn-sm icones" data-bs-toggle="modal" data-bs-target="#visualizarModal">
                                        <i class="bi bi-eye"></i>
                                    </button>
                                    <button type="button" class="btn btn-warning btn-sm icones" onclick="abrirModalEdicao('${JSON.stringify(consulta)}')">
                                        <i class="bi bi-pencil"></i>
                                    </button>
                                    <button type="button" class="btn btn-danger btn-sm icones" data-bs-toggle="modal" data-bs-target="#confirmarExclusaoModal" onclick="prepararExclusao(${consulta.id})">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                 </td>
                                 `;
                    
                 tbody.appendChild(tr);
             });
             
         })
         .catch(error => {
             console.error('Erro na requisição:', error);
         });
 }

 /*<button type="button" class="btn btn-warning btn-sm icones" onclick="abrirModalEdicao({" id":1,"nomepaciente":"julio cesar carrillo ferreira","dataabertura":"2024-01-25t17:00:00.000z","convenio":"unimed lins","tipoexame":"tomografia","dataexame":"2024-01-31t15:00:00.000z","numguia":12345678,"status":"em análise"})"> */

/* <button type="button" class="btn btn-warning btn-sm icones" onclick="abrirModalEdicao('{&quot;id&quot;:1,&quot;nomePaciente&quot;:&quot;Julio Cesar Carrillo Ferreira&quot;,&quot;dataAbertura&quot;:&quot;2024-01-25T17:00:00.000Z&quot;,&quot;convenio&quot;:&quot;Unimed Lins&quot;,&quot;tipoExame&quot;:&quot;Tomografia&quot;,&quot;dataExame&quot;:&quot;2024-01-31T15:00:00.000Z&quot;,&quot;numGuia&quot;:12345678,&quot;status&quot;:&quot;Em Análise&quot;}')"></button> */

//Atualizar a Página com Resultados
function atualizarPaginaComResultados(consultasFiltradas) {
    // Implemente a lógica para atualizar a página com os resultados
    // Pode ser renderizando a tabela de consultas ou qualquer outra coisa
    console.log('Consultas filtradas:', consultasFiltradas);
}

function abrirModalVisu(consulta) {
    var consulta = JSON.parse(consulta); // Converte a string JSON para objeto
    console.log('Dados do paciente:', consulta);
    preencherFormularioVisu(consulta);
    abrirModal('visualizarModal');
}
function abrirModalVisu2(consulta) {
    console.log('Dados do paciente:', consulta);
    preencherFormularioVisu(consulta);
    abrirModal('visualizarModal');
}

function preencherFormularioVisu(consulta) {
    document.getElementById('nomePacienteVisu').value = consulta.nomePaciente;
    document.getElementById('telefoneVisu').value = consulta.telefone;
    document.getElementById('dataAberturaVisu').value = moment(consulta.dataAbertura).format('YYYY-MM-DDTHH:mm'); 
    document.getElementById('convenioVisu').value = consulta.convenio;
    document.getElementById('tipoExameVisu').value = consulta.tipoExame;
    document.getElementById('dataExameVisu').value = moment(consulta.dataExame).format('YYYY-MM-DDTHH:mm');
    document.getElementById('numGuiaVisu').value = consulta.numGuia;
    document.getElementById('statusVisu').value = consulta.status;
    document.getElementById('sedacaoVisu').checked = consulta.sedacao === true; // Verifica se 'sedacao' é true, e marca o checkbox
    document.getElementById('idVisu').value = consulta.id;
}

// Função para abrir o modal por ID
function abrirModal(modalId) {
    console.log('Abrindo modal:', modalId);
    var modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}

// Função para fechar o modal por ID
function fecharModal(modalId) {
    var modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.hide();
}
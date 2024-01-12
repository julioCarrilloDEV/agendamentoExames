function abrirModalEdicao(consulta) {
    console.log('Função abrirModalEdicao chamada');
    var consulta = JSON.parse(consulta); // Converte a string JSON para objeto
    console.log('Dados do paciente:', consulta);
    preencherFormularioEdicao(consulta);
    abrirModal('editarModal');
}

function preencherFormularioEdicao(consulta) {
    document.getElementById('nomePacienteEdit').value = consulta.nomePaciente;
    document.getElementById('dataAberturaEdit').value = consulta.dataAbertura;
    document.getElementById('convenioEdit').value = consulta.convenio;
    document.getElementById('tipoExameEdit').value = consulta.tipoExame;
    document.getElementById('dataExameEdit').value = consulta.dataExame;
    document.getElementById('numGuiaEdit').value = consulta.numGuia;
    document.getElementById('statusEdit').value = consulta.status;
    document.getElementById('idEdit').value = consulta.id;
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

function construirURL() {
    // Obtenha o valor do campo oculto idEdit
    var consultaId = document.getElementById('idEdit').value;

    // Construa a URL com base no ID da consulta
    var url = '/' + consultaId + '/editar';

    // Defina a ação do formulário como a URL construída
    document.getElementById('formularioEdicao').action = url;
}

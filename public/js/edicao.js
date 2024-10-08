function abrirModalEdicao(consulta) {   
    var consulta = JSON.parse(consulta); // Converte a string JSON para objeto
    preencherFormularioEdicao(consulta);
    abrirModal('editarModal');
}
function abrirModalEdicao2(consulta) {
    preencherFormularioEdicao(consulta);
    abrirModal('editarModal');
}

function preencherFormularioEdicao(consulta) {
    document.getElementById('nomePacienteEdit').value = consulta.nomePaciente;
    document.getElementById('telefoneEdit').value = consulta.telefone;
    document.getElementById('dataAberturaEdit').value = moment(consulta.dataAbertura).format('YYYY-MM-DDTHH:mm'); 
    document.getElementById('convenioEdit').value = consulta.convenio;
    document.getElementById('tipoExameEdit').value = consulta.tipoExame;
    document.getElementById('dataExameEdit').value = moment(consulta.dataExame).format('YYYY-MM-DDTHH:mm');
    document.getElementById('numGuiaEdit').value = consulta.numGuia;
    document.getElementById('statusEdit').value = consulta.status;
    document.getElementById('sedacaoEdit').checked = consulta.sedacao === true; // Verifica se 'sedacao' é true, e marca o checkbox
    document.getElementById('idEdit').value = consulta.id;
}

// Função para abrir o modal por ID
function abrirModal(modalId) {
    var modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}

// Função para fechar o modal por ID
function fecharModal(modalId) {
    var modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.hide();
}

function enviarEdicao() {
    
    var formularioEdit = document.getElementById('formularioEdicao');

    // Verifique se o formulário é válido
    if (!formularioEdit.checkValidity()) {
        formularioEdit.reportValidity(); // Mostra mensagens de erro
        return; // Impede o envio se o formulário não for válido
    }

    // Se o formulário for válido, proceda com o envio
    var formData = new FormData(formularioEdit);
    // Adicione o valor da checkbox "Sedação" manualmente ao formData, visto que ele não pega corretamente o valor de checkbox
    var sedacao = document.getElementById('sedacaoEdit').checked ? 1 : 0;
    formData.append('sedacao', sedacao);

    // Converta FormData para um objeto JSON
    var jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Converta o objeto JSON para uma string JSON
    var jsonString = JSON.stringify(jsonData);

    // Adicione um log para verificar a string JSON
    console.log('String JSON resultante:', jsonString);

    // Obtenha o valor do campo oculto idEdit
    var consultaId = document.getElementById('idEdit').value;

    // Construa a URL com base no ID da consulta
    var url = '/editar/' + consultaId;

    // Enviar uma requisição PUT usando AJAX
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' // Indique que estamos enviando JSON
        },
        body: jsonString
   })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);

        // Fechar o modal
        var editarModal = new bootstrap.Modal(document.getElementById('editarModal'));
        editarModal.hide();

        // Recarregar a página
        window.location.reload(true);  // O true serve para forçar o recarregamento do cache

    })
    .catch(error => {
        console.error('Erro:', error);
    });
}
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
    document.getElementById('dataAberturaEdit').value = moment(consulta.dataAbertura).format('YYYY-MM-DDTHH:mm'); 
    document.getElementById('convenioEdit').value = consulta.convenio;
    document.getElementById('tipoExameEdit').value = consulta.tipoExame;
    document.getElementById('dataExameEdit').value = moment(consulta.dataExame).format('YYYY-MM-DDTHH:mm');
    document.getElementById('numGuiaEdit').value = consulta.numGuia;
    document.getElementById('statusEdit').value = consulta.status;
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
    // Obtenha os dados do formulário
    var formData = new FormData(document.getElementById('formularioEdicao'));
    console.log('Valores do formulário enviados: ', formData)

    // Formate as datas antes de enviar
    var dataAbertura = formData.get('dataAberturaEdit');
    var dataExame = formData.get('dataExameEdit');

    console.log('Valores data de abertura: ', dataAbertura);
    console.log('Valores data de exame: ', dataExame);

 /*   if (dataAbertura) {
        formData.set('dataAberturaEdit', moment(dataAbertura).format('YYYY-MM-DDTHH:mm'));
    }

    if (dataExame) {
        formData.set('dataExameEdit', moment(dataExame).format('YYYY-MM-DDTHH:mm'));
    } */


    // Converta FormData para um objeto JSON
   /* var jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });*/

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
        body: JSON.stringify(Object.fromEntries(formData))
        //body: JSON.stringify(jsonData) // Converta o objeto JSON para uma string JSON
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
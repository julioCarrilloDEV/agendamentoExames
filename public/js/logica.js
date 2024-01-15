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

function enviarEdicao() {
    // Obtenha os dados do formulário
    var formData = new FormData(document.getElementById('formularioEdicao'));

    // Converta FormData para um objeto JSON
    var jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

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
        body: JSON.stringify(jsonData) // Converta o objeto JSON para uma string JSON
   })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        // Adicione aqui qualquer lógica adicional após a edição bem-sucedida
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

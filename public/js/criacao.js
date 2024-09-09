function enviarFormularioAdd() {
    // Obtenha o formulário
    var formulario = document.getElementById('formularioAdd');
    
    // Verifique se o formulário é válido
    if (!formulario.checkValidity()) {
        formulario.reportValidity(); // Mostra mensagens de erro
        return; // Impede o envio se o formulário não for válido
    }
    
    // Se o formulário for válido, proceda com o envio
    var formData = new FormData(formulario);
    // Adicione o valor da checkbox "Sedação" manualmente ao formData, visto que ele não pega corretamente o valor de checkbox
    var sedacao = document.getElementById('sedacao').checked ? 1 : 0;
    formData.append('sedacao', sedacao);
    // Enviar uma requisição POST usando AJAX
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Indique que estamos enviando JSON
        },
        body: JSON.stringify(formData) // Converta o objeto JSON para uma string JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        // Fechar o modal após o envio do formulário
        var modal = new bootstrap.Modal(document.getElementById('novoCadastro'));
        modal.hide();

        // Recarregar a página após o envio do formulário
        window.location.reload(true);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

//Função para pré preencher o campo Tipo Exame com o valor 'Tomografia'
document.addEventListener("DOMContentLoaded", function() {
    // Localize o campo de entrada do tipo de exame
    var tipoExameInput = document.getElementById('tipoExame');
    // Defina o valor do campo de entrada do tipo de exame como 'Tomografia'
    tipoExameInput.value = 'Tomografia';
});

//Função para pré preencher o campo Data de abertura com a data e a hora atual
document.addEventListener("DOMContentLoaded", function() {
    // Uso do Moment.js para obter a data e hora atuais no fuso horário local
    var dataAtualLocal = moment();
    // Formate a data e hora para o formato desejado (por exemplo, YYYY-MM-DDTHH:MM)
    var dataFormatada = dataAtualLocal.format('YYYY-MM-DDTHH:mm');
    // Preencha o campo de entrada da data de abertura com a data e hora formatada
    document.getElementById('dataAbertura').value = dataFormatada;
});

//Função para pré preecher o campo Status com o valor Em aberto
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('status').value = 'Em aberto';
})
function enviarFormulario() {
    // Obtenha os dados do formulário
    var formData = new FormData(document.getElementById('seuFormularioId'));

    // Enviar uma requisição POST usando AJAX
    fetch('/', {
        method: 'POST',
        body: formData
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
var consultaParaExcluir;

function prepararExclusao(consultaId) {
    consultaParaExcluir = consultaId;
}

document.getElementById('confirmarExclusaoBtn').addEventListener('click', function() {
    if (consultaParaExcluir) {
        // Chame a função de exclusão aqui, passando consultaParaExcluir como parâmetro
        console.log('Consulta para excluir:', consultaParaExcluir);
        excluirConsulta(consultaParaExcluir);
    }
});


function excluirConsulta(consultaId) {
    fetch('/' + consultaId, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Consulta excluída:', data);
    })
    .catch(error => {
        console.error('Erro ao excluir consulta:', error);
    });
}

function confirmarExclusao() {
    // Fechar o modal após a confirmação
    var confirmarExclusaoModal = new bootstrap.Modal(document.getElementById('confirmarExclusaoModal'));
    confirmarExclusaoModal.hide();

    // Recarregar a página após o modal ser fechado
    window.location.reload(true);
}

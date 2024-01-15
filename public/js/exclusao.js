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
    .then(response => {
        if (response.ok) {
            // Exclusão bem-sucedida, recarregue a página ou atualize a tabela
            location.reload();
        } else {
            console.error('Erro ao excluir consulta:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Erro ao excluir consulta:', error);
    });
}
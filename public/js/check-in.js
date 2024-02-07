function checkIn(consultaId) {
    // Fazer uma requisição AJAX para atualizar o status no banco de dados
    fetch(`/checkin/${consultaId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'Aguardando' }) // Envie o novo valor do status
    })
    .then(response => {
        if (response.ok) {
            // Recarregar a página após a atualização bem-sucedida
            window.location.reload();
        } else {
            console.error('Erro ao realizar check-in:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Erro ao realizar check-in:', error);
    });
}




function finalizarExame(){
    console.log('ID da consulta:', consultaId);
    // Obtenha o valor do campo oculto que contém o ID da consulta
    var consultaId = document.getElementById('idVisu').value;
    fetch(`/finalizar/${consultaId}`, {
        method: 'PUT',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Finalizado'}) //Altera o valor de status para finalizado
    })
    .then(response => {
        if(response.ok){
            window.location.reload();
        }else{
            console.error('Erro ao alterar o valor de status: ', response.statusText);
        }
    })
    .catch(error => {
        console.error('Erro ao alterar o valor do status: ', error);
    });
}
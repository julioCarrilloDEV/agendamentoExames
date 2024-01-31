function pesquisar(termoPesquisa) {
    // Obtém todas as linhas da tabela
    var linhasTabela = document.querySelectorAll('#tabelaConsultas tr');
    console.log(linhasTabela)
    // Itera sobre as linhas e exibe ou oculta conforme a pesquisa
    linhasTabela.forEach(function (linha) {
        var nomePaciente = linha.querySelector('td:nth-child(2)').textContent.toLowerCase();

        // Verifica se o termo de pesquisa está presente no nome do paciente
        if (nomePaciente.includes(termoPesquisa.toLowerCase())) {
            linha.style.display = ''; // Exibe a linha
        } else {
            linha.style.display = 'none'; // Oculta a linha
        }
    });
}
// Função para ordenar a tabela pela data do exame
function ordenarTabelaPorDataExame() {
    const tbody = document.querySelector('#tabelaConsultas tbody');
    const linhas = Array.from(tbody.querySelectorAll('tr'));

    // Função de comparação para ordenar as linhas com base na data do exame
    function compararDatas(a, b) {
        const dataA = new Date(a.dataset.dataExame);
        const dataB = new Date(b.dataset.dataExame);
        return dataA - dataB;
    }

    // Armazena as linhas com suas respectivas datas de exame
    const linhasComDatas = linhas.map(linha => ({
        linha,
        dataExame: linha.dataset.dataExame
    }));

    // Ordena as linhas com base na data do exame
    linhasComDatas.sort(compararDatas);

    // Reorganiza as linhas da tabela de acordo com a ordem das datas
    linhasComDatas.forEach(item => tbody.appendChild(item.linha));
}



// Exemplo para preencher os próximos 7 dias
const diasSemana = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'];
const linhaDiasSemana = document.getElementById('linhaDiasSemana');

for (let i = 0; i < 7; i++) {
    const data = moment().add(i, 'days');
    const diaSemana = diasSemana[data.day()];

    const celula = document.createElement('td');
    celula.className = 'bg-secondary text-white text-center';
    celula.innerHTML = `${diaSemana}<br>${data.format('DD/MM')}`;

    linhaDiasSemana.appendChild(celula);
}
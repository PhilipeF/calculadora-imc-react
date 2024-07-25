const calcularImc = (peso, altura) => {

    if (!peso || !altura) {
        alert('Por favor, insira valores validos para peso e altura');
        return
    }

    const alturaNumero = parseFloat(altura.replace(',', '.'));
    const pesoNumero = parseFloat(peso);

    const imc = pesoNumero / (alturaNumero ** 2)
    let descricao = ''

    if (imc < 18.5) {
        descricao = 'Peso abaixo do normal';
    } else if (imc >= 18.5 && imc <= 24.9) {
        descricao = 'Peso considerado na faixa saudável';
    } else if (imc >= 25 && imc <= 29.9) {
        descricao = 'Peso na faixa sobre peso';
    } else if (imc >= 30 && imc <= 39.9) {
        descricao = 'Peso na faixa da obesidade';
    } else {
        descricao = 'Peso na faixa da obesidade grau 3';
    }

    return {imc: imc.toFixed(2), descricao}
}

export default calcularImc
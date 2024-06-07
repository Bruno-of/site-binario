function converterDecimalParaBinario() {
    const entradaDecimal = document.getElementById('entradaDecimal').value;
    const resultadoBinario = document.getElementById('resultadoBinario');

    let [parteInteira, parteFracionaria] = entradaDecimal.split('.').map(Number);

    let binarioInteiro = '';
    let binarioFracionario = '';

    // Converte a parte inteira para binário
    if (parteInteira === 0) {
        binarioInteiro = '0';
    } else {
        while (parteInteira > 0) {
            let resto = parteInteira % 2;
            binarioInteiro = resto + binarioInteiro;
            parteInteira = Math.floor(parteInteira / 2);
        }
    }

    // Converte a parte fracionária para binário
    if (parteFracionaria) {
        binarioFracionario = '.';
        let fracionario = parseFloat('0.' + parteFracionaria);
        let contagem = 0; // Limita a precisão para evitar loop infinito
        while (fracionario > 0 && contagem < 20) {
            fracionario *= 2;
            if (fracionario >= 1) {
                binarioFracionario += '1';
                fracionario -= 1;
            } else {
                binarioFracionario += '0';
            }
            contagem++;
        }
    }

    resultadoBinario.innerText = `Binário: ${binarioInteiro}${binarioFracionario}`;
}

function converterBinarioParaDecimal() {
    const entradaBinaria = document.getElementById('entradaBinaria').value;
    const resultadoDecimal = document.getElementById('resultadoDecimal');

    let [parteInteira, parteFracionaria] = entradaBinaria.split('.');

    let decimalInteiro = 0;
    let decimalFracionario = 0;

    // Converte a parte inteira para decimal
    for (let i = 0; i < parteInteira.length; i++) {
        decimalInteiro += parseInt(parteInteira[i], 10) * Math.pow(2, parteInteira.length - 1 - i);
    }

    // Converte a parte fracionária para decimal
    if (parteFracionaria) {
        for (let i = 0; i < parteFracionaria.length; i++) {
            decimalFracionario += parseInt(parteFracionaria[i], 10) * Math.pow(2, -(i + 1));
        }
    }

    let decimal = decimalInteiro + decimalFracionario;
    resultadoDecimal.innerText = `Decimal: ${decimal}`;
}

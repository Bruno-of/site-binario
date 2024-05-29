
// [Bruno]
function converterDecimalParaBinario() {
    // [Bruno] Usei const pra garantir que os valores abaixo não mude
    const entradaDecimal = document.getElementById('entradaDecimal').value;
    const resultadoBinario = document.getElementById('resultadoBinario');

    let numeroDecimal = parseInt(entradaDecimal, 10);
    let binario = "";

    if (numeroDecimal === 0) {
        binario = '0';
    } else {
        // Converte número decimal para binário
        while (numeroDecimal > 0) {
            let resto = numeroDecimal % 2;
            binario = resto + binario;
            numeroDecimal = Math.floor(numeroDecimal / 2);
        }
    }

    resultadoBinario.innerText = `Binário: ${binario}`;
}

function converterBinarioParaDecimal() {
    const entradaBinaria = document.getElementById('entradaBinaria').value;
    const resultadoDecimal = document.getElementById('resultadoDecimal');

    let listaBinaria = entradaBinaria.split('').reverse();
    let soma = 0;

    // Converte número binário para decimal
    for (let i = 0; i < listaBinaria.length; i++) {
        soma += parseInt(listaBinaria[i], 10) * Math.pow(2, i);
    }

    resultadoDecimal.innerText = `Decimal: ${soma}`;
}

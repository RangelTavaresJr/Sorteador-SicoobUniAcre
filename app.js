async function sortear() {
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value);
    const menorValor = Number(document.querySelector('#menorValorInput').value);
    const maiorValor = Number(document.querySelector('#maiorValorInput').value);

    const numerosSorteados = new Set([...document.querySelectorAll('.result-value')].map(div => Number(div.innerText)));

    await contagemRegressiva(5); // 5 segundos de contagem regressiva

    const novosNumeros = [];
    while (novosNumeros.length < totalResultados) {
        const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor;
        if (!numerosSorteados.has(resultado)) {
            numerosSorteados.add(resultado);
            novosNumeros.push(resultado);
        }
    }

    const elementoHTMLResultValues = document.querySelector('.results-values');

    novosNumeros.forEach(resultado => {
        const elementoHTMLDoResultado = document.createElement('div');
        elementoHTMLDoResultado.classList.add('result-value');
        elementoHTMLDoResultado.innerText = resultado;
        elementoHTMLResultValues.append(elementoHTMLDoResultado);
    });
}

function wait(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo);
    });
}

function contagemRegressiva(segundos) {
    return new Promise((resolve) => {
        const overlay = document.querySelector('.countdown-overlay');
        let elementoHTMLCountdown = document.querySelector('.countdown');

        if (!elementoHTMLCountdown) {
            elementoHTMLCountdown = document.createElement('div');
            elementoHTMLCountdown.classList.add('countdown');
            document.body.appendChild(elementoHTMLCountdown);
        }

        overlay.style.display = 'flex';

        const mostrarContador = (contador) => {
            elementoHTMLCountdown.innerText = contador;
            elementoHTMLCountdown.classList.remove('fade');
            void elementoHTMLCountdown.offsetWidth;
            elementoHTMLCountdown.classList.add('fade');
        };

        let contador = segundos;
        mostrarContador(contador);

        const interval = setInterval(() => {
            contador--;
            if (contador >= 0) {
                mostrarContador(contador);
            } else {
                clearInterval(interval);
                overlay.style.display = 'none';
                resolve();
            }
        }, 1000);
    });
}

function limparSorteador() {
    const elementoHTMLResultValues = document.querySelector('.results-values');
    elementoHTMLResultValues.innerHTML = ''; // Limpa os resultados
}

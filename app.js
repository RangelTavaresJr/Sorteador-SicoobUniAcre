async function sortear() {
    // Pegar o total de resultados
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value)

    // Pegar o menor valor
    const menorValor = Number(document.querySelector('#menorValorInput').value)

    // Pegar o maior valor
    const maiorValor = Number(document.querySelector('#maiorValorInput').value)

    for(let j = 0; j < 20; j++) {    
        
        // Limpar resultados antigos no HTML existente
        const elementoHTMLResultValues = document.querySelector('.results-values')
        elementoHTMLResultValues.innerHTML = ''
    
        for(let i = 0; i < totalResultados; i++) {
    
        // Gera um numero aleatório entre o menor e maior valor
        const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor
    
        // Gera um elemento HTML para o resultado
        const elementoHTMLDoResultado = document.createElement('div')
        elementoHTMLDoResultado.classList.add('result-value')
        elementoHTMLDoResultado.innerText = resultado
    
    
    
        // Adicionar o elemento criado dentro do HTML existente
        elementoHTMLResultValues.append(elementoHTMLDoResultado)
        }
        await wait(150)
    }    
}

function wait(tempo){
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}
// Criar um elemento HTML <p> (parágrafo)
p = document.createElement('p')

// Pegar elementos HTML 
numero = document.querySelector('#iNum')
res = document.querySelector('.res')
ls = document.querySelector('#sel')
// Criar um vetor 
vetorNums = []

// Função para adicionar os valores digitados no input
function adicionar() {

    // Condição para que o usuário não deixe o input vazio
    if (numero.value.length > 0) {

        // Criar variável "num" pra converter a variável "numero" para Number 
        let num = Number(numero.value)

        /*
            Condição para o usuário NÃO digitar um número menor que 1 e maior que 100. E também NÃO repita o valor já digitiado anteriormente.
        */
        if ((num >= 1 && num <= 100) && vetorNums.indexOf(num) == -1) {

            // Cria um elemento HTML <option>
            let opt = document.createElement('option')
            
            // Inserir valor digitado no vetor "vetorNums"
            vetorNums.push(num)

            // Adicionar o <option> no <select>
            ls.appendChild(opt)
            
            // Mostrar visualmente o valor adicionado na lista
            opt.text = `Adicionado: ${num}`

            // Limpar parágrafo toda vez que o usuário adicionar mais um valor
            p.innerHTML = ''
            
        } else if (num < 1 || num > 100) {
            alert('O número tem que ser entre 1 à 100.')
        } else {
            alert(`Número "${num}" já está na lista.`)
        }

        numero.focus()

    } else {
        alert('Insira um número.')
    }
}

// Função pra mostrar os valores adicionados anteriormente
function mostrar() {

    // Criar uma variável para somar todos os valores digitados
    let soma = 0

    // Loop for (específico pra vetores) pra ler o vetor
    for (let i in vetorNums) {
        
        // Somar valores e enviar para variável "soma"
        soma += vetorNums[i]

        /* 
            // Condição para pegar o maior e menor valor digitado
            if (vetorNums[i] > vetorNums[0]) {
                
                // Iniciar variável "maiorValor" para pegar o maior número
                maiorValor = vetorNums[i]

            // Condição contrária à anterior
            } else {

                // Iniciar variável menorValor para pegar o maior número
                menorValor = vetorNums[i]
            }
        */
       
        // Operador Ternário para pegar o maior e menor número digitado
        vetorNums[i] > vetorNums[0] ? maiorValor = vetorNums[i] : menorValor = vetorNums[i]
    }

    /*
        Condição para exibir a largura do vetor, o maior e menor valor adicinado, a soma e a média dos valores APENAS quando lista NÃO estiver vazia.
    */
    if (vetorNums.length > 0) {
        res.appendChild(p)
        
        p.innerHTML = `Total de valores: <span style='color:red;'>${vetorNums.length}</span>`
        p.innerHTML += `<br>Maior Valor: <span style='color:red;'>${maiorValor}</span>`
        p.innerHTML += `<br>Menor Valor: <span style='color:red;'>${menorValor}</span>`
        p.innerHTML += `<br>Soma dos valores: <span style='color:red;'>${soma}</span>`
        p.innerHTML += `<br>Média dos valores: <span style='color:red;'>${soma/vetorNums.length}</span>`

    } else {
        alert('Adicione os valores antes de clicar nesse botão.')
    }
}
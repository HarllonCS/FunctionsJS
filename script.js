p = document.createElement('p')

numero = document.querySelector('#iNum')
res = document.querySelector('.res')
ls = document.querySelector('#sel')
vetorNums = []

function adicionar() {
    if (numero.value.length > 0) {

        let num = Number(numero.value)

        if ((num >= 1 && num <= 100) && vetorNums.indexOf(num) == -1) {

            let opt = document.createElement('option')
            
            vetorNums.push(num)

            ls.appendChild(opt)
            
            opt.text = `Adicionado: ${num}`

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

function mostrar() {

    let soma = 0

    for (let i in vetorNums) {
        
        soma += vetorNums[i]

        vetorNums[i] > vetorNums[0] ? maiorValor = vetorNums[i] : menorValor = vetorNums[i]
    }

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
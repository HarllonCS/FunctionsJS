p = document.createElement('p')

numero = document.querySelector('#iNum')
res = document.querySelector('.res')
ls = document.querySelector('#sel')
vetorNums = []

function adicionar() {
    if (numero.value.length > 0) {

        let num = numero.value

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

    let maiorValor = vetorNums[0]
    let menosValor = vetorNums[0]
    
    for (let pos in vetorNums) {
        
        if (vetorNums[pos] > maiorValor) {
            maiorValor = vetorNums[pos]
        } else {
            menosValor = vetorNums[pos]
        }
    }

    if (vetorNums.length > 0) {
        res.appendChild(p)
        
        p.innerHTML = `Total de valores: <span style='color: red;'>${vetorNums.length}<span>`
        p.innerHTML += `<br>Maior Valor: ${maiorValor}`
        p.innerHTML += `<br>Menor Valor: ${menosValor}`

    } else {
        alert('Adicione os valores antes de clicar nesse botão.')
    }
}
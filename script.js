numero = document.querySelector('#iNum')
res = document.querySelector('.res')
lista = document.querySelector('#sel')
vetorNums = []

function adicionar() {
    if (numero.value.length > 0) {

        let num = Number(numero.value)

        if ((num >= 1 && num <= 100) && vetorNums.indexOf(num) == -1) {

            opt = document.createElement('option')
            lista.appendChild(opt)
            
            vetorNums.push(num)
            
            opt.text = `Adicionado: ${num}`

        } else if (num < 1 || num > 100) {
            alert('O número tem que ser entre 1 à 100.')
        } else {
            alert(`Número "${num}" já está na lista`)
        }
    } else {
        alert('Insira um número.')
    }
}

function mostrar(vetorNums) {
    
}
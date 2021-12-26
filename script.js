var num = document.querySelector('#iNum').value
var res = document.querySelector('.res')
var sel = document.querySelector('#sel')
var vetorNums = []

function isNumero(x) {
    if (Number(x) >= 1 && Number(x) <= 100) {
        return true
    } else {
        return false
    }
}

function inSel(x, lista) {
    if (lista.indexOf(Number(x)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if (isNumero(num) && !inSel(num, vetorNums)) {

        alert('Tudo ok, patrão! Arrocha.')
    
    } else if (!isNumero(num)) {
        
        alert(`${num} não é número.`)
    } else {
        alert(`${num} já tá na lista.`)
    }
}
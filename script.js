let num = document.querySelector('#iNum').value
let sel = document.querySelector('#sel')
let vetorNums = []

/*
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
*/

function adicionar() {
    if ((Number(num) >= 1 && Number(num) <= 100) && vetorNums.indexOf(num) != -1) {
        
        alert('Tudo ok!')
    } else {
        
        alert('ERRO')
    }
}
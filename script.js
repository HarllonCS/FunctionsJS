num = document.querySelector('#iNum')
sel = document.querySelector('#sel')
vetorNums = []

function adicionar() {

    let n = num.value

    if (n.length > 0) {

        if ((n >= 1 && n <= 100) && vetorNums.indexOf(n) == -1) {

            vetorNums.push(n)

            opt = document.createElement('option')
            sel.appendChild(opt)
            opt.text = `Adicionado: ${n}`

        } else if (n < 1 || n > 100) {
            alert('O número tem que ser entre 1 à 100.')
        } else {
            alert('Já está na lista')
        }
    } else {
        alert('ERRO')
    }
}
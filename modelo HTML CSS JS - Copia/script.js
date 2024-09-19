window.alert('[Alerta!] Informe um valor inteiro para calular o fatorial')


function calcular() {        
    var valor = document.getElementById('fatorial')
    var val1 = valor.value
    var res = document.getElementById('resultado')

    res.innerHTML += `# ${val1}`
    var val2 = val1

    while(val2 > 1){
        val2 = val2 - 1
        res.innerHTML += ` x ${val2} `
        var fat = val1 * val2
        val1 = fat
    }

    res.innerHTML += ` = ${fat}`
}
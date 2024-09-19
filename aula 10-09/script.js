
function calcular() {

    var val1 = document.getElementById('input1')
    var v1 = Number(val1.value)
    var v2 = v1
    var fat = v1

    parag.innerHTML = `O Calculo fatorial de ${v1} é: <br>`
    parag.innerHTML += ` ${v1}`
    while(v2 > 1){
        v2--
        fat = v1 * v2
        v1 = fat
        
        parag.innerHTML += ` x ${v2}`
    
    }

    parag.innerHTML += `= ${fat}`


}
    
    var section = document.createElement('section')
    document.body.prepend(section)

    var escreva = document.createElement('p')
    escreva.textContent = 'Digite um valor:'
    escreva.style.fontWeight = 'bold'
    escreva.setAttribute('id','inputVal')
    section.appendChild(escreva)

    var inputVal = document.createElement('input')
    inputVal.setAttribute('type', 'number')
    inputVal.setAttribute('id', 'input1')
    inputVal.style.marginLeft = '10px'
    escreva.appendChild(inputVal)

    var btnCalc = document.createElement('input')
    btnCalc.setAttribute('type', 'button')
    btnCalc.setAttribute('value', 'Calcular')
    btnCalc.setAttribute('onclick', 'calcular()')
    btnCalc.style.margin = '10px'
    escreva.appendChild(btnCalc)

    var parag = document.createElement('p')
    parag.textContent = 'Resultado'
    section.appendChild(parag)



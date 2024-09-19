

document.getElementById('calcular').addEventListener('click', function () {

        
    var resImc = document.getElementById('resultadoImc')

    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value  

    if (peso && altura) {

        var imc = peso/(altura*altura)
        resImc.innerHTML = `Sendo sua altura ${altura}m e seu peso ${peso}kg, seu IMC é igual a ${imc}`
    } else {
        // Se NÃO for selecionado um TIPO DE MOVIMENTAÇÃO ou NÃO INFORMAR UM VALOR DE MOVIMENTAÇÃO
        alert("[ERRO!] Preencha os valores corretamente!");
    }
})

document.getElementById('transformar').addEventListener('click', function () {

    var resT = document.getElementById('resultadoTransf')

    const distancia = document.getElementById('distancia').value
    const qualMedida = document.querySelector('input[name="transformar"]:checked')

    if (qualMedida && distancia) { 
        // Conferiu se tem um valor informado para transformar e se o tipo de medida foi selecionado
        
        const opcao = qualMedida.value
        const valor = parseFloat(distancia)
        // Armazenou o valor na variável quando um radio é selecionado

        if (opcao == 'km') {
            // Se o tipo de valor a ser trasnformado for "km"
            window.alert(`[OK!] Trasnformação de valores executada!`)
            var milha = valor
            var km = (milha*0.621371)

            resT.innerHTML = `O resultado da transformação de ${milha} Milhas em Quilometros é igual a ${km}km`

        } else if (opcao == 'milha') {
            // Se o tipo de valor a ser trasnformado for "milha"
            window.alert(`[OK!] Trasnformação de valores executada!`)
            var km = valor
            var milha = (km*1.60934)

            resT.innerHTML = `O resultado da transformação de ${km} Quilometros em Milhas é igual a ${milha}milhas`
        }
    } else {
        // Se NÃO for selecionado um TIPO DE MOVIMENTAÇÃO ou NÃO INFORMAR UM VALOR DE MOVIMENTAÇÃO
        alert("[ERRO!] Preencha os valores e selecione o tipo de trnasofmrção que deseja fazer");
    }
})
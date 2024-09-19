function carregar(){
    //window.alert('Vem vindo ao jogo de Cabo de Guerra!')
}

const jogo = document.getElementById('jogo')
const res = document.getElementById('resultado')

const inicio = document.getElementsByName('vez')


function jogar(){

    if (inicio[0].checked){
        var vez = 0
        var equipe = 'Vermelha'
        // res.innerHTML = 'Vermelho' teste de valor
    }else if(inicio[1].checked){
        var vez = 1
        var equipe = 'Azul'
        // res.innerHTML = 'Azul' teste de valor
    }else{
        res.innerHTML = 'Informe uma equipe para iniciar!'
    }

    // res.innerHTML += ` ${vez}` teste de valor

    jogo.innerHTML = ''

    var corda = document.getElementById('corda')

    corda.innerHTML = '<h3 id="tituloJogo" style="text-align: center;"></h3>'

    corda.innerHTML += '<p style="text-align: center;"><input type="number" name="corda" id="corda"></p><p style="text-align: center;"><input type="button" value="Jogar" id="jogar" onclick="jogar2()"></p>'
    
    var titulo = document.getElementById('tituloJogo')

    titulo.innerHTML = `Informe a força da puxada da equipe ${equipe}`

    function jogar2(){

        
    }
}

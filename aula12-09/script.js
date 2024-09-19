// puxando o campo <p> para javascript
var p = document.getElementById('campo')

let nome = prompt('Informe seu nome:')

let idade = parseInt(prompt('Informe sua idade: '))

window.alert(`Bem vindo ${nome}!`)

p.innerHTML = `O aluno ${nome}, tem ${idade} anos idade.`




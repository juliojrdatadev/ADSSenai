let nota1 = Number(prompt('Digite a nota1:'))
let nota2 = Number(prompt('Digite a nota2:'))
let nota3 = Number(prompt('Digite a nota3:'))

let media = (nota1 + nota2 + nota3) / 3

if(media >= 7){
    alert(`Aluno APROVADO com nota ${media.toFixed(2)}`)
}else{
    alert(`Aluno REPROVADO com nota ${media.toFixed(2)}`)
} fiz alteração
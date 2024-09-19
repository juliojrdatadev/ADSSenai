// Importa pro JS o campos/ids HTML onde vai aparecer o saldo do estoque
const exibirEstoque = document.getElementById('estoque');

// Declara variavel do estoque inicial e valor inicial do estoque
var quantiaEstoque = 0;

// Declara função de atualização de estoque que vai ser executada a cada nova movimentação
function atualizarEstoque() {
    exibirEstoque.innerHTML = `ESTOQUE: ${quantiaEstoque}`;

    if (quantiaEstoque <= 0) { 
        // Se o estoque for menor ou igual a ZERO avisa o usuário para repor
        exibirEstoque.style.color = 'darkred';
        exibirEstoque.innerHTML = `ESTOQUE: ${quantiaEstoque}<br>`

        window.alert(`[ATENÇÃO!] REPONHA O ESTOQUE!`)
    }else{
        exibirEstoque.style.color = 'darkgreen';
        exibirEstoque.innerHTML = `ESTOQUE: ${quantiaEstoque}<br>`
    }
}

// Ao iniciar o programa logo executa a atualização do estoque para conferir e avisar o usuário sobre a necessidade de repor os itens
atualizarEstoque();

document.getElementById('movimentar').addEventListener('click', function () {
    // Pega o valor da movimentação dentro do input number no HTML
    const movimento = document.getElementById('movimento').value;

    // Verifica qual radio está selecionado (REPOR OU RETIRAR) no HTML
    const qualMovimento = document.querySelector('input[name="movimento"]:checked');

    if (qualMovimento && movimento) { 
        // Conferiu se tem um valor informado para movimentação e se o tipo de movimento foi selecionado
        
        const opcao = qualMovimento.value;
        const quantiaMovimento = parseFloat(movimento);
        // Armazenou o valor na variável quando um radio é selecionado

        if (opcao == 'repor') {
            // Se o tipo de movimentação for "repor" vai apenas somar os itnens e atualizar o estoque
            quantiaEstoque = quantiaEstoque + quantiaMovimento;            
            window.alert(`[OK!] MOVIMENTAÇÃO DE ESTOQUE REALIZADA!`)
            atualizarEstoque();
        } else if (opcao == 'retirar') {
            // Se o tipo de movimentação for "retirar" vai validar algumas informações antes de executar a operação...
            if (quantiaMovimento > quantiaEstoque) {
                // Se a quantia de RETIRADA for MAIOR que o ESTOQUE...
                window.alert(`[ERRO!] RETIRDA MAIOR QUE O ESTOQUE!`)
                atualizarEstoque();
            } else if (quantiaMovimento < quantiaEstoque) {
                // Se a quantia de RETIRADA for MENOR que o ESTOQUE...
                quantiaEstoque = quantiaEstoque - quantiaMovimento;
                window.alert(`[OK!] MOVIMENTAÇÃO DE ESTOQUE REALIZADA!`)
                atualizarEstoque();
            } else {
                // Se a quantia de RETIRADA for IGUAL ao ESTOQUE...
                quantiaEstoque = quantiaEstoque - quantiaMovimento;
                window.alert(`[ATENÇÃO!] ESTOQUE FOI ZERADO,...`)
                atualizarEstoque();
            }
        }
    } else {
        // Se NÃO for selecionado um TIPO DE MOVIMENTAÇÃO ou NÃO INFORMAR UM VALOR DE MOVIMENTAÇÃO
        alert("[ERRO!] SELECIONE UM MOVIMENTO DE ESTOQUE!");
    }
})

/*uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado*/

let sair = false
do {
    let operacao = ''
    let validate = false
    do {
        validate = false
        let op = parseInt(prompt("1: Soma \n2: Subtração \n3: Multiplicação \n4: Divisão \n0: Sair \nSelecione umas das opções: "))
        switch (op) {
            case 1:
                validate = true
                operacao = '+'
                break;
            
            case 2:
                validate = true
                operacao = '-'
                break;
    
            case 3:
                validate = true
                operacao = '*'
                break;
    
            case 4:
                validate = true
                operacao = '/'
                break;
    
            case 0:
                validate = true
                sair = true
                break;
        
            default:
                alert("Essa opção não existe")
                break;
        }
    } while (!validate);

    if (!sair) {
        let result = 0

        let num1 = Number(prompt(`Digite o primeiro numero para a operação ${operacao}: `))
        let num2 = Number(prompt(`Digite o segundo numero da operação ${num1} ${operacao}: `))

        result = eval(num1 + operacao + num2)

        alert(`Resultado: ${result}`)
    }
} while (!sair)
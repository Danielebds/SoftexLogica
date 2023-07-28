/*Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- trator; 
- moto; 
- bicicleta. 

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.*/

alert("Escolha um meio de transporte entre esses: Trator, Moto ou Bicicleta.")

let terrestre = prompt("É terrestre? Sim OU Não")

if (terrestre == "Sim") {
    let cabeApenasUmaPessoa = prompt("Cabe apenas uma pessoa?  Sim OU Não")

    if (cabeApenasUmaPessoa == "Sim") {
        if (prompt("Tem pedal? Sim OU Não") == "Sim") {
            alert("BICICLETA")
        }
    } else if (cabeApenasUmaPessoa == "Não") {
        let ePesado = prompt("É pesado?  Sim OU Não")

        if (ePesado == "Sim") {
            alert("TRATOR")
        } else if (ePesado == "Não") {
            if (prompt("Usa capacete?  Sim OU Não") == "Sim") {
                alert("MOTO")
            }
        }
    }   
}
/*Na tabela em anexo, encontramos dados de 4 jogadores de um game que contemplam os pontos e moedas obtidos durante as partidas e se conseguiram lutar ou não com o chefe.

Baseado nos dados desses jogadores, foram construídas algumas expressões. Avalie cada expressão abaixo, observando as condições de cada jogador, descrito na tabela acima. Marque com V( Verdadeiro) ou F(Falso) o resultado de cada expressão.

Dica: Lembre-se de substituir as variáveis "pontos", "moedas" e "enfrentou_chefe" pelos valores correspondentes para cada jogador.

Expressões:
(  )Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)
(   )Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)
(   ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)
(   ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não)*/


/*jogadores       pontos        moedas         enfrentou_chefe
jogador 1         120           15             Sim 
jogador 2         99            200            Não
jogador 3         100           5              Sim
jogador 4         101           4              Não */


let jgd1_pontos = 120
let jgd1_moedas = 15
let jgd1_enfrentrou_chefe = true
 
if ((jgd1_pontos >= 100) && (jgd1_moedas>= 5) && (jgd1_enfrentrou_chefe == true)) {
    console.log("Jogador 1 Verdadeiro")
} else {
    console.log("Jogador 1 Falso")
}



let jgd2_pontos = 99
let jgd2_moedas = 200
let jgd2_enfrentrou_chefe = false
 
if ((jgd2_pontos >= 100) && (jgd2_moedas >= 5) && (jgd2_enfrentrou_chefe == false)) {
    console.log("Jogador 2 Verdadeiro")
} else {
    console.log("Jogador 2 Falso")
}


let jgd3_pontos = 100
let jgd3_moedas = 5
let jgd3_enfrentrou_chefe = true
 
if ((jgd3_pontos < 100) || (jgd3_moedas < 5) ||(jgd3_enfrentrou_chefe == true)) {
    console.log("Jogador 3 Verdadeiro")
} else {
    console.log("Jogador 3 Falso")
}

let jgd4_pontos = 101
let jgd4_moedas = 4
let jgd4_enfrentrou_chefe = false
 
if ((jgd4_pontos != 100) || (jgd4_moedas != 5) || !(jgd4_enfrentrou_chefe == false)) {
    console.log("Jogador 4 Verdadeiro")
} else {
    console.log("Jogador 4 Falso")
}


//RESULTADO 

/*  Jogador 1 Verdadeiro
    Jogador 2 Falso
    Jogador 3 Verdadeiro
    Jogador 4 Verdadeiro */
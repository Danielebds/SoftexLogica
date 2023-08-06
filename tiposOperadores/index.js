const nomeAluno = prompt("Aluno(a) digite seu nome:")

const nota1 = parseFloat(prompt("Digite a primeira nota"))
const nota2 = parseFloat(prompt("Digite a segunda nota"))
const faltas = parseInt(prompt("Digite quantidade faltas: "))

const media = nota1 + nota2 / 2

if (media < 7) {
    alert(`-- ${nomeAluno} --está reprovado por média.`);
  } else if (faltas > 3) {
    alert(`-- ${nomeAluno} -- está reprovado por faltas.`);
  } else {
    alert(`-- ${nomeAluno} -- está aprovado.`);
  }


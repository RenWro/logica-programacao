//console.log ('Olá Console!');

//document.write ('Olá Documento!');

//window.alert('Olá, Janela!');


//Lógica de programação 041023
//Problema: obter 3 notas de um aluno, calcular média, exibir média e exibir a situação do aluno aprovado, em exame ou reprovado,



function mediaAluno() {
        

    console.log('Inicio do programa');


    //declaração de variáveis
    //const para variáveis que não variam e let para variáveis que  variam (var é sem escopo global) - var (escopo global) - escopo fora do bloco. let (escopo local) - escopo restrito ao bloco. const (não permitindo reatribuição e nem redeclaração) - constante

    const nota1 = parseInt(prompt('Digite a nota 1:'));
    const nota2 = parseInt(prompt('Digite a nota 2:'));
    const nota3 = parseInt(prompt('Digite a nota 3:'));




    //cálculo da média
    const media = (nota1 + nota2 + nota3) / 3;

    console.log('A nota 1 é: ', nota1);
    console.log('A nota 2 é: ', nota2);
    console.log('A nota 3 é: ', nota3);

    console.log ('A média da estudante é: ', media);

        if (media >= 7) {
            console.log('Aprovado');
        }

        else if (media < 7 && media >= 5){
            console.log('Recuperação');
        }

        else {
            console.log('Reprovado');
        }


    console.log ('Fim do programa');

}
// 1 Faça um Programa que mostre a mensagem "Olá mundo" na tela.
alert = prompt("ola mundo")

// 2 Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".
let num = parseInt(prompt("digite um numero"))
alert('o numero informado foi ' + num)

// 3 Faça um Programa que peça dois números e imprima a soma.
let n1 = parseInt(prompt("digite um numero"))
let n2 = parseInt(prompt("digite outro numero"))
let somar = num1 + num2;
alert('a soma dos numeros é ' + soma)

// 4 Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let nota1 = parseInt(prompt("digite a primeira nota"))
let nota2 = parseInt(prompt("digite a segunda nota"))
let nota3 = parseInt(prompt("digite a terceira nota"))
let nota4 = parseInt(prompt("digite a quarta nota"))
let media = parseInt(nota1 + nota2 + nota3 + nota4) 
alert('sua media final é: '+ media/4)

// 5 Faça um Programa que converta metros para centímetros.
let metros = parseInt(prompt( "digite o valor em metros"))
let centimetros = metros * 100;
alert(metros + ' metros equivalem a ' + centimetros + ' centimetros')

// 6 Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
let raio = parseInt(prompt("digite o raio do circulo"))
let área = 3.14 * raio * raio;
alert("a area do ciculo é: " + area)

// 7 Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
let lado = parseInt(prompt("digite o valor do lado do quadrado"))
let area = lado * lado;
let dobro = area * 2;
alert("o dobro da area do qadrado é: " + dobro)

// 8 Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
let salário = parseInt(prompt("digie o valor do salario por hora"))
let horas = parseInt(prompt("digite o numero de horas"))
let salariomes = salario * horas;
alert("o salario do mes é: " + salariomes)

// 9 Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).
let fahrenheit = parseInt(prompt("digite a temperatura em fahrenheit"))
let Celsius = 5 * ((fahrenheit-32) / 9)
alert("a temperatura em celcius é: " + celcius)

// 10 Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
let celcius = parseInt(prompt("digite a temperatura em celcius"))
let fahreinheit = (celcius * 9/5)
alert("a temperatura em faheinheit é: " + fahreinheit)

// 11 Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
//o produto do dobro do primeiro com metade do segundo .
//a soma do triplo do primeiro com o terceiro.
//o terceiro elevado ao cubo.
let num1 = parseInt(prompt("digite um numero inteiro"));
let num2 = parseInt(prompt("digite outro numero inteiro"));
let num3 = parseInt(prompt("digite um numero real"))
let produto = (num1 * 2 ) * (num2 / 2)
let soma = (num1 * 30) + (num3);
let cubo = num3 * num3 * num3;
alert("o produto do dobro do primeiro com metade do segundo é: " + produto)
alert("a soma do triplo do produto do primeiro com o terceiro é: " + soma)
alert("o terceiro elevado ao cubo é: " + cubo)

// 12 Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
let altura = parseInt(prompt("digite a altura"))
let pesoideal = (72.7 * altura) - 58;
alert("o peso ideal é; " + pesoideal)

// 13 Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7*h) - 58
//Para mulheres: (62.1*h) - 44.7
let alturah = parseInt(prompt("digite a altura"))
let alturam = parseInt(prompt("digite a altura"))
let pesoidealh = (72.7 * alturah) * 58;
let pesoidealm = (62.1 * alturam) * 44.7;
alert("o peso ideal para homens é: " + pesoidealh)
alert("o peso ideal para mulheres é: " + pesoidealm)

// 14 João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
let peso = parseInt(prompt("digite o peso ideal"))
let excesso = peso - 50;
let multa = excesso * 4;
alert("o excesso é: " + excesso)

// 15 Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

//salário bruto.
//quanto pagou ao INSS.
//quando pagou para o sindicato.
//o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
//Salário Bruto : R$
//INSS (8%) : R$
//Sindicato ( 5%) : R$ = Salário Liquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.
let salario = parseInt(prompt("digite o salario"))
let inss = salario * 0.08
let sindicato = salario * 0.05
let salarioliquido = salario - inss - sindicato
alert("o salario bruto é: " + salario)
alert("o valor pago ao inss é: " + inss)
alert("o valor pago ao sindicato é: " + sindicato)
alert("o salario liquido é: " + salarioliquido)

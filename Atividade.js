var mensagem = confirm ("Deseja iniciar consulta de preço? ");
while (mensagem="y"){
var alcool = prompt ("Digite o valor do álcool");
var gasolina = prompt ("Digite o valor da gasolina");
var divisao = alcool/gasolina
if (divisao>0.7){
  alert ("Custo benefício melhor abastecendo com gasolina.");
} else if (divisao<0.7){
  alert ("Custo benefício melhor abastecendo com álcool.")
} else {
  alert ("Custo benefício bom para qualquer uma das escolhas.");
  }

var repeticao = confirm ("Deseja realizar uma nova consulta?");
if (repeticao="n") {
  console.log ("Agradecemos sua consulta!")
  break
  } 
}

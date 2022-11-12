var time = 18;
var name = "Gabriel";

/* Exemplo 1 */

// if (time < 12 ) {
//     console.log("Bom Dia!");
//     alert("Bom Dia!");

// } else if(time < 18) {
//     console.log("boa tarde");
//     alert("boa tarde!");

// } else  if( time <= 23 ) {
//         console.log("boa noite");
//         alert("boa noite!");
//     }

/* Exemplo 2 */

if (time >= 6 && time <= 12) {
  console.log("buenos dias");
} else if (time >= 12 && time <= 18) {
  console.log("buenas tarde");
} else if (time >= 18 && time <= 23) {
  console.log("buenas notches");
}

/* DOM */

document.getElementById("exemplo").innerHTML = "Msg alterada";

/* Exemplo Get by Class  e Alteração por índice */

document.getElementsByClassName("alterar")[0].innerHTML =
  " A mensagem foi alterada por índice";

/* Exemplo Get by Tag Name*/

document.getElementsByTagName("button")[0].innerHTML =
  " Este botão foi alterado";

/* Exemplo Get by Input */

document.getElementsByName("email")[0].innerHTML = "alterar por nome";

/* QuerrySelector */

document.querySelector('button')
document.querySelector('button').innerHTML= "Opa";

/* Alteração de campo */

function verde() {
  document.querySelector('.color').classList.remove('vermelho');
  document.querySelector('.color').classList.remove('azul');
  document.querySelector('.color').classList.add('verde');

}

function vermelho(){
  document.querySelector('.color').classList.remove('verde');
  document.querySelector('.color').classList.remove('azul');
document.querySelector('.color').classList.add('vermelho');
}

function azul(){
  document.querySelector('.color').classList.remove('vermelho');
  document.querySelector('.color').classList.remove('verde');
  document.querySelector('.color').classList.add('azul');
}

function Nofound() {
  document.querySelector('.color').classList.remove('verde');
  document.querySelector('.color').classList.remove('vermelho');
  document.querySelector('.color').classList.remove('azul');
}


/* Alteração do botão por funções */

function change(){
  if (document.querySelector('.mud').classList.contains('verde')){
  document.querySelector('.mud').classList.remove('verde');
  document.querySelector('.mud').classList.add('azul');
}
else{
  document.querySelector('.mud').classList.remove('azul');
  document.querySelector('.mud').classList.add('verde');
}
}
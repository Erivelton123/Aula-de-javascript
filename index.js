document.querySelector('#t1').textContent = 'JavaScript - Introdução';
document.querySelector('#t2').textContent = 'Exemplificando algumas funcionalidades';

//comentário em  linha para javascript

//apresenta uma mensagem e esconde o  form de login

/*
function bemVindo(){
    const nome = document.querySelector(`#nomeUsuario`).value;
    alert(`Olá ${nome}! Seja bem vindo!`);
    document.getElementById('formularioLogin').style.display = 'none';
}
*/

/*Comentário 
em bloco no
 javascript */

function mudaCorFundo(){
   const menu = document.querySelector('#coresFundo');
   const cor = menu.options[menu.selectedIndex].value;
   document.body.style.background = cor;

 }
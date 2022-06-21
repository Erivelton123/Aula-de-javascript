const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector('#caixaDeTexto');
const botaoAdiconar = document.querySelector('#botaoAdicionar');
const listaSuspensa = document.querySelector('#listaSuspensa');

//LISTENER - SEMPRE QUE O BOTÃO ADICIONAR FOR CLICADO
////ADICIONA UM ITEM OU UMA TAREFA À LISTA

botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = ''; 
    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
    exibeOcultaListaSuspensa();
    caixaTexto.focus();

}); 

function adicionaTarefa(textoDaTarefa) {
  const elementoLi = document.createElement('li');
  const elementoSpan = document.createElement('span');
    
 elementoSpan.setAttribute('id', 'tarefa');
 elementoSpan.textContent = textoDaTarefa;

 elementoLi.className = 'naoRealizada';
 elementoLi.appendChild(elementoSpan);
 elementoLi.appendChild(adiconaBotaoRemover());

//  LISTENER - SEMPRE QUE UM ITEM DA LISTA FOR CLICADO PELO MOUSE
// ALTERA O MARCADOR, A COR DA FONTE E RISCA O TEXTO
 elementoSpan.addEventListener('click', function(){
  if(this.id === 'tarefa'){
      if (this.parentNode.className ==='naoRealizada') {
            this.parentNode.className = 'realizada'
      } else {
        this.parentNode.className ='naoRealizada'
      }

  }

 });

 return elementoLi;
}

function adiconaBotaoRemover(){
    const botaoRemover = document.createElement ('button');
    botaoRemover.textContent = '✖';
    botaoRemover.className = 'remover';
    //LISTENER - SEMPRE QUE O BOTÃO "REMOVER" FOR CLICADO PELO MOUSE
    //REMOVE UM ITEM DA LISTA
      botaoRemover.addEventListener('click', function() {
        listaTarefas.removeChild(this.parentNode);
        exibeOcultaListaSuspensa();
      }
      );  
    return botaoRemover;
}

function exibeOcultaListaSuspensa(){
    const elementoSpan = document.querySelector('#tarefa');
      if(elementoSpan === null){
          listaSuspensa.setAttribute('hidden', 'hidden');
      } else{
           listaSuspensa.removeAttribute('hidden');  
      }
}

listaSuspensa.addEventListener('change',function(){
      
  if(listaSuspensa.selectedIndex === 1 || listaSuspensa.selectedIndex === 2) {
            const vetorTarefas = listaTarefas.querySelectorAll('#tarefa');
              for (tarefa of vetorTarefas){
                    tarefa.dispatchEvent(new Event('click'));
              }
        } else if (listaSuspensa.selectedIndex === 3) {
          const vetorBotoes = listaTarefas.querySelectorAll('.remover');
            for (botao of vetorBotoes){
                  botao.dispatchEvent(new Event('click'));
            }
      } 

});
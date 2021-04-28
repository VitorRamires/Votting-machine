
        var nomePolitico = document.getElementById('nome_politico')
        var imagem = document.createElement('img')
        var botao = document.getElementById('botao')
        var quadradoP = document.querySelectorAll('#squareP')
        var quadrado = document.querySelectorAll('.squarelist')
        var tela = document.querySelector('.display')
        var informacoes = document.querySelector('.informações')
        var Corrigir = document.querySelector('.Corrigir')
        var numero = document.querySelector('.numero')


function getBotao2(number){

  for(i = 0; i < 4; i++){
    if(quadradoP[i].innerHTML == ""){
        quadradoP[i].innerHTML = number
    if(quadrado[i].innerHTML != ""){
        quadrado[i+1].classList.add('selecionando')
        quadrado[i].classList.remove('selecionando')  
        //Quando o quadrado de fundo estiver preenchido, ele vai remover uma classe, e vai adicionar a outro quadrado (no caso o proximo, representado por i+1)
        }
        break;
     }
  }     
}//botoes numerais


function corrige(){

   for(i = 4; i > 0; i--){
    if(quadradoP[i-1].innerHTML != ""){
        quadradoP[i-1].innerHTML = ""
        quadrado[i-1].classList.add('selecionando')
        quadrado[i].classList.remove('selecionando')
        break
     }
   }
}//botao de corrigir


function confirmar(){

  var controle = true 
   for(i = 0; i < 4; i++){
     if(quadradoP[i].innerHTML == ""){
          controle = false
          break
       } 
    }
    if(controle === false){
      alert('Preencha os campos')
    } else {    
    setTimeout (aparecerDisplay, 3000)
    setTimeout (aparecerImg,0)
    nomePolitico.innerHTML = "FIM!"
    informacoes.style.display = "block"
    numero.style.display = "none"
    document.getElementById("emBranco").disabled =  true;
    for(i = 0; i < 4; i++){
      quadradoP[i].innerHTML = ""
      quadrado[i].classList.remove('selecionando')
    }
  }
}//botao confirmar    

function branco(){

document.querySelectorAll('#botao').disabled = true;
    for(i = 0; i < 4; i++) {
      if(quadradoP[i].innerHTML != "") {
        quadradoP[i].innerHTML = ""
       }
      quadrado[i].classList.remove('selecionando')
    }
        nomePolitico.innerHTML = "VOTO EM BRANCO"
        informacoes.style.display = "none"
        numero.style.display = "none"
        imagem.style.display = "none"
        setTimeout (aparecerDisplay, 3000)   
document.getElementById("Confirmar").disabled = true;
}//botao em branco


function aparecerDisplay(){

        nomePolitico.innerHTML = "Preencha os campos"
        informacoes.style.display = "none"
        numero.style.display = "block"
        imagem.style.display = "none"
        document.getElementById("emBranco").disabled = false;
        document.getElementById("Confirmar").disabled = false;
}//aparecer o display inicial


function aparecerImg(){
  
        imagem.style.display = "block"
        imagem.setAttribute('src', 'img.jfif')
        tela.appendChild(imagem)
}//criar imagem



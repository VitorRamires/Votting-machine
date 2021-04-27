
        var nomePolitico = document.getElementById('nome_politico')
        var botao = document.getElementById('botao')
        var quadradoP = document.querySelectorAll('#squareP')
        var quadrado = document.querySelectorAll('.squarelist')
        var tela = document.querySelector('.display')
        var Corrigir = document.querySelector('.Corrigir')
        var emBranco = document.querySelector('.emBranco')
        var Confirmar = document.querySelector('.Confirmar')


function getBotao2(number){
        for(i = 0; i < 4; i++){
                if(quadradoP[i].innerHTML == ""){
                quadradoP[i].innerHTML = number
                        if(quadrado[i].innerHTML != ""){
                        quadrado[i].classList.remove('selecionando')  
                        quadrado[i+1].classList.add('selecionando')
                //Quando o quadrado de fundo estiver preenchido, ele vai remover uma classe, e vai adicionar a outro quadrado (no caso o proximo, representado por i+1)
                        }
                break;
                }        
        }   
}

function corrige(){
        for(i = 0; i < 4; i++){
                if(quadradoP[i].innerHTML != ""){
                 quadradoP[i].innerHTML = ""
                 break
                }
        }
}
// o i vai percorrer todos os ifs, quando ele ver que o if é veradadeiro, ele vai executar o comando abaixo, e irá pro proximo


function confirmar(){
          for(i = 0; i < 4; i++){
                if(quadradoP[i].innerHTML != ""){
                 quadradoP[i].innerHTML = ""
                }
        }
 alert(`Voto enviado, seu canditado é ${nomePolitico}`)
 tela.innerHTML = "FIM!"
}


function branco(){
        for(i = 0; i < 4; i++){
                if(quadradoP[i].innerHTML != ""){
                 quadradoP[i].innerHTML = ""
                }
        }
 tela.innerHTML = "VOTO EM BRANCO"
}




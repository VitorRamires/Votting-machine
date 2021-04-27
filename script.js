
        var nomePolitico = document.getElementById('nome_politico')
        var botao = document.getElementById('botao')
        var quadradoP = document.querySelectorAll('#squareP')
        var quadrado = document.querySelectorAll('.squarelist')
        var display = document.querySelector('.display')
        var corrige = document.querySelector('.corrige')
        var confirma = document.querySelector('.confirma')
      


/*function getBotao(number){
         if(quadradoP[0].innerHTML == ""){
         quadradoP[0].innerHTML = number 
         return
                } 
                if(quadradoP[0].innerHTML != "" && quadradoP[1].innerHTML == ""){        
                        quadradoP[1].innerHTML = number 
                        return
                } 
                if(quadradoP[1].innerHTML != "" && quadradoP[2].innerHTML == ""){
                        quadradoP[2].innerHTML = number 
                        return
                } 
                if(quadradoP[2].innerHTML != "" && quadradoP[3].innerHTML == ""){
                quadradoP[3].innerHTML = number 
                return
        } 
        
}*/


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
        display.innerHTML = "FIM!"
        display.style.fontSize = "55px"
        
       
        
}


function branco(){
        for(i = 0; i < 4; i++){
                if(quadradoP[i].innerHTML != ""){
                 quadradoP[i].innerHTML = ""
                }
        }
        display.innerHTML = "VOTO EM BRANCO!"
        display.style.fontSize = "55px"
}



/*
function voltar(){
display.innerHTML="Olá mundo!"
setInterval(branco,confirmar,2000)
}
*/

//fazer nome mudar apos ultimo digito digitado
//desabilitar botoes de acao apos uma acao ocorrer (branco,confirmar)
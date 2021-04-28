
        var nomePolitico = document.getElementById('nome_politico')
        var imagem = document.createElement('img')
        var botao = document.getElementById('botao')
        var quadradoP = document.querySelectorAll('#squareP')
        var quadrado = document.querySelectorAll('.squarelist')
        var tela = document.querySelector('.display')
        var informacoes = document.querySelector('.informações')
        var Corrigir = document.querySelector('.Corrigir')
        var emBranco = document.querySelector('.emBranco')
        var Confirmar = document.querySelector('.Confirmar')
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
}

function corrige(){
        for(i = 4; i > 0; i--){
                if(quadradoP[i-1].innerHTML != ""){
                 quadradoP[i-1].innerHTML = ""
                 quadrado[i-1].classList.add('selecionando')
                 quadrado[i].classList.remove('selecionando')
                 break
                }
        }
}
// o i vai percorrer todos os ifs, quando ele ver que o if é veradadeiro, ele vai executar o comando abaixo, e irá pro proximo

function confirmar(){
          for(i = 0; i < 4; i++){ 
                if(quadradoP[i].innerHTML != ""){
                setTimeout (aparecerDisplay, 9000)
                nomePolitico.innerHTML = "FIM!"
                informacoes.style.display = "block"
                numero.style.display = "none"
                quadradoP[i].innerHTML = ""
                } 
                quadrado[i].classList.remove('selecionando')
        }
}    

function branco(){
        for(i = 0; i < 4; i++) {
                if(quadradoP[i].innerHTML != "") {
                        quadradoP[i].innerHTML = ""
                }
        }

nomePolitico.innerHTML = "VOTO EM BRANCO"
informacoes.style.display = "none"
numero.style.display = "none"
imagem.style.display = "none"
setTimeout (aparecerDisplay, 5000)   

}

function aparecerDisplay(){
nomePolitico.innerHTML = "Preencha os campos"
informacoes.style.display = "none"
numero.style.display = "block"
imagem.style.display = "none"
}


function aparecerImg(){
imagem.style.display = "block"
imagem.setAttribute('src', 'img.jfif')
tela.appendChild(imagem)
}
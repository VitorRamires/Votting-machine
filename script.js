
        var nomePolitico = document.getElementById('nome_politico')
        var botao = document.getElementById('botao')
        var quadradoP = document.querySelectorAll('#squareP')
        var quadrado = document.querySelectorAll('#squarelist')
        

        function getBotao(number){

                if(quadradoP[0].innerHTML = ""){
                        quadradoP[0].innerHTML = number 
                } 
                if(quadradoP[0].innerHTML = number){
                        quadradoP[1].innerHTML = number 
                } 
                if(quadradoP[1].innerHTML = number){
                        quadradoP[2].innerHTML = number 
                } 
                if(quadradoP[2].innerHTML = number){
                        quadradoP[3].innerHTML = number 
                } 
        
        }
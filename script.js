/*
    Nome: Diogo Gomes Castro
    Professora: Aline
    Turma: 2° Período - ADS
*/

var personagem = document.querySelector("#personagem");
var obstaculo = document.querySelector("#obstaculo");
var colisaoOcorreu = false;
var flag = false;
var flag_score = true;
var score = document.querySelector("p");
var cont = 0;

function desviar(){
    if(personagem.classList != 'animar')
        personagem.classList.add('animar')

    setTimeout(function(){
        personagem.classList.remove('animar') 
    }, 500)
}
    
var colisao = setInterval(function colisao2(){
    var topPersonagem = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"))
    //retorna o valor em pixels da altura do personagem
    var esqObstaculo = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"))
    //retorna o valor em pixels da esquerda do obstáculo
    if(esqObstaculo<50 && esqObstaculo>-40 && topPersonagem>=109 && !flag){ //colisão
        obstaculo.style.animation = "none" //remove a animação do obstáculo
        obstaculo.style.display = "none" // remove o obstáculo da tela
        alert("VOCÊ PERDEU!");
        flag = true;
        cont = 0; 
        score.innerHTML = "Score: " + cont;
    }
    else if(flag)
    {
        flag = false;
        obstaculo.style.animation = "obstaculo 1s infinite linear";
        obstaculo.style.display = "block";
    }
    if(esqObstaculo > -39 && esqObstaculo <= 0 && flag_score){
        cont++;
        flag_score = false;
        score.innerHTML = "Score: " + cont;
    }
    else if(esqObstaculo > 0){
        flag_score = true;
    }    
},10)
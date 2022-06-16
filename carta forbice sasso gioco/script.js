const carta = document.getElementById('carta');
const forbici = document.getElementById('forbici');
const sasso = document.getElementById('sasso');
const reload = document.getElementById('reload');
const h1 = document.getElementById('h1');
const paragrafo = document.getElementById('paragrafo');
const comeback = document.getElementById('back');

comeback.addEventListener('click',back);
carta.addEventListener('click',fun1);
forbici.addEventListener('click',fun2);
sasso.addEventListener('click',fun3);
reload.addEventListener('click',fun4);

function back(){
    location.href="C:/Users/User/Desktop/javascript/esercizi/index.html"
}

function fun1(){
    var num = Math.round(Math.random() * 1);
    if(num == 0){
        var sceltapc = "sasso";
    }
    else if(num == 1){
        var sceltapc = "forbici";
    }
    


    if(sceltapc == "forbici" ){
        h1.innerHTML="Il computer ha scelto forbici,hai perso!";
        paragrafo.style.display = "none";
        reload.style.display = "block";
    }
    else if(sceltapc == "sasso" ){
        h1.innerHTML="Il computer ha scelto sasso,hai vinto!";
        paragrafo.style.display = "none";
        reload.style.display = "block";
    }   
}




function fun2(){
        var num = Math.round(Math.random() * 1);
        if(num == 0){
            var sceltapc = "carta";
        }
        else if(num == 1){
            var sceltapc = "sasso";
        }

        if(sceltapc == "carta" ){
            h1.innerHTML="Il computer ha scelto carta,hai vinto!";
            paragrafo.style.display = "none";
            reload.style.display = "block";
        }
        else if(sceltapc == "sasso" ){
            h1.innerHTML="Il computer ha scelto sasso,hai perso";
            paragrafo.style.display = "none";
            reload.style.display = "block";
        }
}


function fun3(){
        var num = Math.round(Math.random() * 1);
        if(num == 0){
            var sceltapc = "carta";
        }
        else if(num == 1){
            var sceltapc = "forbici";
        }

        if(sceltapc == "carta" ){
            h1.innerHTML="Il computer ha scelto carta,hai perso";
            paragrafo.style.display = "none";
            reload.style.display = "block";
        }
        else if(sceltapc == "forbici" ){
            h1.innerHTML="Il computer ha scelto forbici,hai vinto!";
            paragrafo.style.display = "none";
            reload.style.display = "block";
        }
}

function fun4(){
    window.location.reload()
}
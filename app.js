const text = document.getElementById('testo');
const button = document.getElementById('bottone');
const parag = document.getElementById('paragrafo');
const div = document.getElementById('div');
const img = document.getElementById('immagine');
const shd = document.getElementById('contenitore')
const shrek = document.getElementById('shrek');
const gay = document.getElementById('gay');

button.addEventListener('click',fun3)
button.addEventListener('click', fun1);

document.getElementById("testo")
    .addEventListener("keyup", function(e) {
        if (e.code === 'Enter') {
            document.getElementById("bottone").click();
        }
    });

    function fun3 (){
        gay.style.display = "none";
    }
    function fun1()
    {
        if(text.value ==""){
            gay.style.display = "block";
        }
        else if(text.value == "money")
        {
            shrek.style.display = "none";
            img.style.display = "block";
            div.style.display = "none";
            shd.style.display = "block";
            parag.innerHTML += "<li id='list-item'>" + text.value + "</li>" ;
            div.style.background = text.value;
            text.value = "";
        }
        else if(text.value == "shrek")
            {
                img.style.display = "none";
                shrek.style.display = "block";
                div.style.display = "none";
                shd.style.display = "block";
                parag.innerHTML += "<li id='list-item'>" + text.value + "</li>" ;
                div.style.background = text.value;
                text.value = "";
            }
        else if (text.value=="gioco1"){
                location.href="C:/Users/User/Desktop/javascript/esercizi/carta forbice sasso gioco/gioco1.html"
            }
        else if (text.value != "shrek", "money", " ")
        {
        shd.style.display = "block";
        parag.innerHTML += "<li id='list-item'>" + text.value + "</li>" ;
        shrek.style.display = "none";
        img.style.display = "none";
        div.style.display = "block"
        div.style.background = text.value;
        text.value = "";
        }
        
    }







    


var tentativi = 3;
var giocatore, computer;
var puntiC = 0, puntiG = 0;

for (var i = 0; i < tentativi; i++){
  computer = Math.floor(Math.random() * 3);

  if (computer == 0) {
    computer = 'f';
  } else if (computer == 1){
    computer = 's';
  } else {
    computer = 'c';
  }
  console.log(computer);

  giocatore = prompt('Inserisci f per forbice, s per sasso e c per carta');
  giocatore = giocatore.toLowerCase();
  if (computer == giocatore) {
    console.log('parità');
  } else if ((giocatore == 's' && computer == 'f') || (giocatore == 'f' && computer == 'c') || (giocatore == 'c' && computer == 's')) {
    console.log('Hai vinto');
    puntiG++;
  } else {
    console.log('Hai perso ');
    puntiC++;
  }
}

console.log(puntiC);
console.log(puntiG);
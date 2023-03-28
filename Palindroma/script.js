/*
## Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

let promptParola = (prompt('Inserisci la parola e verificherò se è palindroma'));

let parolaRovesciata = parolaPalindroma(promptParola);

if(parolaRovesciata == promptParola){
  console.log('La parola inserita è palindroma')
}else{
  console.log('La parola inserita NON è palindroma')
}

console.log(promptParola);
console.log(parolaRovesciata);

function parolaPalindroma(string){
  // divide la stringa in singole lettere
  const parolaSplit = string.split("");
  console.log(parolaSplit);
  
  // inverte l'ordine delle singole lettere
  const parolaReverse = parolaSplit.reverse();
  console.log(parolaReverse);
  
  // unisce le singole lettere in una stringa
  const parolaJoin = parolaReverse.join("");
  
  return parolaJoin;
}

























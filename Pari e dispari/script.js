/*
## Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

//*numero random per computer
const numberComputer = Math.ceil(Math.random() * (6 - 1));
//OPPURE
// const numberComputer = Math.floor(Math.random() * (6 - 1) + 1);

console.log(numberComputer);

//* numero input prompt 
// const numberUser = parseInt(prompt('Sfida il computer inserendo un numero da 1 a 5'));
// if(numberUser >= 1 && numberUser < 6){
//   console.log(numberUser);
// }else{
//   console.log(('Valore errato, il numero deve essere compreso tra 1 e 5'));
// }




//*pari o dispari prompt
const evenOrOdd = prompt('Sfida il computer scegliendo pari o dispari');
if(evenOrOdd == 'pari' || evenOrOdd == 'Pari' || evenOrOdd == 'PARI' ){
  console.log('Hai scelto pari');
  

  //* numero input prompt 
  const numberUser = parseInt(prompt('Sfida il computer inserendo un numero da 1 a 5'));
  if(numberUser >= 1 && numberUser < 6){
    console.log(numberUser);
    
    //*somma dei 2 numeri
    const sum = numberUser + numberComputer;
    console.log(sum);
    
    //* somma = pari vittoria per User, somma = dispari vittoria per Computer
    if(sum % 2 == 0){
      console.log('Complimenti, hai vinto!!!');
      
    }else{
      console.log('Mi dispiace, hai perso. Riprova!');

    }
    
    
  }else{
    console.log(('Valore errato, il numero deve essere compreso tra 1 e 5'));
  }
  
} else if (evenOrOdd == 'dispari' || evenOrOdd == 'Dispari' || evenOrOdd == 'DISPARI' ){
  console.log('Hai scelto dispari');
  
  
  //* numero input prompt 
  const numberUser = parseInt(prompt('Sfida il computer inserendo un numero da 1 a 5'));
  if(numberUser >= 1 && numberUser < 6){
    console.log(numberUser);

    //*somma dei 2 numeri
    const sum = numberUser + numberComputer;
    console.log(sum);

    //* somma = dispari vittoria per User, somma = pari vittoria per Computer
    if(sum % 2 != 0){
      console.log('Complimenti, hai vinto!!!');
    }else{
      console.log('Mi dispiace, hai perso. Riprova!');
    }

  }else{
    console.log(('Valore errato, il numero deve essere compreso tra 1 e 5'));
  }


}else{
  console.log('Valore errato, scegli pari o dispari');
}



















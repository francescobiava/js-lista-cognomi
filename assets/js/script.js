// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// variabili
var userSurname, listSurname, check, i;

// creazione array cognomi
listSurname = ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Costa', 'Fontana', 'Rota', 'Lombardi', 'Mancini', 'Brambilla', 'Fumagalli'];

// aggiunta cognome con input utente
userSurname = prompt('Inserisci il tuo cognome');
listSurname.push(userSurname);

// output lista non ordinata
document.getElementById('js-listSurname').innerHTML = (listSurname);

// ordinamento lista cognomi
listSurname.sort();

// output lista in ordine alfabetico
document.getElementById('js-listSurnameOrder').innerHTML = (listSurname);

// confronto del cognome utente con lista ordinata
i = 0;
check = false;
while (i < listSurname.length && check ===false) {
  if (listSurname[i] === userSurname){
    check = true;
    console.log(i);
    document.getElementById('js-position').innerHTML = (i+1 + ' della lista');
  }
  i++;
}
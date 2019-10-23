// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// variabili
var userSurname, listSurname, listSurnameOrder, check, i, j;

// creazione array cognomi
listSurname = ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Costa', 'Fontana', 'Rota', 'Lombardi', 'Mancini', 'Brambilla', 'Fumagalli'];

// aggiunta cognome con input utente
userSurname = prompt('Inserisci il tuo cognome');
listSurname.push(userSurname);

// ordinamento lista cognomi
listSurnameOrder = listSurname.slice();
listSurnameOrder.sort();

// output lista non ordinata
for (i = 0; i < listSurname.length; i++) {
  document.getElementById('js-listSurname').innerHTML += ('<li>' + listSurname[i] + '</li>');
}

// output lista in ordine alfabetico
for (i = 0; i < listSurnameOrder.length; i++) {
  document.getElementById('js-listSurnameOrder').innerHTML += ('<li>' + listSurnameOrder[i] + '</li>');
}

// confronto del cognome utente con lista ordinata
j = 0;
check = false;
while (j < listSurnameOrder.length && check ===false) {
  if (listSurnameOrder[j] === userSurname){
    check = true;
    document.getElementById('js-position').innerHTML = (j+1 + ' della lista');
  }
  j++;
}
// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// variabili
var userSurname, listSurname, check, i, j;

// creazione array cognomi
listSurname = ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Costa', 'Fontana', 'Rota', 'Lombardi', 'Mancini', 'Brambilla', 'Fumagalli'];

// aggiunta cognome con input utente
userSurname = prompt('Inserisci il tuo cognome');
listSurname.push(userSurname);

// output lista non ordinata
// document.getElementById('js-listSurname').innerHTML = (listSurname);
for (i = 0; i < listSurname.length; i++) {
  document.getElementById('js-listSurname').innerHTML += ('<li>' + listSurname[i] + '</li>');
}

// ordinamento lista cognomi
listSurname.sort();

// output lista in ordine alfabetico
// document.getElementById('js-listSurnameOrder').innerHTML = (listSurname);
for (i = 0; i < listSurname.length; i++) {
  document.getElementById('js-listSurnameOrder').innerHTML += ('<li>' + listSurname[i] + '</li>');
}

// confronto del cognome utente con lista ordinata
j = 0;
check = false;
while (j < listSurname.length && check ===false) {
  if (listSurname[j] === userSurname){
    check = true;
    document.getElementById('js-position').innerHTML = (j+1 + ' della lista');
  }
  j++;
}
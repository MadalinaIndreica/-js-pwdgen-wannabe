// RACCOLTA DATI
const username = prompt ("Ciao utente! come ti chiami?");
console.log (username, typeof username);
const user_surname = prompt ("Qual'è il tuo cognome?");
console.log (user_surname, typeof user_surname);
const color = prompt ("qual'è il tuo colore preferito?");
console.log  (color, typeof color)
// LOGICA DEL PROGRAMMA
const password = username + user_surname + color + 21;
console.log(password);
const message = `la tua password è ${password}`;
console.log(message);
// OUTPUT
document.getElementById("pswd").innerHTML = message;
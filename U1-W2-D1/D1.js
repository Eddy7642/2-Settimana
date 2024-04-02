/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*RISPOSTA 1 
Javascript prevede 5 tipi di dati :
-String (stringhe)
-Number (numeri)
-Boolean (Booleani)
-Null (nullo)
-Undefined (indefinito)
-STRING
    E' una sequenza di caratteri alfabetici o numerici delimitata sempre da apici "" oppure ''.Unica regola e che gli apici devono sempre coincidere,
    quindi se uso i doppi apici (") dovranno essere gli stessi ad inizio e fine del carattere.
 -NUMBER
    E' una seguenza di caratteri non delimitata da apici. I caratteri sono numerici.
 -BOOLEAN
    I dati Boolean hanno solo due valori possibili (True|False)  
 -NULL
   I dati Null prevodono un solo tipo di valore "null". Null non è una stringa vuota ed è un valore diverso da 0.
 -UNDERFINED
   I dati Underfined prevodono un solo valore possibile "underfined" rappresentando un valore che non esiste. Underfined è diverso da "null"     
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* RISPOSTA2
const myName = "Luca"; 
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* RISPOSTA 3
  let numero1 = 12;
  let numero2 = 20;
  let somma = (numero1 + numero2);      ->Risultato = 32
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* RISPOSTA 4
  var x = 12
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* RISPOSTA 5 
  const myName = "Chisari";
  Non posso riassegnare un valore ad una variabile const. ->Errore!
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* RISPOSTA 6
  var y = 4
  var somma =(x-y)   ->Somma uguale a 8
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* RISPOSTA 7 
  var name1 = "john";
  var name2 = "John";
  (name1 == name2)                 -----> False
  (name1 == name2 .toLowerCase()); --->True
*/

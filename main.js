// Inizializzo un pò di birre
const birra1 = new Birra("Moretti", "Jason", 3, 12, new Date(), "Chiara"); // birrajaor
const birra2 = new Birra("Moretti", "Freddy", 3, 14, new Date(), "Chiara"); // birrafror
const birra3 = new Birra("Cobra", "Lager", 5, 10, new Date(), "Chiara"); // birralaob
const birra4 = new Birra("Coors Extra Gold", "Lager", 4, 16, new Date(), "Scura"); // birralaoo
const birra5 = new Birra("Dab", "Pils", 3, 13, new Date(), "Scura"); // birrapiab


// Inizializzo un pò di vini
const vino1 = new Vino("Brunello", "Bianco secco", 3, 20, new Date(), 2000, "Monti Bravi"); // vinobiru
const vino2 = new Vino("Barbera", "Bianco secco", 4, 18, new Date(), 1978, "Monti Cattivi"); // vinobiar
const vino3 = new Vino("Pippo", "Bianco secco", 6, 22, new Date(), 1978, "Valle della Morte"); // vinobiip
const vino4 = new Vino("Moscato", "Dolce", 5, 10, new Date(), 1999, "Valle della Morte"); // vinodoos
const vino5 = new Vino("Sangue di Giuda", "Frizzante", 3, 11, new Date(), 2004, "Colline Francesi"); // vinofran


// Inizializzo un pò di super alcolici
const supalc1 = new SuperAlcolico("Vodka", "Brens", 10, 20, new Date()); // superalcolicobrod
const supalc2 = new SuperAlcolico("Brandy", "Saintz", 12, 12, new Date()); // superalcolicosara
const supalc3 = new SuperAlcolico("Gin", "Spritz", 14, 22, new Date()); // superalcolicospin


// Inizializzo la cantina
const cantina = new Cantina();

/**********************************************************************************/

// Aggiungo le bottiglie alla cantina
cantina.aggiungiBevanda(birra1);
cantina.aggiungiBevanda(birra2);
cantina.aggiungiBevanda(birra3);
cantina.aggiungiBevanda(birra4);
cantina.aggiungiBevanda(birra5);
cantina.aggiungiBevanda(vino1);
cantina.aggiungiBevanda(vino2);
cantina.aggiungiBevanda(vino3);
cantina.aggiungiBevanda(vino4);
cantina.aggiungiBevanda(vino5);
cantina.aggiungiBevanda(supalc1);
cantina.aggiungiBevanda(supalc2);
cantina.aggiungiBevanda(supalc3);

/****************************************/

// Aggiungo il numero di bottiglie
cantina.aggiungiBottiglie("birrajaor", 10);
cantina.aggiungiBottiglie("birrafror", 50);
cantina.aggiungiBottiglie("birralaob", 23);
cantina.aggiungiBottiglie("birralaoo", 65);
cantina.aggiungiBottiglie("birrapiab", 87);
cantina.aggiungiBottiglie("vinobiru", 89);
cantina.aggiungiBottiglie("vinobiar", 200); // 0
cantina.aggiungiBottiglie("vinobiip", 100);
cantina.aggiungiBottiglie("vinodoos", 45);
cantina.aggiungiBottiglie("vinofran", 30);
cantina.aggiungiBottiglie("superalcolicobrod", 11);
cantina.aggiungiBottiglie("superalcolicosara", 2);
cantina.aggiungiBottiglie("superalcolicospin", 57);

/****************************************/

// Stampo la cantina
console.log(cantina);

/****************************************/

// Stampo le etichette delle bevande singolarmente
// console.log(birra1.toString());
// console.log(birra2.toString());
// console.log(birra3.toString());
// console.log(birra4.toString());
// console.log(birra5.toString());
// console.log(vino1.toString());
// console.log(vino2.toString());
// console.log(vino3.toString());
// console.log(vino4.toString());
// console.log(vino5.toString());
// console.log(supalc1.toString());
// console.log(supalc2.toString());
// console.log(supalc3.toString());

/****************************************/

// Cerco per nome
const nomeScelto = "Lager";
console.log("Birre con nome '" + nomeScelto + "'", cantina.cercaPerNomeCodice(nomeScelto));

/****************************************/

// Cerco per vitigno
const vitignoScelto = "Valle della Morte";
console.log("Vini con vitigno '" + vitignoScelto + "'", cantina.cercaPerVitigno(vitignoScelto));

/****************************************/

// Numero di bottiglie per codice
const codiceScelto = vino2.generateCode();
console.log("N° bottiglie per codice '" + codiceScelto + "'", cantina.numeroBottigliePerCodice(codiceScelto));

/****************************************/

// Conteggio bottiglie totali
const bottiglieTotali = cantina.conteggioBottiglie();
console.log("La cantina ha in totale " + bottiglieTotali[3] + " bottiglie, così suddivise:\n\n");
console.log("- Birre: " + bottiglieTotali[0] + " bottiglie.");
console.log("- Vini: " + bottiglieTotali[1] + " bottiglie.");
console.log("- Super alcolici: " + bottiglieTotali[2] + " bottiglie.");

/****************************************/

// Conteggio bottiglie per vitigno
const vitignoScelto2 = "Valle della Morte";
console.log("N° bottiglie vitigno '" + vitignoScelto2 + "'", cantina.conteggioBottigliePerVitigno(vitignoScelto2));

/****************************************/

// Conteggio bottiglie per anno
const annoScelto = 1978;
console.log("N° bottiglie vino per anno '" + annoScelto + "'", cantina.numeroBottiglieVinoPerAnno(annoScelto));

/****************************************/

// Conteggio bottiglie birra per tipologia
const tipologiaScelta = "Chiara";
console.log("N° bottiglie birra per tipologia '" + tipologiaScelta + "'", cantina.numeroBottiglieBirraPerTipologia(tipologiaScelta));

/****************************************/

// Elimino delle bottiglie
cantina.eliminaBottiglie("vinobiar", 50);

/****************************************/

// Conteggio di nuovo le bottiglie per anno
const annoScelto2 = 1978;
console.log("N° bottiglie vino per anno '" + annoScelto2 + "'", cantina.numeroBottiglieVinoPerAnno(annoScelto2));

let birra = new Birre ("Moretti","chiara",3,12,new Date())


let etichetta = birra.toString();
console.log(etichetta);


let prezzoDettaglio = birra.prezzoIva()
//console.log(prezzoDettaglio)


let vino = new Vini ("Chianti","rosso",12,12,new Date(),2000,"BOH")

let prezzoIva = vino.prezzoIva()
//console.log(prezzoIva);
 
let etichettaVino = vino.toString();
console.log(etichettaVino)



let superAlcolico = new SuperAlcolici("Vodka","absolute",30,40,new Date());
let etichettaAlc=superAlcolico.toString();
console.log(etichettaAlc);


let cantina = new Cantina()
cantina.addProdotto(superAlcolico)

console.log(cantina)
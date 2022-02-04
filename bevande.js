class Bevande {

    constructor(marca, nomeProdotto, prezzoNoIva, gradoAlcolico, dataInserimento) {
        this.marca = marca;
        this.nomeProdotto = nomeProdotto;
        this.prezzoNoIva = prezzoNoIva;
        this.gradoAlcolico = gradoAlcolico;
        this.dataInserimento = dataInserimento;
    }

    generateCodeBevande() {
        let timestamp = this.dataInserimento.getTime();
        return timestamp;
    }

    prezzoIva() {
        let prezzoIva = (this.prezzoNoIva * this.iva / 100) + this.prezzoNoIva;
        return prezzoIva;
    }
    
    toString() {
        if (this.annoImbottigliamento) {
            return "Marca: " + this.marca + "\n" +
                   "Prodotto: " + this.nomeProdotto + "\n" +
                   "Codice: " + this.generateCodeBevande() + "\n" +
                   "Anno di imbottigliamento: " + this.annoImbottigliamento + "\n" +
                   "Prezzo iva esclusa: " + this.prezzoNoIva + " € " + "\n" +
                   "Prezzo con Iva(maggiorato dell'1% per ogni anno di invecchiamento) : " + this.prezzoIva() + " €" + "\n";

        }
        else {
            return "Marca: " + this.marca + "\n" +
                   "Prodotto: " + this.nomeProdotto + "\n" +
                   "Codice: " + this.generateCodeBevande() + "\n" +
                   "Prezzo: " + this.prezzoNoIva + " € (iva esclusa) " + "\n" +
                   "Prezzo con Iva: " + this.prezzoIva() + " €" + "\n";
        }
    }

}
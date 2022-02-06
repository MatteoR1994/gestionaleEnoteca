class SuperAlcolico extends Bevanda {

    constructor(marca, nomeProdotto, prezzoNoIva, gradoAlcolico, dataInserimento) {
        super(marca, nomeProdotto, prezzoNoIva, gradoAlcolico, dataInserimento);
        this.iva = 30;
    }
    
}
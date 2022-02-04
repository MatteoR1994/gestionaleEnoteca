class Birre extends Bevande{

    constructor(marca, nomeProdotto, prezzoNoIva, gradoAlcolico, dataInserimento, tipologia) {

        super(marca, nomeProdotto, prezzoNoIva, gradoAlcolico, dataInserimento);
        this.iva = 22;
        this.tipologia = tipologia

    }

    
}
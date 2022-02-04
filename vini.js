class Vini extends Bevande {

    constructor(marca, nomeProdotto, prezzoNoIva, gradoAlcolico, dataInserimento, annoImbottigliamento, vitigno) {

        super(marca, nomeProdotto, prezzoNoIva, gradoAlcolico, dataInserimento);

        this.iva = 22;
        this.annoImbottigliamento = annoImbottigliamento;
        this.vitigno = vitigno;

    }



    prezzoIva() {
      
        let prezzo = super.prezzoIva();

        let now = new Date();
        let actualYear = now.getFullYear();
        let anniVino = actualYear - this.annoImbottigliamento; // 1% x anniVino => anniVino% - 1% x 20 => 20%

        let prezzoInvecchiamento = prezzo + (anniVino*prezzo/100);
        return prezzoInvecchiamento.toFixed(2);
       
    }


}
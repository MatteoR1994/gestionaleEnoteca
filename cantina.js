class Cantina {

    constructor() {
        this.birre=[];
        this.vini=[];
        this.superAlcolici=[];        
    }    

    // addProdotto(prodotto) {
    //     /// fare controllo presenza 
    //     switch (prodotto.constructor.name) {
    //         case "Vini":
    //             this.vini.push(prodotto);
    //             break;
    //         case "Birre":
    //             this.birre.push(prodotto);
    //             break;
    //         case "SuperAlcolici":
    //             this.superAlcolici.push(prodotto);
    //             break;
    //     }
    // }

    cercaPerNomeCodice(stringa) {
        const bevande = this.birre.concat(this.superAlcolici).concat(this.vini);
        let risultatoRicerca = [];
        for (const bevanda of bevande) {
            let stessoNome = bevanda.nomeProdotto.toLowerCase().includes(stringa.toLowerCase());
            let stessoCodice = bevanda.generateCode() === stringa;
            if (stessoNome || stessoCodice) {
                risultatoRicerca.push(bevanda);
            }
        }
        return risultatoRicerca;
    }

    cercaPerVitigno(vitigno){
        let risultatoRicerca = []

        for (const vino of this.vini) {
            let stessoVitigno = vino.vitigno.toLowerCase().includes(vitigno.toLowerCase());
            if (stessoVitigno) {
                risultatoRicerca.push(vino);
            }
        }

        return risultatoRicerca;
    }

    aggiungiBevanda(bevanda){
        switch (bevanda.constructor.name) {
            case "Birra":
                this.aggiungiBirra(bevanda)
                break;
            case "Vino":
                this.aggiungiVino(bevanda)
                break;
            default:
                this.aggiungiSuperAlcolico(bevanda)
                break;
        }

    }

    aggiungiVino(vino){
        if (!this.controllaPresenzaVino(vino)) {
            this.vini.push(vino);
        }
    }

    aggiungiBirra(birra){
        if (!this.controllaPresenzaBirra(birra)) {
            this.birre.push(birra);
        }
    }

    aggiungiSuperAlcolico(supAlc){
        if (!this.controllaPresenzaSuperAlcolico(supAlc)) {
            this.superAlcolici.push(supAlc);
        }
    }

    controllaPresenzaVino(vino){
        return Cantina.controllaPresenza(vino, this.vini)
    }

    controllaPresenzaBirra(birra){
        return Cantina.controllaPresenza(birra, this.birre)
    }

    controllaPresenzaSuperAlcolico(superAlcolico){
        return Cantina.controllaPresenza(superAlcolico, this.superAlcolici)
    }


    static controllaPresenza(nuovaBevanda, arrayDiBevande){
        let isPresent = false
        for (const bevanda of arrayDiBevande) {
            if (bevanda.generateCode() === nuovaBevanda.generateCode()) {
                isPresent = true;
            }
        }
        return isPresent;
    }

    // Aggiungere bottiglie tramite code
    aggiungiBottiglie(codiceProdotto, numero) {
        const prodottiPerCodice = this.cercaPerNomeCodice(codiceProdotto);
        prodottiPerCodice.map((element) => element.numeroBottiglie = element.numeroBottiglie + numero);
    }

    // Togliere bottiglie tramite code
    eliminaBottiglie(codiceProdotto, numero) {
        const prodottiPerCodice = this.cercaPerNomeCodice(codiceProdotto);
        for (const elemento of prodottiPerCodice) {
            if (elemento.numeroBottiglie >= 1) {
                elemento.numeroBottiglie -= numero;
            } else {
                console.log("Non puoi togliere bottiglie a questo prodotto: " + codiceProdotto + " perché non ne risultano registrate.");
            }
        }
    }

    // Numero di bottiglie per code
    numeroBottigliePerCodice(codice) {
        const prodottiPerCodice = this.cercaPerNomeCodice(codice);
        const numero = prodottiPerCodice.reduce((p, c) => p + c.numeroBottiglie, 0);
        return numero
    }

    // Numero di bottiglie di vino, birra, superalcolici parziale e totale
    conteggioBottiglie() {
        const risultati = [];
        const numeroBottiglieBirra = this.birre.reduce((p, c) => p + c.numeroBottiglie, 0);
        const numeroBottiglieVino = this.vini.reduce((p, c) => p + c.numeroBottiglie, 0);
        const numeroBottiglieSuperAlcolici = this.superAlcolici.reduce((p, c) => p + c.numeroBottiglie, 0);
        const bottiglieTotali = numeroBottiglieBirra + numeroBottiglieVino + numeroBottiglieSuperAlcolici;
        risultati.push(numeroBottiglieBirra);
        risultati.push(numeroBottiglieVino);
        risultati.push(numeroBottiglieSuperAlcolici);
        risultati.push(bottiglieTotali);
        return risultati;
    }

    // Numero di bottiglie di vino per vitigno
    conteggioBottigliePerVitigno(vitigno) {
        const viniPerVitigno = this.cercaPerVitigno(vitigno);
        const bottigliePerVitigno = viniPerVitigno.reduce((p, c) => p + c.numeroBottiglie, 0);
        return bottigliePerVitigno;
    }

    // Numero di bottiglie di vino per anno
    numeroBottiglieVinoPerAnno(anno) {
        const numero = this.vini.filter((element) => element.annoImbottigliamento === anno).reduce((p, c) => p + c.numeroBottiglie, 0);
        return numero;
    }

    // Numero di birre per tipologia
    numeroBottiglieBirraPerTipologia(tipologia) {
        const numero = this.birre.filter((element) => element.tipologia === tipologia).reduce((p, c) => p + c.numeroBottiglie, 0);
        return numero;
    }

}
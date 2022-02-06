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
            let stessoNome = bevanda.toLowerCase().nomeProdotto.includes(stringa.toLowerCase());
            let stessoCodice = bevanda.generateCode() === stringa;
            if (stessoNome || stessoCodice) {
                risultatoRicerca.push(bevanda);
            }
            return risultatoRicerca;
        }
    }

    cercaPerVitigno(vitigno){
        let risultatoRicerca = []

        for (const vino of this.vini) {
            let stessoVitigno = vino.vitigno.toLowerCase().includes(vitigno);
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
    

    // Togliere bottiglie tramite code


    // Numero di bottiglie per code


    // Numero di bottiglie di vino, birra, superalcolici parziale e totale


    // Numero di bottiglie di vino per vitigno


    // Numero di bottiglie di vino per anno


    // Numero di birre per tipologia

}
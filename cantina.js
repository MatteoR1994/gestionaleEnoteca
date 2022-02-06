class Cantina {

    constructor() {
        this.birre=[];
        this.vini=[];
        this.superAlcolici=[];        
    }    

    addProdotto(prodotto) {
        /// fare controllo presenza 
        switch (prodotto.constructor.name) {
            case "Vini":
                this.vini.push(prodotto);
                break;
            case "Birre":
                this.birre.push(prodotto);
                break;
            case "SuperAlcolici":
                this.superAlcolici.push(prodotto);
                break;
        }
    }

    searchByNameOrCode(string) {
        const bevandes = this.birre.concat(this.superAlcolici).concat(this.vini);
        let searchResult = [];
        for (const bevande of bevandes) {
            let sameName = bevande.toLowerCase().name.includes(string.toLowerCase());
            let sameCode = bevande.generateCode() === string;
            if (sameName || sameCode) {
                searchResult.push(bevande);
            }
            return searchResult;
        }
    }

    searchByVine(vine){
        let searchResult = []

        for (const wine of this.wines) {
            let sameVine = wine.vine.toLowerCase().includes(vine);
            if (sameVine) {
                searchResult.push(wine);
            }
        }

        return searchResult;
    }

    addBeverage(beverage){
        switch (beverage.constructor.name) {
            case "Beer":
                this.addBeer(beverage)
                break;
            case "Wine":
                this.addWine(beverage)
                break;
            default:
                this.addSpirit(beverage)
                break;
        }

    }


    addWine(wine){
        if (!this.checkWinePresence(wine)) {
            this.wines.push(wine);
        }
    }

    addBeer(beer){
        if (!this.checkBeerPresence(beer)) {
            this.beers.push(beer);
        }
    }

    addSpirit(spirit){
        if (!this.checkBeerPresence(spirit)) {
            this.spirits.push(spirit);
        }
    }



    checkWinePresence(wine){
        return Cellar.checkPresence(wine, this.wines)
    }

    checkBeerPresence(beer){
        return Cellar.checkPresence(beer, this.beers)
    }

    checkSpiritPresence(spirit){
        return Cellar.checkPresence(spirit, this.spirits)
    }


    static checkPresence(newBeverage, arrayOfBeverages){
        let isPresent = false
        for (const beverage of arrayOfBeverages) {
            if (beverage.code === newBeverage.code) {
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
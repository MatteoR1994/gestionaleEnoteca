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

}
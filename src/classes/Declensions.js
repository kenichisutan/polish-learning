class Declensions {
    constructor() {
        this.singular = this.createCaseObject();
        this.plural = this.createCaseObject();
    }

    createCaseObject() {
        return {
            nominative: "",
            genitive: "",
            dative: "",
            accusative: "",
            instrumental: "",
            locative: "",
            vocative: ""
        };
    }
}

export default Declensions;

class conjugations {
    constructor() {
        this.present = this.createConjugationForms('present');
        this.past = this.createConjugationForms('past');
        this.future = this.createConjugationForms('future');
        this.conditional = this.createConjugationForms('conditional');
        this.imperative = this.createConjugationForms('imperative');
    }

    createConjugationForms( form) {
        if (form === 'present' || form === "imperative") {
            return {
                first: {
                    singular: '',
                    plural: ''
                },
                second: {
                    singular: '',
                    plural: ''
                },
                third: {
                    singular: '',
                    plural: ''
                },

            }
        } else {
            return {
                first: {
                    singular: {
                        m: '',
                        f: ''
                    },
                    plural: {
                        m: '',
                        nm: '',
                    }
                },
                second: {
                    singular: {
                        m: '',
                        f: ''
                    },
                    plural: {
                        m: '',
                        nm: '',
                    }
                },
                third: {
                    singular: {
                        m: '',
                        f: '',
                        n: ''
                    },
                    plural: {
                        m: '',
                        nm: '',
                    }
                },
            }
        }
    }

    conjugate(verb) {
        this.conjugatePresent(verb);
    }

    conjugatePresent(verb) {
        
    }
}

export default conjugations;
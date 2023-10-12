class declension {
    constructor() {
        this.singular = this.createCaseObject();
        this.plural = this.createCaseObject();
        this.gender = "";
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

    setGender(gender) {
        this.gender = gender;
    }

    decline(word) {
        // check gender of word

        // ---------------MASCULINE----------------

        // ---------------FEMININE----------------
        if(word[word.length - 1] === 'a') {
            this.declineFeminine(word);
            this.setGender("Feminine")
        }
        // ---------------NEUTER----------------
        if(word[word.length - 1] === 'o' || word[word.length - 1] === 'e' || word[word.length - 1] === 'ę') {
            this.declineNeuter(word);
            this.setGender("Neuter")
        }
    }

    declineFeminine(word) {
        // decide which method to use based on the last letter
        if(word[word.length - 1] === 'a') {
            this.declineFeminineSingularEndingA(word);
            this.declineFemininePluralEndingA(word);
        }
    }

    declineNeuter(word) {
        // decide which method to use based on the last letter
        if(word[word.length - 1] === 'o') {
            this.declineNeuterSingularEndingO(word);
            this.declineNeuterPluralEndingO(word);
        }
        else if(word[word.length - 1] === 'e') {
            this.declineNeuterSingularEndingE(word);
            this.declineNeuterPluralEndingE(word);
        }
        else if(word[word.length - 1] === 'ę') {
            this.declineNeuterSingularEndingEzOgonkiem(word);
            this.declineNeuterPluralEndingEzOgonkiem(word);
        }
    }

    // --------------- FEMININE ----------------
    // ---------------------------------------
    // --------------- FEMININE SINGULAR ----------------

    declineFeminineSingularEndingA(word) {
        // ---------------SINGULAR A----------------
        // ---------------NOMINATIVE ----------------
        this.singular.nominative = word;
        // ---------------ACCUSATIVE----------------
        this.singular.accusative = word.substring(0, word.length - 1) + 'ę';
        // ---------------VOCATIVE----------------
        this.singular.vocative = word.substring(0, word.length - 1) + 'o';
        // ---------------GENITIVE----------------
        this.singular.genitive = word.substring(0, word.length - 1) + 'y';
        // ---------------DATIVE, LOC.----------------
        this.singular.dative =
            this.singular.locative = word.substring(0, word.length - 1) + 'ie';
        // ---------------INSTRUMENTAL----------------
        this.singular.instrumental = word.substring(0, word.length - 1) + 'ą';
    }

    // --------------- FEMININE PLURAL ----------------

    declineFemininePluralEndingA(word) {
        // ---------------PLURAL A----------------
        // ---------------NOMINATIVE, ACC., VOC.----------------
        this.plural.nominative =
            this.plural.accusative =
                this.plural.vocative = word.substring(0, word.length - 1) + 'y';
        // ---------------GENITIVE----------------
        this.plural.genitive = word.substring(0, word.length - 1);
        // ---------------DATIVE----------------
        this.plural.dative = word.substring(0, word.length - 1) + 'om';
        // ---------------INSTRUMENTAL----------------
        this.plural.instrumental = word.substring(0, word.length - 1) + 'ami';
        // ---------------LOCATIVE----------------
        this.plural.locative = word.substring(0, word.length - 1) + 'ach';
    }


    // --------------- NEUTER ----------------
    // ---------------------------------------
    // --------------- NEUTER SINGULAR ----------------

    declineNeuterSingularEndingO(word) {
        // ---------------SINGULAR O----------------
        // ---------------NOMINATIVE, ACC., VOC.----------------
        this.singular.nominative =
            this.singular.accusative =
                this.singular.vocative = word;
        // ---------------GENITIVE----------------
        this.singular.genitive = word.substring(0, word.length - 1) + 'a';
        // ---------------DATIVE----------------
        this.singular.dative = word.substring(0, word.length - 1) + 'u';
        // ---------------INSTRUMENTAL----------------
        this.singular.instrumental = word.substring(0, word.length - 1) + 'em';
        // --------Jabłko -> Jabłkiem--------
        // if ends with ko, switch to iem
        if(word[word.length - 2] === 'k') {
            this.singular.instrumental = word.substring(0, word.length - 1) + 'iem';
        }
        // ---------------LOCATIVE----------------
        this.singular.locative = word.substring(0, word.length - 1) + 'ie';
        // --------Koło -> Kole--------
        // if ends with ł, switch to le
        if(word[word.length - 2] === 'ł') {
            this.singular.locative = word.substring(0, word.length - 2) + 'le';
        }
        // --------Jabłko -> Jabłku--------
        // if ends with ko, make same as dative
        if(word[word.length - 2] === 'k') {
            this.singular.locative = this.singular.dative;
        }
    }

    declineNeuterSingularEndingE(word) {
        // ---------------SINGULAR E----------------
        // ---------------NOMINATIVE, ACC., VOC.----------------
        this.singular.nominative =
            this.singular.accusative =
                this.singular.vocative = word;
        // ---------------GENITIVE----------------
        this.singular.genitive = word.substring(0, word.length - 1) + 'a';
        // ---------------DATIVE----------------
        this.singular.dative = word.substring(0, word.length - 1) + 'u';
        // ---------------INSTRUMENTAL----------------
        this.singular.instrumental = word.substring(0, word.length - 1) + 'em';
        // ---------------LOCATIVE----------------
        this.singular.locative = word.substring(0, word.length - 1) + 'u';
    }

    declineNeuterSingularEndingEzOgonkiem(word) {
        // ---------------SINGULAR E Z OGONKIEM----------------
        // -------- Imię -> Imienia --------
        // if 2nd last letter is a vowel or an i
        if(word[word.length - 2] === 'i') {
            // ---------------NOMINATIVE, ACC., VOC.----------------
            this.singular.nominative =
                this.singular.accusative =
                    this.singular.vocative = word;
            // ---------------GENITIVE----------------
            this.singular.genitive = word.substring(0, word.length - 1) + 'enia';
            // ---------------DATIVE----------------
            this.singular.dative = word.substring(0, word.length - 1) + 'eniu';
            // ---------------INSTRUMENTAL----------------
            this.singular.instrumental = word.substring(0, word.length - 1) + 'eniem';
            // ---------------LOCATIVE----------------
            this.singular.locative = word.substring(0, word.length - 1) + 'eniu';
        }
        // -------- Zwierzę -> Zwierzęciem --------
        // if does not have an i in the 2nd last position
        else {
            // ---------------NOMINATIVE, ACC., VOC.----------------
            this.singular.nominative =
                this.singular.accusative =
                    this.singular.vocative = word;
            // ---------------GENITIVE----------------
            this.singular.genitive = word + 'cia';
            // ---------------DATIVE----------------
            this.singular.dative = word + 'ciu';
            // ---------------INSTRUMENTAL----------------
            this.singular.instrumental = word + 'ciem';
            // ---------------LOCATIVE----------------
            this.singular.locative = word + 'ciu';
        }
    }

    // --------------- NEUTER PLURAL ----------------

    declineNeuterPluralEndingO(word) {
        // ---------------PLURAL O----------------
        // ---------------NOMINATIVE, ACC., VOC.----------------
        this.plural.nominative =
            this.plural.accusative =
                this.plural.vocative = word.substring(0, word.length - 1) + 'a';
        // ---------------GENITIVE----------------
        this.plural.genitive = word.substring(0, word.length - 1);
        // --------Koło -> Kół--------
        // if contains an o vowel in the 2nd to last syllable, change to ó
        let lastO = word.indexOf('o', 1);
        if(lastO !== -1 && lastO !== word.length - 1 && (word.length - 1 - lastO) < 3) {
            this.plural.genitive = word.substring(0, lastO) + 'ó' + word.substring(lastO + 1, word.length - 1);
        }
        // --------Jabłko -> Jabłek--------
        // if ends with ko, switch to ek
        if(word[word.length - 2] === 'k') {
            this.plural.genitive = word.substring(0, word.length - 2) + 'ek';
        }
        // ---------------DATIVE----------------
        this.plural.dative = word.substring(0, word.length - 1) + 'om';
        // ---------------INSTRUMENTAL----------------
        this.plural.instrumental = word.substring(0, word.length - 1) + 'ami';
        // ---------------LOCATIVE----------------
        this.plural.locative = word.substring(0, word.length - 1) + 'ach';
    }

    declineNeuterPluralEndingE(word) {
        // ---------------PLURAL E----------------
        // ---------------NOMINATIVE, ACC., VOC.----------------
        this.plural.nominative =
            this.plural.accusative =
                this.plural.vocative = word.substring(0, word.length - 1) + 'a';
        // ---------------GENITIVE----------------
        this.plural.genitive = word.substring(0, word.length - 1);
        // --------Pole -> Pól--------
        // if contains an o vowel, locate the last o
        let lastO = word.indexOf('o');
        if(lastO !== -1) {
            this.plural.genitive = word.substring(0, lastO) + 'ó' + word.substring(lastO + 1, word.length - 1);
        }
        // --------Jedzenie -> Jedzeń--------
        // if ends with nie, switch to ń
        if(word[word.length - 3] === 'n') {
            this.plural.genitive = word.substring(0, word.length - 3) + 'ń';
        }
        // --------Picie -> Pić--------
        // if ends with cie, switch to ć
        else if(word[word.length - 3] === 'c') {
            this.plural.genitive = word.substring(0, word.length - 3) + 'ć';
        }
        // ---------------DATIVE----------------
        this.plural.dative = word.substring(0, word.length - 1) + 'om';
        // ---------------INSTRUMENTAL----------------
        this.plural.instrumental = word.substring(0, word.length - 1) + 'ami';
        // ---------------LOCATIVE----------------
        this.plural.locative = word.substring(0, word.length - 1) + 'ach';
    }

    declineNeuterPluralEndingEzOgonkiem(word) {
        // ---------------PLURAL E Z OGONKIEM----------------
        // -------- Imię -> Imion --------
        // if 2nd last letter is a vowel or an i
        if(word[word.length - 2] === 'i') {
            // ---------------NOMINATIVE, ACC., VOC.----------------
            this.plural.nominative =
                this.plural.accusative =
                    this.plural.vocative = word.substring(0, word.length - 1) + 'ona';
            // ---------------GENITIVE----------------
            this.plural.genitive = word.substring(0, word.length - 1) + 'on';
            // ---------------DATIVE----------------
            this.plural.dative = word.substring(0, word.length - 1) + 'onom';
            // ---------------INSTRUMENTAL----------------
            this.plural.instrumental = word.substring(0, word.length - 1) + 'onami';
            // ---------------LOCATIVE----------------
            this.plural.locative = word.substring(0, word.length - 1) + 'onach';
        }
        // -------- Zwierzę -> Zwierzęta --------
        // if does not have an i in the 2nd last position
        else {
            // ---------------NOMINATIVE, ACC., VOC.----------------
            this.plural.nominative =
                this.plural.accusative =
                    this.plural.vocative = word + 'ta';
            // ---------------GENITIVE----------------
            this.plural.genitive = word.substring(0, word.length - 1) + 'ąt';
            // ---------------DATIVE----------------
            this.plural.dative = word + 'tom';
            // ---------------INSTRUMENTAL----------------
            this.plural.instrumental = word + 'tami';
            // ---------------LOCATIVE----------------
            this.plural.locative = word + 'tach';
        }
    }
}

export default declension;

import {useState} from "react";
import DeclensionTable from "./DeclensionTable";
import Declensions from "../classes/Declensions";

const Declension = () => {
    const [selectedDeclension, setSelectedDeclension] = useState(null);
    const [gender, setGender] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const word = document.getElementById('inputDeclension1').value;
        let declensions = new Declensions();

        // determine if word is masculine, feminine, or neuter
        const lastLetter = word[word.length - 1];
        if(lastLetter === 'o' || lastLetter === 'e' || lastLetter === 'ę') {
            setGender("Neuter");
            declineNeuter(word, declensions);
        }

        setSelectedDeclension(declensions);
    }

    function declineNeuter(word, declensions) {
        // check if last letter is o
        if(word[word.length - 1] === 'o') {
            // singular
            declensions.singular.nominative =
                declensions.singular.accusative =
                declensions.singular.vocative = word;
            declensions.singular.genitive = word.substring(0, word.length - 1) + 'a';
            declensions.singular.dative = word.substring(0, word.length - 1) + 'u';
            declensions.singular.instrumental = word.substring(0, word.length - 1) + 'em';
            declensions.singular.locative = word.substring(0, word.length - 1) + 'ie';
            // if ends with ł, switch to le
            if(word[word.length - 2] === 'ł') {
                declensions.singular.locative = word.substring(0, word.length - 2) + 'le';
            }

            // plural
            declensions.plural.nominative =
                declensions.plural.accusative =
                declensions.plural.vocative = word.substring(0, word.length - 1) + 'a';
            declensions.plural.genitive = word.substring(0, word.length - 1);
            // if contains an o vowel, locate the last o
            let lastO = word.indexOf('o');
            if(lastO !== -1) {
                declensions.plural.genitive = word.substring(0, lastO) + 'ó' + word.substring(lastO + 1, word.length - 1);
            }

            declensions.plural.dative = word.substring(0, word.length - 1) + 'om';
            declensions.plural.instrumental = word.substring(0, word.length - 1) + 'ami';
            declensions.plural.locative = word.substring(0, word.length - 1) + 'ach';
        }

        // check if last letter is e
        if(word[word.length - 1] === 'e') {
            // singular
            declensions.singular.nominative =
                declensions.singular.accusative =
                declensions.singular.vocative = word;
            declensions.singular.genitive = word.substring(0, word.length - 1) + 'a';
            declensions.singular.dative = word.substring(0, word.length - 1) + 'u';
            declensions.singular.instrumental = word.substring(0, word.length - 1) + 'em';
            declensions.singular.locative = word.substring(0, word.length - 1) + 'u';

            // plural
            declensions.plural.nominative =
                declensions.plural.accusative =
                declensions.plural.vocative = word.substring(0, word.length - 1) + 'a';
            declensions.plural.genitive = word.substring(0, word.length - 1);
            // if contains an o vowel, locate the last o
            let lastO = word.indexOf('o');
            if(lastO !== -1) {
                declensions.plural.genitive = word.substring(0, lastO) + 'ó' + word.substring(lastO + 1, word.length - 1);
            }

            // if ends with nie, switch to ń
            if(word[word.length - 3] === 'n') {
                declensions.plural.genitive = word.substring(0, word.length - 3) + 'ń';
            }
            // if ends with cie, switch to ć
            else if(word[word.length - 3] === 'c') {
                declensions.plural.genitive = word.substring(0, word.length - 3) + 'ć';
            }

            declensions.plural.dative = word.substring(0, word.length - 1) + 'om';
            declensions.plural.instrumental = word.substring(0, word.length - 1) + 'ami';
            declensions.plural.locative = word.substring(0, word.length - 1) + 'ach';
        }

        // check if last letter is ę
        if(word[word.length - 1] === 'ę') {
            // check if 2nd last letter is a vowel or a consonant
            if(word[word.length - 2] === 'i') {
                // singular
                declensions.singular.nominative =
                    declensions.singular.accusative =
                    declensions.singular.vocative = word;
                declensions.singular.genitive = word.substring(0, word.length - 1) + 'enia';
                declensions.singular.dative = word.substring(0, word.length - 1) + 'eniu';
                declensions.singular.instrumental = word.substring(0, word.length - 1) + 'eniem';
                declensions.singular.locative = word.substring(0, word.length - 1) + 'eniu';

                // plural
                declensions.plural.nominative =
                    declensions.plural.accusative =
                    declensions.plural.vocative = word.substring(0, word.length - 1) + 'ona';
                declensions.plural.genitive = word.substring(0, word.length - 1) + 'on';
                declensions.plural.dative = word.substring(0, word.length - 1) + 'onom';
                declensions.plural.instrumental = word.substring(0, word.length - 1) + 'onami';
                declensions.plural.locative = word.substring(0, word.length - 1) + 'onach';
            }
            // does not end in i
            else {
                // singular
                declensions.singular.nominative =
                    declensions.singular.accusative =
                    declensions.singular.vocative = word;
                declensions.singular.genitive = word + 'cia';
                declensions.singular.dative = word + 'ciu';
                declensions.singular.instrumental = word + 'ciem';
                declensions.singular.locative = word + 'ciu';

                // plural
                declensions.plural.nominative =
                    declensions.plural.accusative =
                    declensions.plural.vocative = word + 'ta';
                declensions.plural.genitive = word.substring(0, word.length - 1) + 'ąt';
                declensions.plural.dative = word + 'tom';
                declensions.plural.instrumental = word + 'tami';
                declensions.plural.locative = word + 'tach';
            }
        }
    }

    return (
        <div className="page-content">
            <h1>Declension</h1>
            <br />
            <h3>Enter a word to decline</h3>
            <br />
            <form>
                <div className="form-group">
                    <label htmlFor="inputDeclension1">Word</label>
                    <input type="word" className="form-control" id="inputDeclension1" aria-describedby="declensionHelp" placeholder="Enter a word" />
                    <small id="declensionHelp" className="form-text text-muted">The entered word must be in the nominative case</small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Decline</button>
            </form>
            <br />
            {selectedDeclension && (
                <div>
                    <div>
                        Grammatical gender: {gender}
                    </div>
                    <div>
                        {DeclensionTable({declension: selectedDeclension})}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Declension;
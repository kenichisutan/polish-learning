import {useState} from "react";
import DeclensionTable from "./DeclensionTable";
import Declensions from "../classes/Declensions";

const Declension = () => {
    const [selectedDeclension, setSelectedDeclension] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        const word = document.getElementById('inputDeclension1').value;
        let declensions = new Declensions();

        // determine if word is masculine, feminine, or neuter
        const lastLetter = word[word.length - 1];
        if(lastLetter === 'o' || lastLetter === 'e' || lastLetter === 'ę') {
            declineNeuter(word, declensions);
        }

        setSelectedDeclension(declensions);
    }

    function declineNeuter(word, declensions) {
        // check if last letter is o
        if(word[word.length - 1] === 'o') {
            declensions.singular.nominative =
                declensions.singular.accusative =
                declensions.singular.vocative = word;
            declensions.singular.genitive = word.substring(0, word.length - 1) + 'a';
            declensions.singular.dative = word.substring(0, word.length - 1) + 'u';
            declensions.singular.instrumental = word.substring(0, word.length - 1) + 'em';
            declensions.singular.locative = word.substring(0, word.length - 1) + 'ie';

            declensions.plural.nominative =
                declensions.plural.accusative =
                declensions.plural.vocative = word.substring(0, word.length - 1) + 'a';
            declensions.plural.genitive = word.substring(0, word.length - 1);
            declensions.plural.dative = word.substring(0, word.length - 1) + 'om';
            declensions.plural.instrumental = word.substring(0, word.length - 1) + 'ami';
            declensions.plural.locative = word.substring(0, word.length - 1) + 'ach';
        }

        // check if last letter is e
        if(word[word.length - 1] === 'e' || word[word.length - 1] === 'ę') {
            declensions.singular.nominative =
                declensions.singular.accusative =
                declensions.singular.vocative = word;
            declensions.singular.genitive = word.substring(0, word.length - 1) + 'a';
            declensions.singular.dative = word.substring(0, word.length - 1) + 'u';
            declensions.singular.instrumental = word.substring(0, word.length - 1) + 'em';
            declensions.singular.locative = word.substring(0, word.length - 1) + 'u';

            declensions.plural.nominative =
                declensions.plural.accusative =
                declensions.plural.vocative = word.substring(0, word.length - 1) + 'a';

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
    }

    return (
        <div>
            <h1>Declension</h1>
            <br />
            <h3>Enter a word to decline</h3>
            <br />
            <form>
                <div className="form-group">
                    <label htmlFor="inputDeclension1">Word</label>
                    <input type="word" className="form-control" id="inputDeclension1" aria-describedby="declensionHelp" placeholder="Enter a word" />
                    <small id="declensionHelp" className="form-text text-muted">Test</small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
            <br />
            {selectedDeclension && (
            DeclensionTable({declension: selectedDeclension})
            )}
        </div>
    )
}

export default Declension;
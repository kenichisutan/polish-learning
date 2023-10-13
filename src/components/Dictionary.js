import "../styles/Dictionary.css";
import {useState} from "react";
import DictionaryEntry from "./DictionaryEntry";

const Dictionary = () => {
    const [words, setWords] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        const entry = document.getElementById('inputDictionary1').value;
        // uncapitalize the first letter
        const lowerCaseEntry = entry.charAt(0).toLowerCase() + entry.slice(1);
        console.log(lowerCaseEntry);

        // dictionary search logic

        let entryTest = [
            {
                word: "śniadanie",
                definition: "breakfast",
                type: "noun",
                gender: "neuter"
            },
            {
                word: "obiad",
                definition: "lunch",
                type: "noun",
                gender: "masculine"
            }
        ]

        setWords(entryTest);
    }

    return (
        <div className="page-content">
            <h1>Dictionary</h1>
            <br />
            <form>
                <div className="form-group">
                    <label htmlFor="inputDictionary1">Enter a word to search</label>
                    <input type="word" className="form-control" id="inputDictionary1" aria-describedby="dictionaryHelp" placeholder="śniadanie" />
                    <small id="dictionaryHelp" className="form-text text-muted">Enter a Polish word above.</small>
                </div>
                <button type="submit" className="btn btn-outline-danger" onClick={handleSubmit}>Search</button>
            </form>
            <br />
            {words.map( (word) =>
                <div>
                    <DictionaryEntry entry={word} />
                    <br />
                </div>
            )}
        </div>
    )
}

export default Dictionary;
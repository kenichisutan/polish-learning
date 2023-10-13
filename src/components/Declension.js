import {useEffect, useState} from "react";
import DeclensionTable from "./DeclensionTable";
import Declensions from "../classes/Declensions";
import {useParams} from "react-router-dom";

const Declension = () => {
    const [selectedDeclension, setSelectedDeclension] = useState(null);
    const [word, setWord] = useState("");
    const [gender, setGender] = useState("");
    let { passedWord } = useParams();

    async function handleSubmit(event) {
        event.preventDefault();
        const entry = document.getElementById('inputDeclension1').value;

        await handleDeclension(entry);

        // change the url to reflect the new word
        window.history.pushState({}, null, '/declension/' + entry);
    }

    const handleDeclension = async ( noun ) => {
        // uncapitalize the first letter
        const lowerCaseEntry = noun.charAt(0).toLowerCase() + noun.slice(1);
        setWord(lowerCaseEntry);

        const declensions = new Declensions();
        await declensions.decline(lowerCaseEntry);

        setGender(declensions.gender);
        setSelectedDeclension(declensions);
    }

    // check if passedWord is empty or not
    useEffect(() => {
        // if passedWord is not empty
        if (passedWord) {
            // fill the form with the passedWord
            document.getElementById('inputDeclension1').value = passedWord;
            // call handleDeclension with the passedWord
            handleDeclension(passedWord);
        }
    }, [passedWord]);

    return (
        <div className="page-content">
            <h1>Declension</h1>
            <br />
            <form>
                <div className="form-group">
                    <label htmlFor="inputDeclension1">Enter a word to decline</label>
                    <input type="word" className="form-control" id="inputDeclension1" aria-describedby="declensionHelp" placeholder="śniadanie" />
                    <small id="declensionHelp" className="form-text text-muted">The entered word must be in the nominative case.</small>
                </div>
                <button type="submit" className="btn btn-outline-danger" onClick={handleSubmit}>Decline</button>
            </form>
            <br />
            {selectedDeclension && (
                <div>
                    <div className="word-container">
                        <p className="active-word">{word}</p>
                        <em className="description-text">{gender}</em>
                    </div>
                    <div>
                        <DeclensionTable declension={selectedDeclension} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Declension;
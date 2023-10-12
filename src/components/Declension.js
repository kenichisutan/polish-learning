import {useState} from "react";
import DeclensionTable from "./DeclensionTable";
import Declensions from "../classes/Declensions";

const Declension = () => {
    const [selectedDeclension, setSelectedDeclension] = useState(null);
    const [word, setWord] = useState("");
    const [gender, setGender] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        const entry = document.getElementById('inputDeclension1').value;
        // uncapitalize the first letter
        const lowerCaseEntry = entry.charAt(0).toLowerCase() + entry.slice(1);
        setWord(lowerCaseEntry);

        const declensions = new Declensions();
        await declensions.decline(lowerCaseEntry);

        setGender(declensions.gender);
        setSelectedDeclension(declensions);
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
                    <small id="declensionHelp" className="form-text text-muted">The entered word must be in the nominative case.</small>
                </div>
                <button type="submit" className="btn btn-outline-danger" onClick={handleSubmit}>Decline</button>
            </form>
            <br />
            {selectedDeclension && (
                <div>
                    <div className="word-container">
                        <p className="active-word">{word}</p>
                        <em className="gender-text">{gender}</em>
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